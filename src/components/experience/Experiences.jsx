import { Link } from "react-router-dom";
import experiences from "../../data/allExperiences.json";

// Displays work experience in a compact timeline-style list.
const Experiences = () => {
  return (
    <section className="bg-surface-deep flex flex-col gap-6 py-2 px-10">
      <h2 className="text-white text-2xl">Experiences</h2>
      <div>
        {experiences.map((exp) => (
          <article
            key={exp.id}
            className="border-b border-white/20 last:border-b-0"
          >
            <Link
              to={`/experience/${exp.id}`}
              className="flex gap-3 items-center text-white py-4 px-2 rounded-lg transition-colors hover:bg-white/5 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
            >
              <img
                src={exp.picture}
                alt={exp.company}
                className="w-9 h-9 object-cover rounded-xl shrink-0"
              />
              <div className="flex flex-1 flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-lg">
                <h3>
                  <span className="opacity-70">
                    {exp.title}
                    {" - "}
                  </span>
                  {exp.company}
                </h3>
                <p className="opacity-70 shrink-0 sm:text-right">{exp.date}</p>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <Link
        to="/experiences"
        className="self-end text-white text-lg hover:underline"
      >
        See all experiences →
      </Link>
    </section>
  );
};

export default Experiences;
