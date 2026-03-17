import Map from "../components/Map";
import Time from "../components/Time";
import Hero from "../components/Hero";
import AboutMe from "../components/AboutMe";
import Experiences from "../components/Experiences";
import FeaturedWork from "../components/FeaturedWork";
import Connect from "../components/Connect";

function HomePage() {
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="sticky top-0 z-0 h-screen">
        <div className="absolute inset-0">
          <Map />
        </div>
        <div className="absolute top-6 left-10 z-10">
          <Time />
        </div>
      </div>
      <div className="relative z-20 -mt-[100vh] pb-[15vh]">
        <Hero />
        <div className="pt-8 bg-surface-deep">
          <AboutMe />
        </div>
        <Experiences />
        <FeaturedWork />
        <Connect />
      </div>
    </div>
  );
}

export default HomePage;
