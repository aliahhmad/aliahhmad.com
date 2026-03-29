import { useParams } from 'react-router-dom';
import NavBar from "../components/layout/NavBar";
import PageFooter from "../components/layout/PageFooter";
import SchdlrProject from "../components/work-details/SchdlrProject"
import AliAhhmadProject from "../components/work-details/AliAhhmadProject"
import AppBreweryProject from "../components/work-details/AppBreweryProject"
import usePageMetadata from "../hooks/usePageMetadata";
import works from "../data/allWorks.json";

const workPages = {
  1: <SchdlrProject />,
  2: <AliAhhmadProject />,
  3: <AppBreweryProject />
};

// Resolves a project detail view from the route param and shared work metadata.
function WorkPage() {
  const { id } = useParams();
  const page = workPages[id];

  const workDetails = works.find((work) => work.id === Number(id));
  // The title is driven from the shared work data so cards and detail pages stay in sync.
  usePageMetadata({ title: workDetails.title, path: `/work/${id}` });

  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      {page}
      <PageFooter />
    </div>
  );
}

export default WorkPage;
