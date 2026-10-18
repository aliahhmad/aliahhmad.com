import { Link } from "react-router-dom";
import SmallPills from "../ui/SmallPills";
import MoreExperiences from "../experience/MoreExperiences";
import experiences from "../../data/allExperiences.json";

const experience = experiences.find((item) => item.id === "3");
const skills = [
  "React",
  "Next.js",
  "TypeScript",
  "Web Accessibility",
  "WCAG",
  "UI Development",
];
const highlights = [
  "Develop and maintain PawPrints, RIT Student Government’s petition platform, using React, Next.js, and TypeScript.",
  "Work on web accessibility toward WCAG compliance.",
  "Improve the UI and address ongoing bugs following the platform’s migration to a modern stack and new domain.",
];

function RITExperience() {
  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-6 sm:px-10 py-2 text-white">
      <header className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <img
            src={experience.picture}
            alt={experience.company}
            className="w-14 h-14 object-cover rounded-xl shrink-0"
          />
          <div className="flex flex-col gap-1">
            <p className="text-white/80 text-lg">{experience.company}</p>
            <p className="text-white/50">{experience.date}</p>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">{experience.title}</h1>
        <p className="text-white/60 text-lg leading-relaxed">
          {experience.summary}
        </p>
        <SmallPills items={skills} />
      </header>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-white/70 leading-relaxed">
          {
            "During the 2026–2027 academic year, I work on PawPrints using React, Next.js, and TypeScript. Following the platform’s migration to a modern stack and new domain, my work focuses on improving the interface, addressing accessibility, and fixing bugs."
          }
        </p>
      </section>

      <section className="glass-flat rounded-xl p-5 sm:p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Key contributions</h2>
        <ul className="list-disc pl-5 space-y-3 text-white/70 leading-relaxed">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <MoreExperiences currentId={experience.id} />
      <Link
        to="/experiences"
        className="text-lg text-white/60 hover:text-white self-end hover:underline"
      >
        See all experiences →
      </Link>
    </section>
  );
}

export default RITExperience;
