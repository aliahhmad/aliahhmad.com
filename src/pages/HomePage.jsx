// src/pages/HomePage.jsx
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

function HomePage() {
  usePageTitle("Home");
  return (
    <div className="relative max-w-4xl mx-auto">
      <NavBar />
      <div className="sticky top-0 z-0 h-screen">
        <div className="absolute inset-0">
          <MapboxMap />
        </div>
        <div className="absolute top-6 left-10 z-10">
          <Time />
        </div>
      </div>
      {/* Pull content up to overlap the sticky map */}
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
