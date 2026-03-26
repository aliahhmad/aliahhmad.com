import { Link } from "react-router-dom";
import LargePills from "../ui/LargePills";
import SmallPills from "../ui/SmallPills";

// Lightweight content array used for the horizontal passions section.
const passions = [
  {
    label: "Crafting Solutions",
    desc: "From UI/UX web design and full-stack development to custom software, I love building intuitive things that solve real problems.",
  },
  {
    label: "Achieving Efficiency",
    desc: "I'm obsessed with optimizing processes—finding the smartest ways to cut costs, speed things up, and do more with less.",
  },
  {
    label: "Gaming",
    desc: "My go-to way to unwind, and secretly where I find a lot of my inspiration for highly interactive digital experiences.",
  },
  {
    label: "Cooking",
    desc: "My screen-free creative outlet. I love experimenting with new ingredients and testing out ideas in the kitchen.",
  },
  {
    label: "Always Learning",
    desc: "Currently diving deep into AWS cloud computing, but I'm constantly picking up new frameworks, tools, or concepts.",
  },
];

// First long-form blog post rendered as a standalone article page.
const MyFirstBlog = () => {
  return (
    <section className="bg-surface-deep flex flex-col gap-10 px-10 min-h-screen">
      {/* ── Hero ── */}
      <div className="flex flex-col gap-4">
        <LargePills
          items={[
            { name: "Blog", color: "text-white/40" },
            { name: "First Post", color: "text-blue-400/70" },
          ]}
        />

        <h1 className="text-white text-4xl font-bold">My First Blog</h1>

        <p className="text-white/60 text-lg max-w-xl">
          A little hello from me to you — where I'm from, what drives me, and
          the passions and hobbies that make me who I am. Welcome to my corner
          of the internet!
        </p>

        <SmallPills items={["March 24, 2026", "3 min read"]} />
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
          I figured the best place to start is with a proper introduction — who
          I am, where I come from, and what you can expect to find here. So grab
          a coffee, get comfortable, and let's get into it.
        </p>
      </div>

      {/* ── About Me ── */}
      <div className="flex flex-col gap-4">
        <h2 className="text-white text-2xl font-bold">A bit about me</h2>
        <p className="text-white/70 text-base leading-relaxed">
          I'm a{" "}
          <span className="text-white font-medium">
            computer scientist and web developer
          </span>{" "}
          with a massive love for building beautiful, responsive websites and
          AI-driven solutions. I'm currently based in{" "}
          <span className="text-white font-medium">Rochester, New York</span>{" "}
          pursuing my Master's at RIT, and I honestly couldn't imagine a more
          exciting journey.
        </p>
        <p className="text-white/70 text-base leading-relaxed">
          Believe it or not, my story didn't start with a compiler. My first
          real love was the arts, and sketching was my absolute strongest suit.
          I even got accepted into several art schools! But I ultimately
          realized I wanted to channel that creative energy into modern
          technology, turning my artistic foundation into an edge for designing
          intuitive, business-growing software.
        </p>
        <p className="text-white/70 text-base leading-relaxed">
          Over the years, my path has been a wild ride through ML, AI, and Deep
          Learning tasks, including internships at Conrad Labs and Wateen
          Telecom, and collaborations with LUMS and the Government of Pakistan.
          Right now, I'm obsessed with expanding my cloud computing toolkit
          (hello, AWS certifications!) and building my custom appointment
          scheduling software,{" "}
          <span className="text-white font-medium">schdlr</span>.
        </p>

        {/* Quick facts */}
        <div className="glass-flat rounded-xl p-5 mt-5 flex flex-col gap-3">
          <span className="text-white text-lg font-bold">Quick Facts</span>
          <ul className="flex flex-col gap-2">
            {[
              "Based in Rochester, NY (Pursuing MS CS at RIT)",
              "Started as an artist, pivoted to tech",
              "Expertise in Web Dev, AI, ML & Deep Learning",
              "Grinding for AWS Cloud Certifications",
              "Building a passion project called schdlr",
              "Pakistani tech enthusiast with industry experience",
            ].map((fact) => (
              <li
                key={fact}
                className="flex items-center gap-2 text-white/70 text-base"
              >
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
              <p className="text-white/70 text-sm leading-relaxed">
                {item.desc}
              </p>
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
      <div className="flex items-end justify-end mt-auto">
        <Link to="/blog" className="text-lg text-white hover:underline">
          See all blogs →
        </Link>
      </div>
    </section>
  );
};

export default MyFirstBlog;
