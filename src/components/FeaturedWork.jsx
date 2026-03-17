import { useNavigate } from "react-router-dom";

function FeaturedWork() {
  const navigate = useNavigate();
  const PROJECTS = [
    {
      id: 1,
      title: "Schdlr (Appointment Scheduling App)",
      path: "/work/schdlr",
      date: "March 2026 - Present",
      description:
        "A full-stack scheduling platform supporting businesses, staff, and clients. Features service management, conflict-checked bookings, auto-generated invoices, Stripe payments, and post-appointment feedback.",
      image:
        "https://cdn.dribbble.com/userupload/46563074/file/1b2eba4a911486ef2b5c9f3bc73b3272.jpg?resize=1024x768&vertical=center",
    },
    {
      id: 2,
      title: "aliahhmad.com (Personal Portfolio)",
      path: "/work/portfolio",
      date: "March 2026 - Present",
      description:
        "A personal portfolio website showcasing projects, experience, and skills — designed and built from scratch with react and express to reflect a clean, modern developer identity.",
      image:
        "https://cdn.dribbble.com/userupload/7748991/file/original-bbee4d7771c20cc66520b91098f16275.jpg?resize=1024x768&vertical=center",
    },
  ];

  function handleClick(path) {
    navigate(path);
  }

  return (
    <section
      className="flex flex-col gap-6 py-2 px-10"
      style={{ backgroundColor: "lab(8.30603% .618212 -2.16573)" }}
    >
      <div className="text-white text-2xl">Featured Works</div>
      <div className="flex gap-2 overflow-x-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {PROJECTS.map((project) => (
          <div
            key={project.id}
            className="glass flex-shrink-0 w-64 rounded-xl overflow-hidden text-white cursor-pointer"
            onClick={() => handleClick(project.path)}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-40 object-cover"
            />
            <div className="flex flex-col gap-2 p-4">
              <h3 className="text-lg font-bold">{project.title}</h3>
              <p className="opacity-70">{project.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex items-end justify-end">
        <a href="/work" className="text-lg text-white hover:underline">
          See all works →
        </a>
      </div>
    </section>
  );
}

export default FeaturedWork;
