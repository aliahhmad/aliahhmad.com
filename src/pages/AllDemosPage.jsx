import NavBar from "../components/layout/NavBar";
import PageFooter from "../components/layout/PageFooter";
import AllDemos from "../components/demo/AllDemos";
import usePageMetadata from "../hooks/usePageMetadata";

// Demo index page that composes the shared layout and demo catalogue.
function AllDemosPage() {
  usePageMetadata({
    title: "Demos",
    path: "/demos",
    description: "Explore Ali Ahmad's live project demos. Request access to try Schdlr and CampusPoint.",
  });

  return (
    <div className="relative max-w-4xl mx-auto pt-10 pb-20">
      <NavBar />
      <AllDemos />
      <PageFooter />
    </div>
  );
}

export default AllDemosPage;
