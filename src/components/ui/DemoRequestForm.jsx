import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { demoRoles } from "../../data/demos";

const inputClass = "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60";

function DemoRequestForm({ demo, onClose }) {
  const dialogRef = useRef(null);
  const nameRef = useRef(null);
  const formId = useId();
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    nameRef.current.focus();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (isSending) return;
    const fields = Object.fromEntries(new FormData(event.currentTarget));
    if (!fields.name.trim() || !fields.message.trim()) {
      setError("Please enter your name and tell me why you'd like to try the demo.");
      return;
    }
    setIsSending(true);
    setError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...fields, type: "demo-request", projectId: demo.id }),
      });
      const result = await response.json();
      if (!response.ok || !result.success) throw new Error("Request failed");
      toast.success(`Request sent! I'll follow up by email about ${demo.name}.`);
      onClose();
    } catch {
      setError("Your request couldn't be sent. Please try again. Your details are still here.");
    } finally {
      setIsSending(false);
    }
  };

  return createPortal(
    <dialog
      ref={dialogRef}
      aria-labelledby={`${formId}-title`}
      aria-describedby={`${formId}-description`}
      onCancel={onClose}
      onClick={(event) => {
        if (event.target !== event.currentTarget) return;
        const bounds = event.currentTarget.getBoundingClientRect();
        if (event.clientX < bounds.left || event.clientX > bounds.right || event.clientY < bounds.top || event.clientY > bounds.bottom) onClose();
      }}
      className="glass m-auto w-[calc(100%-2rem)] max-w-xl max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl p-6 sm:p-8 text-white backdrop:bg-black/60 backdrop:backdrop-blur-2xl"
    >
      <button type="button" onClick={onClose} aria-label="Close demo request" className="absolute top-4 right-4 rounded-full p-2 text-white/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">
        <X size={20} aria-hidden="true" />
      </button>
      <div className="flex gap-4 items-center pr-6 mb-6">
        <img src="/home/profile_picture_1.jpg" alt="Ali Ahmad" className="w-12 h-12 rounded-full object-cover flex-shrink-0" />
        <div className="border-l border-white/40 pl-4">
          <h2 id={`${formId}-title`} className="text-lg font-semibold">Request a {demo.name} demo</h2>
          <p id={`${formId}-description`} className="text-white/70 text-sm leading-relaxed mt-1">Tell me a little about yourself. I'll follow up by email with the next steps for trying the live site.</p>
        </div>
      </div>
      <form onSubmit={handleSubmit} aria-busy={isSending}>
        <fieldset disabled={isSending} className="flex flex-col gap-4 disabled:opacity-60">
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor={`${formId}-name`} className="text-sm text-white/80">Name</label>
              <input ref={nameRef} id={`${formId}-name`} name="name" autoComplete="name" required maxLength={100} placeholder="Your name" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor={`${formId}-email`} className="text-sm text-white/80">Email</label>
              <input id={`${formId}-email`} name="email" type="email" autoComplete="email" required maxLength={254} placeholder="you@example.com" className={inputClass} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${formId}-role`} className="text-sm text-white/80">What brings you here?</label>
            <select id={`${formId}-role`} name="role" required defaultValue="" className={inputClass}>
              <option value="" disabled className="bg-surface-deep">Select an option</option>
              {demoRoles.map((role) => <option key={role} value={role} className="bg-surface-deep">{role}</option>)}
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${formId}-message`} className="text-sm text-white/80">Why would you like to try this demo?</label>
            <textarea id={`${formId}-message`} name="message" required maxLength={1000} rows={3} placeholder="What would you like to explore or test?" className={`${inputClass} resize-y`} />
            <p className="text-xs text-white/50">Up to 1,000 characters. All fields are required.</p>
          </div>
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <p className="text-xs text-white/60">I'll use your details to respond to this request.</p>
            <button type="submit" className="glass rounded-full px-6 py-2 text-sm font-medium transition hover:bg-white/20 disabled:cursor-wait focus-visible:outline focus-visible:outline-2 focus-visible:outline-white">{isSending ? "Sending..." : "Send request"}</button>
          </div>
        </fieldset>
      </form>
    </dialog>,
    document.body,
  );
}

export default DemoRequestForm;
