// Renders a compact left-to-right architecture flow from simple node data.
function SimpleArchitectureFlow({ nodes }) {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      {nodes.map((node, i, arr) => (
        <div key={node.title} className="flex items-center gap-2">
          <div className="glass-flat rounded-xl px-4 py-3 text-white flex flex-col items-center gap-0.5">
            <span className="text-base font-semibold">{node.title}</span>
            <span className="text-white/40 text-sm">{node.sub}</span>
          </div>
          {i < arr.length - 1 && (
            <span className="text-white/30 text-lg">→</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default SimpleArchitectureFlow;
