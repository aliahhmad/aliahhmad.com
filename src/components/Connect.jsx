// src/components/Connect.jsx
import { Github, Linkedin } from "lucide-react";

const SOCIALS = [
  {
    id: "github",
    icon: <Github size={18} />,
    handle: "@aliahhmad",
    url: "https://github.com/aliahhmad",
  },
  {
    id: "linkedin",
    icon: <Linkedin size={18} />,
    handle: "aliahhmad",
    url: "https://linkedin.com/in/aliahhmad",
  },
];

function Connect() {
  return (
    <section className="bg-surface-deep flex flex-col gap-6 py-2 px-10">
      <div className="text-white flex flex-col gap-4">
        <div className="text-2xl">Let's connect</div>
        <p className="text-lg opacity-60">
          Feel free to connect with me on any of these platforms!
        </p>
      </div>

      <div className="flex flex-wrap gap-3">
        {SOCIALS.map((social) => (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="glass flex items-center gap-2 px-4 py-3 rounded-full text-white text-base cursor-pointer transition-transform duration-200 hover:scale-[1.03]"
          >
            {social.icon}
            <span>{social.handle}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Connect;
