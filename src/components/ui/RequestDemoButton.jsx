import { useState } from "react";
import demos from "../../data/demos";
import DemoRequestForm from "./DemoRequestForm";

function RequestDemoButton({ demoId }) {
  const [isOpen, setIsOpen] = useState(false);
  const demo = demos.find((item) => item.id === demoId);

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-haspopup="dialog"
        aria-label={`Request demo for ${demo.name}`}
        className="glass-flat text-white text-base font-semibold px-5 py-2 rounded-full transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
      >
        Request Demo
      </button>
      {isOpen && <DemoRequestForm demo={demo} onClose={() => setIsOpen(false)} />}
    </>
  );
}

export default RequestDemoButton;
