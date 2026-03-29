import React from "react";

const EXPERIENCES = [
  {
    id: "conrad",
    title: "Developer Intern",
    company: "Conrad Labs",
    date: "Jun 2023 - Jul 2023",
    picture: "/work/conrad_labs_logo.png",
  },
  {
    id: "wateen",
    title: "Machine Learning Intern",
    company: "Wateen Telecom",
    date: "Jul 2022 - Aug 2022",
    picture:
      "/work/wateen_telecom_logo.jpg",
  },
];

// Displays internship experience in a compact timeline-style list.
const Experiences = () => {
  return (
    <section className="bg-surface-deep flex flex-col gap-6 py-2 px-10">
      <h2 className="text-white text-2xl">Experiences</h2>
      <div>
        {EXPERIENCES.map((exp) => (
          <React.Fragment key={exp.id}>
            <article className="flex gap-3 items-center text-white">
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
                <p className="opacity-70">
                  {exp.date}
                </p>
              </div>
            </article>
            <hr className="border-t border-white opacity-20 w-full my-4" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Experiences;
