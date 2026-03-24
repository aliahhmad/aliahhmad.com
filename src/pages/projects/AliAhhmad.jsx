// src/pages/projects/AliAhhmad.jsx
import NavBar from "../../components/NavBar";
import AliAhhmadProject from "../../components/projects/AliAhhmadProject";
import usePageTitle from "../../hooks/usePageTitle";
import PageFooter from "../../components/PageFooter";

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
