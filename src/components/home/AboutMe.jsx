import { useState } from "react";
import ContactForm from "../ui/ContactForm";

// Introduces the person behind the portfolio and provides a direct contact entry point.
const AboutMe = () => {
  const [isContactFromOpen, setContactFromOpen] = useState(false);

  return (
    <section className="bg-surface-deep flex flex-col py-2 px-10">
      <div className="flex flex-col gap-4 text-white">
        <div className="text-2xl">About Me</div>
        <div className="flex flex-col gap-2 text-lg opacity-70 ">
          <p>
            I'm a full stack developer currently doing my MS in Computer Science
            at Rochester Institute of Technology (RIT), Rochester, NY — GPA 4.0.
            Before that, I earned my BS in CS at LUMS (Pakistan) with the High
            Merit Award and Dean's Honor List recognition every year.
          </p>
          <p>
            I care about building things that work at scale — from LLM-powered
            features to production-grade full stack systems. Right now I'm
            diving deep into AI agents and cloud infrastructure.
          </p>
          <p>
            Actively seeking Software Engineering internships and co-ops. If
            you're hiring, reach out!
          </p>
        </div>
      </div>
      <div>
        <hr className="border-t border-white opacity-20 w-full my-4" />
        <div className="text-white text-lg">
          <p>
            {/* Reuse the same modal contact flow from the nav to keep outreach consistent. */}
            <a
              onClick={() => setContactFromOpen(true)}
              className="underline decoration-dotted"
            >
              Contact Me
            </a>{" "}
            <span className="opacity-70">or say hi on</span>{" "}
            <a
              href="https://www.linkedin.com/in/aliahhmad/"
              className="underline decoration-dotted"
            >
              Linked In
            </a>
            <span className="opacity-70">{" :)"}</span>
          </p>
        </div>
        <hr className="border-t border-white opacity-20 w-full my-4" />
        <ContactForm
          isOpen={isContactFromOpen}
          onClose={() => setContactFromOpen(false)}
        />
      </div>
    </section>
  );
};

export default AboutMe;
