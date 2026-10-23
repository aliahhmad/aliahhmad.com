import { useCallback, useEffect, useId, useRef } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

const SEEN_KEY = "aliahhmad:welcome-popup-seen";
const SHOW_DELAY_MS = 5000;

function WelcomePopup() {
  const dialogRef = useRef(null);
  const previousOverflowRef = useRef(null);
  const titleId = useId();
  const descriptionId = useId();

  const restoreScroll = useCallback(() => {
    if (previousOverflowRef.current !== null) {
      document.body.style.overflow = previousOverflowRef.current;
      previousOverflowRef.current = null;
    }
  }, []);

  useEffect(() => {
    try {
      if (window.sessionStorage.getItem(SEEN_KEY) === "true") return;
    } catch {
      // Visitors can still see the announcement when browser storage is blocked.
    }

    const dialog = dialogRef.current;

    const timer = window.setTimeout(() => {
      dialog.showModal();
      previousOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";

      // Show once per tab session, recording it only after the popup appears.
      try {
        window.sessionStorage.setItem(SEEN_KEY, "true");
      } catch {
        // The popup remains usable when storage is unavailable.
      }
    }, SHOW_DELAY_MS);

    return () => {
      window.clearTimeout(timer);
      if (dialog.open) dialog.close();
      restoreScroll();
    };
  }, [restoreScroll]);

  const closePopup = () => {
    dialogRef.current.close();
    restoreScroll();
  };

  return (
    <dialog
      ref={dialogRef}
      aria-labelledby={titleId}
      aria-describedby={descriptionId}
      onCancel={restoreScroll}
      onClose={restoreScroll}
      className="m-auto w-[calc(100%-2rem)] max-w-lg max-h-[calc(100dvh-2rem)] overflow-y-auto rounded-2xl border border-white/20 bg-surface-deep p-0 text-white shadow-2xl backdrop:bg-black/70 backdrop:backdrop-blur-sm"
    >
      <div className="relative">
        <img
          src="/projects/campuspoint/home_page.png"
          alt="CampusPoint home page for the RIT campus community"
          className="aspect-[2/1] w-full object-cover"
        />
        <button
          type="button"
          onClick={closePopup}
          aria-label="Close announcement"
          className="absolute top-3 right-3 flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-black/70 text-white transition hover:bg-black/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
        >
          <X size={20} aria-hidden="true" />
        </button>
      </div>
      <div className="flex flex-col gap-4 p-6 sm:p-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
          Newest project
        </p>
        <h2 id={titleId} className="text-2xl font-bold">
          Check out CampusPoint (RIT)
        </h2>
        <p id={descriptionId} className="text-base leading-relaxed text-white/70">
          Ask campus questions, share helpful answers, and earn points. Built for
          RIT with React and FastAPI, using PostgreSQL two-phase commit and
          fault-tolerant recovery to keep rewards consistent across services.
        </p>
        <div className="flex flex-wrap items-center gap-3 pt-1">
          <Link
            to="/work/6"
            onClick={closePopup}
            className="glass-flat rounded-full px-5 py-2 text-base font-semibold transition hover:bg-white/20 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            View project →
          </Link>
          <button
            type="button"
            onClick={closePopup}
            className="rounded-full px-4 py-2 text-sm text-white/60 transition hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
          >
            Maybe later
          </button>
        </div>
      </div>
    </dialog>
  );
}

export default WelcomePopup;
