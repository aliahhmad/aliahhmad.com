// src/pages/projects/AppBrewery.jsx
import NavBar from "../../components/layout/NavBar";
import AppBreweryProject from "../../components/project-details/AppBreweryProject";
import PageFooter from "../../components/layout/PageFooter";
import usePageTitle from "../../hooks/usePageTitle";

function AppBrewery() {
  usePageTitle("App Brewery Projects");
  return (
    <div className="relative max-w-4xl mx-auto pt-10">
      <NavBar />
      <AppBreweryProject />
      <PageFooter />
    </div>
  );
}

export default AppBrewery;
