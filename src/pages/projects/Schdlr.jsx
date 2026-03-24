// src/pages/projects/Schdlr.jsx
import NavBar from "../../components/layout/NavBar";
import SchdlrProject from "../../components/project-details/SchdlrProject";
import PageFooter from "../../components/layout/PageFooter";
import usePageTitle from "../../hooks/usePageTitle";

function Schdlr() {
  usePageTitle("Schdlr");
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <SchdlrProject />
      <PageFooter />
    </div>
  );
}

export default Schdlr;
