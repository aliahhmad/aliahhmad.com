// src/pages/WorkPage.jsx
import { useParams } from 'react-router-dom';
import NavBar from "../components/layout/NavBar";
import PageFooter from "../components/layout/PageFooter";
import SchdlrProject from "../components/work-details/SchdlrProject"
import AliAhhmadProject from "../components/work-details/AliAhhmadProject"
import AppBreweryProject from "../components/work-details/AppBreweryProject"
import usePageTitle from "../hooks/usePageTitle";
import works from "../data/allWorks.json";

const workPages = {
  1: <SchdlrProject />,
  2: <AliAhhmadProject />,
  3: <AppBreweryProject />
};

function WorkPage() {
  const { id } = useParams();
  const page = workPages[id];

  const workDetails = works.find((work) => work.id === Number(id));
  usePageTitle(workDetails.title);

  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      {page}
      <PageFooter />
    </div>
  );
}

export default WorkPage;
