// src/pages/projects/AliAhhmad.jsx
import NavBar from "../../components/layout/NavBar";
import AliAhhmadProject from "../../components/project-details/AliAhhmadProject";
import PageFooter from "../../components/layout/PageFooter";
import usePageTitle from "../../hooks/usePageTitle";

function AliAhhmad() {
  usePageTitle("Personal Portfolio");
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <AliAhhmadProject />
      <PageFooter />
    </div>
  );
}

export default AliAhhmad;
