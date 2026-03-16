import Map from "../components/Map";
import Time from "../components/Time";

function HomePage() {
  return (
    <div className="max-w-4xl mx-auto" style={{ position: "relative" }}>
      <div className="sticky top-0 h-screen" style={{ zIndex: 0 }}>
        <div className="absolute inset-0">
          <Map />
        </div>
        <div className="absolute top-6 left-10" style={{ zIndex: 10 }}>
          <Time />
        </div>
      </div>

      <div className="relative" style={{ zIndex: 20, marginTop: "-100vh" }}>
        <section
          className="h-[30vh] flex flex-col justify-end"
          style={{
            background:
              "linear-gradient(to bottom, transparent 0%, lab(8.30603% .618212 -2.16573) 100%)",
          }}
        >
          <div className="flex justify-between items-end px-10">
            <div className="flex flex-col gap-1 text-white">
              <div className="text-xl opacity-70">Hello there,</div>
              <div className="text-5xl font-bold">I'm Ali.</div>
              <div className="text-md opacity-50 max-w-sm mt-2">
                I design and build things for the web. I'm currently an MS
                student at RIT.
              </div>
            </div>

            <div className="w-48 h-56 rounded-3xl overflow-hidden rotate-[2deg] wiggle cursor-pointer flex-shrink-0">
              <img
                src="/profile_picture.jpg"
                alt="Ali"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>
        <section className="h-[100vh] flex justify-center pt-10"
          style={{
            backgroundColor: "lab(8.30603% .618212 -2.16573)",
          }}
        >
          <div className="text-white text-2xl opacity-70">
            To do.
          </div>
        </section>
      </div>
    </div>
  );
}

export default HomePage;
