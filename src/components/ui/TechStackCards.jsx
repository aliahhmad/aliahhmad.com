function TechStackCards({ techStacks }) {
  return (
    <div className="flex overflow-x-auto gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      {techStacks.map((group) => (
        <div
          key={group.category}
          className="glass-flat flex-shrink-0 w-52 rounded-xl p-5 flex flex-col gap-2"
        >
          <span className="text-white text-lg font-bold">{group.category}</span>
          <ul className="flex flex-col gap-2">
            {group.items.map((item) => (
              <li
                key={item}
                className="flex text-white/70 items-center gap-2 text-base"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

export default TechStackCards;
