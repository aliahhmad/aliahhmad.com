import NavBar from "../components/layout/NavBar";
import Experiences from "../components/work/Experiences";
import Certifications from "../components/home/Certifications";
import PageFooter from "../components/layout/PageFooter";
import AllWorks from "../components/work/AllWorks";
import usePageMetadata from "../hooks/usePageMetadata";

// Work index page that pairs experience history with the full project list.
function AllWorksPage() {
  usePageMetadata({ title: "Work", path: "/work" });
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <AllWorks />
      <PageFooter />
    </div>
  );
}

export default AllWorksPage;
