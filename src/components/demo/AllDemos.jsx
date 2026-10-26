import { Link } from "react-router-dom";
import SmallPills from "../ui/SmallPills";
import RequestDemoButton from "../ui/RequestDemoButton";
import demos from "../../data/demos";

// Lists every demo from the shared metadata with project and request actions.
function AllDemos() {
  return (
    <main className="bg-surface-deep flex flex-col gap-8 px-6 sm:px-10 py-2">
      <header className="flex flex-col gap-3">
        <h1 className="text-white text-2xl">Live demos</h1>
        <p className="text-white/60 text-lg">
          Take a closer look at what I've been building. Pick a project and
          request a demo to try the live site for yourself.
        </p>
      </header>
      <div className="grid gap-6 sm:grid-cols-2">
        {demos.map((demo) => (
          <article
            key={demo.id}
            className="glass-flat flex flex-col overflow-hidden rounded-xl text-white"
          >
            <img
              src={demo.image}
              alt={`${demo.name} home page preview`}
              className="aspect-video w-full object-cover object-top"
            />
            <div className="flex flex-1 flex-col gap-4 p-5">
              <h2 className="text-xl font-bold">{demo.name}</h2>
              <p className="text-white/70 leading-relaxed">{demo.description}</p>
              <SmallPills items={demo.tags} />
              <div className="mt-auto flex flex-wrap items-center gap-4 pt-2">
                <RequestDemoButton demoId={demo.id} />
                <Link
                  to={demo.projectPath}
                  className="text-sm text-white/60 hover:text-white hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-white"
                >
                  View project →
                </Link>
              </div>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}

export default AllDemos;
