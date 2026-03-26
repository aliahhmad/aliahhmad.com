// Shared CTA row for project pages with support for glass and outline variants.
function CTALinks({ links }) {
  return (
    <div className="flex gap-3">
      {links.map((link) =>
        // Disabled links stay visually present so users still see planned destinations.
        link.type === "glass-flat" ? (
          <a
            key={link.href}
            href={link.href}
            aria-disabled={link.disabled && link.disabled}
            className={`glass-flat text-white text-base font-semibold px-5 py-2 rounded-full transition-transform duration-200 ${
              link.disabled ? "cursor-not-allowed opacity-50" : "hover:scale-[1.02]"
            }`}
          >
            {link.label}
          </a>
        ) : (
          <a
            key={link.href}
            href={link.href}
            aria-disabled={link.disabled && link.disabled}
            className={`text-white/60 border border-white/20 text-base font-semibold px-5 py-2 rounded-full transition-all duration-200 ${
              link.disabled ? "cursor-not-allowed opacity-50" : "hover:text-white hover:border-white/40"
            }`}
          >
            {link.label}
          </a>
        ),
      )}
    </div>
  );
}

export default CTALinks;
