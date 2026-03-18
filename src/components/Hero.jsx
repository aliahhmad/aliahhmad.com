// src/components/Hero.jsx
const Hero = () => {
  return (
    <section
      className="h-[30vh] flex flex-col justify-end px-10"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, lab(8.30603% .618212 -2.16573) 100%)",
      }}
    >
      <div className="flex justify-between items-end">
        <div className="flex flex-col gap-1 text-white">
          <div className="text-xl opacity-70">Hello there,</div>
          <div className="text-5xl font-bold">I'm Ali.</div>
          <div className="text-base opacity-50 max-w-sm mt-2">
            I design and build things for the web. I'm currently an MS student
            at RIT.
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
  );
}

export default Hero;
