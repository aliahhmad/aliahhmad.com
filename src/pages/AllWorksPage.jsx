// src/pages/AllWorksPage.jsx
import NavBar from "../components/layout/NavBar";
import Experiences from "../components/work/Experiences";
import PageFooter from "../components/layout/PageFooter";
import AllWorks from "../components/work/AllWorks";
import usePageTitle from "../hooks/usePageTitle";

function AllWorksPage() {
  usePageTitle("Work");
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <Experiences />
      <AllWorks />
      <PageFooter />
    </div>
  );
}

export default AllWorksPage;
