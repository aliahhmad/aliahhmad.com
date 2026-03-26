import { useState } from "react";

// Scrollable screenshot rail with a simple lightbox for enlarged previews.
const ScreenshotGallery = ({ screenshots }) => {
  const [lightbox, setLightbox] = useState(null);

  return (
    <>
      {/* ── Gallery Row ── */}
      <div className="flex overflow-x-auto overflow-y-visible gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {screenshots.map((s) => (
          <div
            key={s.label}
            className="glass-flat flex-shrink-0 w-64 rounded-xl text-white overflow-hidden hover:scale-[1.01] transition-transform duration-200 cursor-pointer"
            onClick={() => s.path && setLightbox(s)}
          >
            {s.path ? (
              <img
                src={s.path}
                alt={s.caption}
                className="w-full h-40 object-cover"
              />
            ) : (
              <div
                className="h-40 flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
                }}
              >
                <span className="text-white/30 text-xs italic text-center px-4">
                  {s.label}
                </span>
              </div>
            )}
            <div className="flex flex-col gap-1 p-4 border-t border-white/10">
              <p className="text-sm font-medium opacity-70">{s.caption}</p>
            </div>
          </div>
        ))}
      </div>

      {/* ── Lightbox ── */}
      {lightbox && (
        <div
          className="fixed inset-0 z-[9998] bg-black/70 backdrop-blur-2xl flex items-center justify-center animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <div
            className="glass flex flex-col gap-4 p-4 rounded-2xl z-[9999] relative max-w-3xl w-full mx-6"
            // Stop clicks inside the modal from bubbling to the overlay and closing it.
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-end">
              <button
                onClick={() => setLightbox(null)}
                className="text-white/60 hover:text-white text-xl transition"
              >
                ✕
              </button>
            </div>
            <div className="flex flex-col gap-4">
              <img
                src={lightbox.path}
                alt={lightbox.caption}
                className="w-full rounded-xl object-contain max-h-[75vh]"
              />
              <p className="text-white/70 text-base text-center">
                {lightbox.caption}
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ScreenshotGallery;
