function StatCards({ stats }) {
  return (
    <div className="flex overflow-x-auto gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {stats.map(({ num, label }) => (
        <div
          key={label}
          className="glass-flat flex-shrink-0 w-36 rounded-xl text-white flex flex-col items-center justify-center gap-1 py-5"
        >
          <span className="text-3xl font-bold">{num}</span>
          <span className="text-white/50 text-xs uppercase">{label}</span>
        </div>
      ))}
    </div>
  );
}

export default StatCards;
