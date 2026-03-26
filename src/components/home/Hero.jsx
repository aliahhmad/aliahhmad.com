// Landing section for the homepage with the core intro and profile image.
const Hero = () => {
  return (
    <section
      className="h-[40vh] flex flex-col justify-end px-10 pt-10"
      style={{
        background:
          "linear-gradient(to bottom, transparent 0%, lab(8.30603% .618212 -2.16573) 100%)",
      }}
    >
      <div className="flex justify-between items-end h-full">
        <div className="flex flex-col gap-1 text-white">
          <div className="text-xl opacity-70">Hello there,</div>
          <div className="text-5xl font-bold">I'm Ali.</div>
        </div>
        <div className="w-32 h-36 sm:w-48 sm:h-56 rounded-3xl overflow-hidden rotate-[2deg] wiggle cursor-pointer flex-shrink-0">
          <img
            src="/home/profile_picture.jpg"
            alt="Ali"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      <div className="text-white text-base opacity-50 max-w-sm sm:mt-2 mt-4">
        I design and build things for the web. I'm currently an MS student at
        RIT.
      </div>
    </section>
  );
};

export default Hero;
