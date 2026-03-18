// src/pages/WorkPage.jsx
import NavBar from "../components/NavBar";
import Experiences from "../components/Experiences";
import PageFooter from "../components/PageFooter";
import AllWork from "../components/AllWork";

function WorkPage() {
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
