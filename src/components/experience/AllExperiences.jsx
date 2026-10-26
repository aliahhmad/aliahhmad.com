import { Link } from "react-router-dom";
import experiences from "../../data/allExperiences.json";

function AllExperiences() {
  return (
    <section className="bg-surface-deep flex flex-col gap-6 py-2 px-10">
      <header className="flex flex-col gap-3">
        <h1 className="text-white text-2xl">All Experiences</h1>
        <p className="text-white/60 text-lg">
          My work in frontend development, workflow automation, and machine
          learning.
        </p>
      </header>
      <div className="flex flex-col gap-4">
        {experiences.map((experience) => (
          <article key={experience.id}>
            <Link
              to={`/experience/${experience.id}`}
              className="glass-flat rounded-xl p-5 sm:p-6 flex flex-col gap-4 text-white transition-colors hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/70"
            >
              <div className="flex items-start gap-4">
                <img
                  src={experience.picture}
                  alt={experience.company}
                  className="w-12 h-12 object-cover rounded-xl shrink-0"
                />
                <div className="flex flex-col gap-1">
                  <h2 className="text-xl font-bold">{experience.title}</h2>
                  <p className="text-white/80">{experience.company}</p>
                  <p className="text-white/50">{experience.date}</p>
                </div>
              </div>
              <p className="text-white/70 leading-relaxed">
                {experience.summary}
              </p>
              <span className="self-end">View experience →</span>
            </Link>
          </article>
        ))}
      </div>
    </section>
  );
}

export default AllExperiences;
