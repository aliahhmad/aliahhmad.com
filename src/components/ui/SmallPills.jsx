// src/components/ui/Pills.jsx

function Pills({ items }) {
    return (
        <div className="flex flex-wrap gap-2">
          {items.map((t) => (
              <span
                key={t}
                className="glass-flat text-white/80 text-sm px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ),
          )}
        </div>
    )
}

export default Pills;