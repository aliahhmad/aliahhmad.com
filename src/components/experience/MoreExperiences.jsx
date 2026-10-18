import { Link } from "react-router-dom";
import experiences from "../../data/allExperiences.json";

function MoreExperiences({ currentId }) {
  return (
    <nav
      aria-label="More experiences"
      className="flex flex-col gap-4 border-t border-white/20 pt-6"
    >
      <h2 className="text-xl font-semibold">More experiences</h2>
      <div className="grid gap-4 sm:grid-cols-2">
        {experiences
          .filter((experience) => experience.id !== currentId)
          .map((other) => (
            <Link
              key={other.id}
              to={`/experience/${other.id}`}
              className="glass-flat rounded-xl p-4 flex flex-col gap-2 hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
            >
              <span className="text-white/60">{other.company}</span>
              <span>{other.title} →</span>
            </Link>
          ))}
      </div>
    </nav>
  );
}

export default MoreExperiences;
