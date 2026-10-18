import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import NavBar from "../components/layout/NavBar";
import PageFooter from "../components/layout/PageFooter";
import RITExperience from "../components/experience-detail/RITExperience";
import ConradLabsExperience from "../components/experience-detail/ConradLabsExperience";
import WateenTelecomExperience from "../components/experience-detail/WateenTelecomExperience";
import usePageMetadata from "../hooks/usePageMetadata";
import experiences from "../data/allExperiences.json";

const experiencePages = {
  3: <RITExperience />,
  2: <ConradLabsExperience />,
  1: <WateenTelecomExperience />,
};

function ExperiencePage() {
  const { id } = useParams();
  const experience = experiences.find((item) => item.id === id);
  const page = experience ? experiencePages[id] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  usePageMetadata({
    title: experience
      ? `${experience.title} at ${experience.company}`
      : "Experience not found",
    path: experience ? `/experience/${experience.id}` : "/experiences",
    description: experience?.summary,
  });

  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      {page ? (
        page
      ) : (
        <section className="px-6 sm:px-10 py-10 flex flex-col gap-4 text-white">
          <h1 className="text-3xl font-bold">Experience not found</h1>
          <p className="text-white/60">This experience could not be found.</p>
          <Link to="/experiences" className="self-start hover:underline">
            See all experiences →
          </Link>
        </section>
      )}
      <PageFooter />
    </div>
  );
}

export default ExperiencePage;
