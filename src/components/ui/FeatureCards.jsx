// Reusable horizontally scrollable feature card list.
function FeatureCards({ features }) {
  return (
    <div className="flex overflow-x-auto overflow-y-visible gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {features.map((f) => (
        <div
          key={f.title}
          className="glass-flat flex-shrink-0 w-60 rounded-xl text-white p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform duration-200"
        >
          <h3 className="text-lg font-bold">{f.title}</h3>
          <p className="text-white/70 text-base leading-relaxed">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}

export default FeatureCards;
