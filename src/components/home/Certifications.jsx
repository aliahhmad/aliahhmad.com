import React from "react";

const CERTIFICATIONS = [
  {
    id: "awscloudpractitioner",
    title: "AWS Cloud Practitioner",
    company: "Amazon Web Services",
    description:
      "Strengthened expertise in deploying scalable, cloud-based applications and understanding cloud infrastructure for AI-driven systems.",
    issueDate: "April 2026",
    expiryDate: "April 2029",
    picture: "/certifications/cloud_practitioner.png",
  },
];

const Certifications = () => {
  return (
    <section className="bg-surface-deep flex flex-col gap-6 py-2 px-10">
      <h2 className="text-white text-2xl">Certifications</h2>
      <div>
        {CERTIFICATIONS.map((cert) => (
          <React.Fragment key={cert.id}>
            <article className="flex gap-3 items-center text-white">
              <img
                src={cert.picture}
                alt={cert.company}
                className="w-14 h-14 object-cover rounded-xl shrink-0"
              />
              <div>
                <div className="flex flex-1 flex-col sm:flex-row sm:justify-between sm:items-center gap-1 text-lg">
                  <h3>
                    <span className="opacity-70">
                      {cert.title}
                      {" - "}
                    </span>
                    {cert.company}
                  </h3>
                  <p className="opacity-70">
                    {cert.issueDate} - {cert.expiryDate}
                  </p>
                </div>
                <div>
                    <p className="italic text-white opacity-70">{cert.description}</p>
                </div>
              </div>
            </article>
            <hr className="border-t border-white opacity-20 w-full my-4" />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Certifications;
