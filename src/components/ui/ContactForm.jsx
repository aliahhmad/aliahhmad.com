import { useEffect, useId, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import toast from "react-hot-toast";

const inputClass = "w-full rounded-xl border border-white/20 bg-white/10 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-white/60";

// Renders the contact modal and submits messages to the serverless contact API.
function ContactForm({ isOpen, onClose }) {
  const dialogRef = useRef(null);
  const emailRef = useRef(null);
  const formId = useId();
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    const previousFocus = document.activeElement;
    const previousOverflow = document.body.style.overflow;
    dialog.showModal();
    emailRef.current.focus();
    document.body.style.overflow = "hidden";

    return () => {
      dialog.close();
      document.body.style.overflow = previousOverflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus();
    };
  }, [isOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSending) return;
    if (!message.trim()) {
      setError("Please write a message before sending.");
      return;
    }
    setIsSending(true);
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, email }),
      });

      const result = await res.json();
      if (!res.ok || !result.success) throw new Error("Failed to send");

      setMessage("");
      setEmail("");
      onClose();
      toast.success("Message sent!");
    } catch {
      setError("Your message couldn't be sent. Please try again. Your details are still here.");
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  // Render into document.body so the modal is not constrained by parent stacking contexts.
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
      <button
        type="button"
        onClick={onClose}
        aria-label="Close contact form"
        className="absolute top-4 right-4 rounded-full p-2 text-white/60 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
      >
        <X size={20} aria-hidden="true" />
      </button>
      <div className="flex gap-4 items-center pr-6 mb-6">
        <img
          src="/home/profile_picture.jpg"
          alt="Ali Ahmad"
          className="w-12 h-12 rounded-full object-cover flex-shrink-0"
        />
        <div className="border-l border-white/40 pl-4">
          <h2 id={`${formId}-title`} className="text-lg font-semibold">Contact me</h2>
          <p id={`${formId}-description`} className="text-white/70 text-sm leading-relaxed mt-1">
            Hey, thanks for visiting my website! If you have any questions or
            just want to say hi, feel free to send me a message.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} aria-busy={isSending}>
        <fieldset disabled={isSending} className="flex flex-col gap-4 disabled:opacity-60">
          <div className="flex flex-col gap-2">
            <label htmlFor={`${formId}-email`} className="text-sm text-white/80">Email <span className="text-white/50">(optional)</span></label>
            <input
              ref={emailRef}
              id={`${formId}-email`}
              name="email"
              type="email"
              autoComplete="email"
              maxLength={254}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className={inputClass}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor={`${formId}-message`} className="text-sm text-white/80">Message</label>
            <textarea
              id={`${formId}-message`}
              name="message"
              required
              maxLength={1000}
              rows={4}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Write a message..."
              className={`${inputClass} resize-y`}
            />
            <p className="text-xs text-white/50">{message.length} / 1,000 characters</p>
          </div>
          {error && <p role="alert" className="text-sm text-red-300">{error}</p>}
          <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
            <p className="text-xs text-white/60">Leave your email if you'd like a reply.</p>
            <button
              type="submit"
              disabled={!message.trim() || isSending}
              className="glass rounded-full px-6 py-2 text-sm font-medium transition hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
            >
              {isSending ? "Sending..." : "Send message"}
            </button>
          </div>
        </fieldset>
      </form>
    </dialog>,
    document.body
  );
}

export default ContactForm;
