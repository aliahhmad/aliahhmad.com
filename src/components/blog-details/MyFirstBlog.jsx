// src/components/blog-details/MyFirstBlog.jsx

const passions = [
  { label: "Web Development", desc: "Building modern, clean web experiences with React and Node.js." },
  { label: "Design", desc: "I love the intersection of design and code — making things look and feel great." },
  { label: "Gaming", desc: "A big part of how I unwind and find inspiration for interactive experiences." },
  { label: "Learning", desc: "Always picking up something new — whether it's a framework, tool, or concept." },
];

const MyFirstBlog = () => {
  return (
    <section className="bg-surface-deep flex flex-col gap-10 px-10 min-h-screen pb-16">

      {/* ── Hero ── */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="self-start text-sm font-semibold uppercase text-white/40 glass-flat px-3 py-1 rounded-full">
            Blog
          </span>
          <span className="self-start text-sm font-semibold uppercase text-blue-400/70 glass-flat px-3 py-1 rounded-full">
            First Post
          </span>
        </div>

        <h1 className="text-white text-4xl font-bold">My First Blog</h1>

        <p className="text-white/60 text-lg max-w-xl">
          A little hello from me to you — where I'm from, what drives me, and
          the passions and hobbies that make me who I am. Welcome to my corner
          of the internet!
        </p>

        <div className="flex items-center gap-3">
          <span className="glass-flat text-white/50 text-sm px-3 py-1 rounded-full">
            24th March 2026
          </span>
          <span className="glass-flat text-white/50 text-sm px-3 py-1 rounded-full">
            3 min read
          </span>
        </div>
      </div>

      {/* ── Introduction ── */}
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold">Hey, welcome!</h2>
        <p className="text-white/70 text-base leading-relaxed">
          I've been wanting to start writing for a while now, and today I
          finally did it. This is my little space on the internet where I'll be
          sharing my journey, thoughts, and the things I'm passionate about.
        </p>
        <p className="text-white/70 text-base leading-relaxed">
          I figured the best place to start is with a proper introduction —
          who I am, where I come from, and what you can expect to find here.
          So grab a coffee, get comfortable, and let's get into it.
        </p>
      </div>

      {/* ── About Me ── */}
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold">A bit about me</h2>
        <p className="text-white/70 text-base leading-relaxed">
          I'm a{" "}
          <span className="text-white font-medium">web developer</span> with a
          love for building clean, modern digital experiences. I'm based in{" "}
          <span className="text-white font-medium">[Rochester, New York]</span>{" "}
          and I've been on this coding journey for a while now — and I honestly
          couldn't imagine doing anything else.
        </p>
        <p className="text-white/70 text-base leading-relaxed">
          I grew up [a little about your background — city, culture, upbringing].
          That environment shaped the way I think, the things I value, and
          ultimately the kind of work I want to put out into the world.
        </p>

        {/* Quick facts */}
        <div className="glass-flat rounded-xl p-5 flex flex-col gap-3">
          <span className="text-white text-lg font-bold">Quick Facts</span>
          <ul className="flex flex-col gap-2">
            {[
              "Based in Rochester",
              "Web Developer",
              "Pakistani",
              "Self-taught / BS + MS Computer Science",
            ].map((fact) => (
              <li key={fact} className="flex items-center gap-2 text-white/70 text-base">
                <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                {fact}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Passions & Hobbies ── */}
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold">Passions & Hobbies</h2>
        <p className="text-white/70 text-base leading-relaxed">
          Outside of work and code, there's a lot that keeps me going. Here are
          some of the things I genuinely love spending time on.
        </p>
        <div className="flex overflow-x-auto gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
          {passions.map((item) => (
            <div
              key={item.label}
              className="glass-flat flex-shrink-0 w-56 rounded-xl p-4 flex flex-col gap-3 hover:scale-[1.01] transition-transform duration-200"
            >
              <span className="text-white font-semibold">{item.label}</span>
              <p className="text-white/70 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Closing note ── */}
      <div className="glass-flat rounded-xl p-6 flex flex-col gap-3">
        <span className="text-2xl">🙏</span>
        <p className="text-white/70 text-base leading-relaxed">
          Thanks for taking the time to read my first post. This is just the
          beginning — I have a lot more to share and I'm excited to do it here.
          If anything resonated with you, feel free to reach out. See you in the
          next one!
        </p>
      </div>

      {/* ── Footer ── */}
      <div className="flex items-end justify-end">
        <a href="/blog" className="text-lg text-white hover:underline">
          See all blogs →
        </a>
      </div>

    </section>
  );
};

export default MyFirstBlog;