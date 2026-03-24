// src/pages/projects/AppBrewery.jsx
import NavBar from "../../components/NavBar";
import AppBreweryProject from "../../components/projects/AppBreweryProject";
import usePageTitle from "../../hooks/usePageTitle";
import PageFooter from "../../components/PageFooter";

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
