// components/ui/ContactForm.jsx
import { useState } from "react";
import toast from "react-hot-toast";

function ContactForm({ isOpen, onClose }) {
  const [message, setMessage] = useState("");
  const [email, setEmail] = useState("");
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message, email }),
      });

      if (!res.ok) throw new Error("Failed to send");

      setMessage("");
      setEmail("");
      onClose();
      toast.success("Message sent!");
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setIsSending(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9998] bg-black/60 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-200"
      onClick={onClose}
    >
      <section
        className="glass flex flex-col gap-6 p-8 w-full max-w-xl rounded-2xl z-[9999] relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-white/60 hover:text-white text-xl transition"
        >
          ✕
        </button>
        <div className="flex gap-4 items-center">
          <img
            src="/home/profile_picture.jpg"
            alt="Ali Ahmad"
            className="w-14 h-14 rounded-full object-cover flex-shrink-0"
          />
          <div className="border-l border-white/40 pl-4">
            <h2 className="text-white font-semibold text-lg">Ali Ahmad</h2>
            <p className="text-white/70 text-sm leading-relaxed mt-1">
              Hey, thanks for visiting my website! If you have any questions or
              just want to say hi, feel free to send me a message.
            </p>
          </div>
        </div>

        <form onSubmit={ handleSubmit }>
          <div className="bg-white/10 rounded-xl p-4 flex flex-col gap-3">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value.slice(0, 1000))}
              placeholder="Write a message..."
              className="bg-transparent text-white placeholder-white/40 resize-none outline-none text-sm h-24"
            />

            <hr className="border-white/20" />

            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="optional@email.com (if you'd like a response)"
              className="bg-transparent text-white placeholder-white/40 outline-none text-sm"
            />

            <hr className="border-white/20" />

            <div className="flex items-center justify-between">
              <span className="text-white/40 text-sm">
                {message.length} / 1,000
              </span>
              <button
                type="submit"
                disabled={!message || isSending}
                className="glass opacity-90 hover:opacity-100 text-white text-sm font-medium px-6 py-2 rounded-full transition"
              >
                {isSending ? "Sending..." : "Send"}
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}

export default ContactForm;
