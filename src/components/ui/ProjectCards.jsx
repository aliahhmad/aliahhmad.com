// Card layout for grouped project summaries inside a detail page tab.
function ProjectCards({ projects }) {
  return (
    <div className="flex overflow-x-auto overflow-y-visible gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {projects.map((p) => (
        <div
          key={p.title}
          className="glass-flat flex-shrink-0 w-72 rounded-xl text-white p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform duration-200"
        >
          <div className="flex items-center gap-2">
            <div className="flex flex-col">
              <span className="text-lg font-bold leading-tight">{p.title}</span>
              <span className="text-white/40 text-xs uppercase font-semibold">
                {p.type}
              </span>
            </div>
          </div>
          <p className="text-white/70 text-base leading-relaxed">{p.desc}</p>
          <div className="flex flex-wrap gap-1.5 mt-auto">
            {p.tags.map((tag) => (
              <span
                key={tag}
                className="glass-flat text-white/60 text-xs px-2.5 py-1 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectCards;
