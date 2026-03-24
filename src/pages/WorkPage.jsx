// src/pages/WorkPage.jsx
import NavBar from "../components/layout/NavBar";
import Experiences from "../components/work/Experiences";
import PageFooter from "../components/layout/PageFooter";
import AllWork from "../components/work/AllWork";
import usePageTitle from "../hooks/usePageTitle";

function WorkPage() {
  usePageTitle("Work");
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <Experiences />
      <AllWork />
      <PageFooter />
    </div>
  );
}

export default WorkPage;
