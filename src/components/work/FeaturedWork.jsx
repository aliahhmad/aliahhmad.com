// src/components/work/FeaturedWork.jsx
import { useNavigate } from "react-router-dom";
import projects from "../../data/allWorks.json";

const FeaturedWork = () => {
  const navigate = useNavigate();

  const featuredWordId = [1, 2, 3];
  const featuredProjects = projects.filter((item) =>
    featuredWordId.includes(item.id),
  );

  function handleClick(path) {
    navigate(path);
  }

  return (
    <section className="bg-surface-deep flex flex-col gap-6 py-2 px-10">
      <div className="text-white text-2xl">Featured Works</div>
      <div className="flex overflow-x-auto overflow-y-visible gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {featuredProjects.map((project) => (
          <div
            key={project.id}
            className="glass-flat flex-shrink-0 w-64 rounded-xl text-white cursor-pointer transition-transform duration-200 hover:scale-[1.01]"
            onClick={() => handleClick(project.path)}
          >
            {project.image ? (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-t-xl"
              />
            ) : (
              <div
                style={{ background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)" }}
                className="w-full h-40 flex flex-col items-center justify-center gap-3"
              >
                <span className="text-white/20 text-sm italic">
                  Screenshot coming soon
                </span>
              </div>
            )}
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
};

export default FeaturedWork;
