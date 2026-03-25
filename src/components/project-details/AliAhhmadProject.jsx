// src/components/project-details/AliAhhmadProject.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const TABS = ["Overview", "Features", "Tech Stack", "Screenshots"];

const features = [
  {
    title: "Home Page",
    desc: "Landing page with a real-time Mapbox integration, experience highlights, and featured projects.",
  },
  {
    title: "Work / Projects",
    desc: "Browse all projects in a grid. Click any project to expand and see full details.",
  },
  {
    title: "Contact",
    desc: "Email delivery powered by Mailtrap with a custom domain — no third-party form services.",
  },
  {
    title: "Blog",
    desc: "A personal blog built with React.",
  },
  {
    title: "iOS 26 Design",
    desc: "Glassmorphism UI inspired by Apple's iOS 26, built with Tailwind CSS and custom liquid-glass effects.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Tailwind CSS", "Mapbox GL"] },
  { category: "Backend", items: ["Vercel Serverless", "Mailtrap"] },
  { category: "Deployment", items: ["Vercel"] },
];

const screenshots = [
  {
    label: "📸 Work / Projects Page",
    caption: "Project Grid",
    path: "/projects/aliahhmad/work_page.png",
  },
  {
    label: "📸 Project Detail View",
    caption: "Expanded Project",
    path: "/projects/aliahhmad/project_detail.png",
  },
  {
    label: "📸 Contact Page",
    caption: "Contact Form",
    path: "/projects/aliahhmad/contact_page.png",
  },
  {
    label: "📸 Blog Page",
    caption: "Post Listing",
    path: "/projects/aliahhmad/blog_page.png",
  },
];

const PortfolioProject = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-10 min-h-screen">
      {/* ── Hero ── */}
      <div className="flex flex-col gap-4">
        <span className="self-start text-sm font-semibold uppercase text-white/40 glass-flat px-3 py-1 rounded-full">
          Featured Project
        </span>

        <h1 className="text-white text-4xl font-bold">
          Personal Portfolio (aliahhmad.com)
        </h1>

        <p className="text-white/60 text-lg max-w-xl">
          A full-stack portfolio site with a blog, contact system, and an iOS
          26-inspired glassmorphism UI — the very site you're on.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {["React", "Express", "PostgreSQL", "Tailwind CSS", "Vercel"].map(
            (t) => (
              <span
                key={t}
                className="glass-flat text-white/80 text-sm px-3 py-1 rounded-full"
              >
                {t}
              </span>
            ),
          )}
        </div>

        {/* CTA links */}
        <div className="flex gap-3">
          <a
            href="https://aliahhmad.com/"
            className="glass-flat text-white text-base font-semibold px-5 py-2 rounded-full hover:scale-[1.02] transition-transform duration-200"
          >
            Live Site ↗
          </a>
          <a
            href="https://github.com/aliahhmad/aliahhmad.com"
            className="text-white/60 border border-white/20 text-base font-semibold px-5 py-2 rounded-full hover:text-white hover:border-white/40 transition-all duration-200"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* ── Hero screenshot ── */}
      <div className="glass rounded-2xl overflow-hidden">
        {/* Fake browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <span className="w-3 h-3 aspect-square rounded-full bg-red-400/80 flex-shrink-0" />
          <span className="w-3 h-3 aspect-square rounded-full bg-yellow-400/80 flex-shrink-0" />
          <span className="w-3 h-3 aspect-square rounded-full bg-green-400/80 flex-shrink-0" />
          <span className="ml-3 text-white/30 text-xs glass-flat px-3 py-0.5 rounded-md">
            aliahhmad.com
          </span>
        </div>
        {/* Main screenshot */}
        <img
          src="/projects/aliahhmad/home_page.png"
          alt="Project Screenshot"
          className="w-full object-cover"
        />
      </div>

      {/* ── Tabs ── */}
      <div className="flex overflow-x-auto gap-1 glass-flat rounded-xl p-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-max px-4 py-2 rounded-lg text-base  transition-transform duration-200
              ${
                activeTab === tab
                  ? "text-white shadow-sm"
                  : "text-white/70 hover:text-white/80 hover:scale-[1.02]"
              }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* ── Tab content ── */}
      <div className="flex flex-col gap-6">
        {/* OVERVIEW */}
        {activeTab === "Overview" && (
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              This is my personal portfolio — built from scratch to serve as a
              living resume, blog platform, and creative canvas. The design
              draws heavy inspiration from{" "}
              <span className="text-white font-medium">Apple's iOS 26</span>,
              specifically its liquid-glass panels and soft translucency,
              achieved with Tailwind CSS and custom CSS backdrop filters.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              The frontend is a React SPA deployed on Vercel, with a serverless
              API route handling email delivery via Mailtrap and a custom
              domain.
            </p>

            {/* Stat cards — same scrollable row pattern as FeaturedWork */}
            <div className="flex overflow-x-auto gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { num: "4", label: "Pages" },
                { num: "1", label: "APIs" },
                { num: "1", label: "Database" },
                { num: "∞", label: "CSS tweaks" },
              ].map(({ num, label }) => (
                <div
                  key={label}
                  className="glass-flat flex-shrink-0 w-36 rounded-xl text-white flex flex-col items-center justify-center gap-1 py-5"
                >
                  <span className="text-3xl font-bold">{num}</span>
                  <span className="text-white/50 text-xs uppercase">
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FEATURES */}
        {activeTab === "Features" && (
          <div className="flex overflow-x-auto overflow-y-visible gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {features.map((f) => (
              <div
                key={f.title}
                className="glass-flat flex-shrink-0 w-60 rounded-xl text-white p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform duration-200"
              >
                <h3 className="text-lg font-bold">{f.title}</h3>
                <p className="text-white/70 text-base leading-relaxed">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
        )}

        {/* TECH STACK */}
        {activeTab === "Tech Stack" && (
          <div className="flex flex-col gap-6">
            {/* Stack cards */}
            <div className="flex overflow-x-auto gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {techStack.map((group) => (
                <div
                  key={group.category}
                  className="glass-flat flex-shrink-0 w-52 rounded-xl p-5 flex flex-col gap-2"
                >
                  <span className="text-white text-lg font-bold">
                    {group.category}
                  </span>
                  <ul className="flex flex-col gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex text-white/70 items-center gap-2 text-base"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-white/60 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Architecture flow */}
            <div className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <span className="text-white text-lg font-bold">Architecture</span>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { title: "Client", sub: "React + Tailwind + Mapbox" },
                  { title: "Vercel CDN", sub: "Hosting + Routing" },
                  { title: "Serverless Function", sub: "Email via Mailtrap" },
                ].map((node, i, arr) => (
                  <div key={node.title} className="flex items-center gap-2">
                    <div className="glass-flat rounded-xl px-4 py-3 text-white flex flex-col items-center gap-0.5">
                      <span className="text-base font-semibold">
                        {node.title}
                      </span>
                      <span className="text-white/40 text-sm">{node.sub}</span>
                    </div>
                    {i < arr.length - 1 && (
                      <span className="text-white/30 text-lg">→</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* SCREENSHOTS */}
        {activeTab === "Screenshots" && (
          <ScreenshotGallery screenshots={screenshots} />
        )}
      </div>

      {/* ── Footer link ── */}
      <div className="flex items-end justify-end">
        <Link to="/work" className="text-lg text-white hover:underline">
          See all works →
        </Link>
      </div>
    </section>
  );
};

export default PortfolioProject;
