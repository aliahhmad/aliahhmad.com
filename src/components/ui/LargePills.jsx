function LargePills({ items }) {
  return (
    <div className="flex items-center gap-2">
      {items.map((t) => (
        <span
          key={t.name}
          className={`self-start text-sm font-semibold uppercase ${t.color} glass-flat px-3 py-1 rounded-full`}
        >
          {t.name}
        </span>
      ))}
    </div>
  );
}

export default LargePills;
