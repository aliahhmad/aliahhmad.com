// src/components/ui/BrowserFrame.jsx

function BrowserFrame({ url, imageSrc, altText }) {
  return (
    <>
      <div className="glass rounded-2xl overflow-hidden">
        {/* Fake browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <span className="w-3 h-3 aspect-square rounded-full bg-red-400/80 flex-shrink-0" />
          <span className="w-3 h-3 aspect-square rounded-full bg-yellow-400/80 flex-shrink-0" />
          <span className="w-3 h-3 aspect-square rounded-full bg-green-400/80 flex-shrink-0" />
          <span className="ml-3 text-white/30 text-xs glass-flat px-3 py-0.5 rounded-md">
            {url}
          </span>
        </div>
        {/* Main screenshot */}
        {imageSrc ? (
          <img
            src={imageSrc}
            alt={altText}
            className="w-full object-cover"
          />
        ) : (
          <div
            style={{
              background:
                "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
            }}
            className="w-full h-64 flex flex-col items-center justify-center gap-3"
          >
            <span className="text-white/20 text-sm italic">
              Screenshot coming soon
            </span>
          </div>
        )}
      </div>
    </>
  );
}

export default BrowserFrame;
