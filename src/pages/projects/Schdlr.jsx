// src/pages/projects/Schdlr.jsx
import NavBar from "../../components/NavBar";
import SchdlrProject from "../../components/projects/SchdlrProject";
import usePageTitle from "../../hooks/usePageTitle";
import PageFooter from "../../components/PageFooter";

function WorkPage() {
  usePageTitle("Schdlr");
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <SchdlrProject />
      <PageFooter />
    </div>
  );
}

export default WorkPage;
