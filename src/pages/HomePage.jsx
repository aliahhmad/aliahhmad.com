import MapboxMap from "../components/home/MapboxMap";
import Time from "../components/home/Time";
import Hero from "../components/home/Hero";
import AboutMe from "../components/home/AboutMe";
import Experiences from "../components/work/Experiences";
import FeaturedWork from "../components/work/FeaturedWork";
import Connect from "../components/home/Connect";
import PageFooter from "../components/layout/PageFooter";
import NavBar from "../components/layout/NavBar";
import usePageTitle from "../hooks/usePageTitle";

// Home page combines the sticky map backdrop with the primary landing sections.
function HomePage() {
  usePageTitle("Home");
  return (
    <div className="relative max-w-4xl mx-auto">
      <NavBar />
      {/* Keep the map fixed in view while the foreground content scrolls over it. */}
      <div className="sticky top-0 z-0 h-screen">
        <div className="absolute inset-0">
          <MapboxMap />
        </div>
        <div className="absolute top-6 left-10 z-10">
          <Time />
        </div>
      </div>
      {/* Pull the page content back over the full-screen sticky map layer. */}
      <div className="relative z-20 -mt-[100vh]">
        <Hero />
        <div className="pt-8 bg-surface-deep">
          <AboutMe />
        </div>
        <Experiences />
        <FeaturedWork />
        <Connect />
        <PageFooter />
      </div>
    </div>
  );
}

export default HomePage;
