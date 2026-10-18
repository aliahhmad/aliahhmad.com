import { useEffect } from "react";
import NavBar from "../components/layout/NavBar";
import AllExperiences from "../components/experience/AllExperiences";
import PageFooter from "../components/layout/PageFooter";
import usePageMetadata from "../hooks/usePageMetadata";

// Experience index page for browsing every published experience.
function AllExperiencesPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  usePageMetadata({
    title: "Experiences",
    path: "/experiences",
    description:
      "Explore Ali Ahmad’s experience at Rochester Institute of Technology, Conrad Labs, and Wateen Telecom.",
  });
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <AllExperiences />
      <PageFooter />
    </div>
  );
}

export default AllExperiencesPage;
