// src/components/projects/AppBreweryProject.jsx
import { useState } from "react";
import ScreenshotGallery from "./ScreenshotGallery";

const TABS = [
  "Overview",
  "Projects",
  "Tech Stack",
  "What I Learned",
  "Screenshots",
];

const capstoneProjects = [
  {
    title: "Book Notes",
    type: "Capstone Project",
    desc: "A full-stack CRUD application with Express, EJS, and PostgreSQL. Covered routing, form handling, server-side rendering, SQL queries, and editing/deleting records.",
    tags: ["Express", "EJS", "PostgreSQL"],
  },
  {
    title: "Simple Post",
    type: "Capstone Project",
    desc: "A blog-style app with Express and EJS using file-based data storage. Built form submissions, post CRUD, JSON read/write, input validation, and content management routing.",
    tags: ["Express", "EJS", "JSON"],
  },
  {
    title: "About Me",
    type: "Capstone Project",
    desc: "A personal portfolio-style page built with HTML, CSS, and Bootstrap. Practiced responsive layout, typography, spacing, hero areas, and structured section design.",
    tags: ["HTML", "CSS", "Bootstrap"],
  },
];

const techStack = [
  {
    category: "Frontend",
    items: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript ES6",
      "jQuery",
      "React",
    ],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express.js", "EJS", "REST APIs"],
  },
  {
    category: "Database",
    items: ["SQL", "PostgreSQL"],
  },
  {
    category: "Tooling",
    items: ["Git", "GitHub", "Bash", "npm"],
  },
];

const learningTopics = [
  { icon: "🌐", label: "HTML5, CSS3, Flexbox, Grid & Bootstrap 5" },
  { icon: "⚡", label: "JavaScript ES6, DOM & jQuery" },
  { icon: "🖥️", label: "Node.js, npm, Express.js & EJS" },
  { icon: "🗄️", label: "REST APIs, SQL & PostgreSQL" },
  { icon: "🔧", label: "Git, GitHub, Bash & Dev Best Practices" },
  { icon: "⚛️", label: "React & React Hooks" },
  { icon: "🔐", label: "Authentication & Deployment" },
  { icon: "🔗", label: "Web3, Blockchain, NFTs & dApps" },
];

const screenshots = [
  {
    label: "📸 Book Notes — Post Listing",
    caption: "Book Notes",
    path: "/projects/appbrewery/book_notes_project.png",
  },
  {
    label: "📸 Simple Post — Blog View",
    caption: "Simple Post",
    path: "/projects/appbrewery/simple_post_project.png",
  },
  {
    label: "📸 About Me — Hero & Layout",
    caption: "About Me",
    path: "/projects/appbrewery/about_me_project.png",
  },
];

const AppBreweryProject = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-10 min-h-screen">
      {/* ── Hero ── */}
      <div className="flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="self-start text-sm font-semibold uppercase text-white/40 glass-flat px-3 py-1 rounded-full">
            Featured Project
          </span>
          <span className="self-start text-sm font-semibold uppercase text-green-400/70 glass-flat px-3 py-1 rounded-full">
            Learning Project
          </span>
        </div>

        <h1 className="text-white text-4xl font-bold">
          App Brewery Course Projects
        </h1>

        <p className="text-white/60 text-lg max-w-xl">
          A collection of projects built through Angela Yu's Complete Full-Stack
          Web Development Bootcamp — covering everything from static HTML to
          React, REST APIs, and PostgreSQL.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"].map(
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
            href="https://github.com/aliahhmad/appbrewery_projects"
            className="glass-flat text-white text-base font-semibold px-5 py-2 rounded-full hover:scale-[1.02] transition-transform duration-200"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.udemy.com/course/the-complete-web-development-bootcamp/"
            className="text-white/60 border border-white/20 text-base font-semibold px-5 py-2 rounded-full hover:text-white hover:border-white/40 transition-all duration-200"
          >
            Course ↗
          </a>
        </div>
      </div>

      {/* ── Hero banner ── */}
      <div className="glass rounded-2xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-white/30 text-xs glass-flat px-3 py-0.5 rounded-md">
            udemy.com — The Complete Full-Stack Web Development Bootcamp
          </span>
        </div>
        {/* Main screenshot */}
        <img
          src="/projects/appbrewery/course_page.png"
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
            className={`flex-1 min-w-max px-4 py-2 rounded-lg text-base transition-transform duration-200
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
              This repository is a record of my journey through{" "}
              <span className="text-white font-medium">
                Angela Yu's Complete Full-Stack Web Development Bootcamp
              </span>{" "}
              on Udemy. Each project was built to practice a specific layer of
              the stack — from static HTML layouts to server-rendered Express
              apps with real PostgreSQL databases.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              The bootcamp emphasized learning by building. Rather than just
              watching videos, each section culminated in a hands-on capstone
              that tied together the concepts covered — routing, state, data
              persistence, authentication, and deployment.
            </p>

            {/* Stat cards */}
            <div className="flex overflow-x-auto gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { num: "3", label: "Capstones" },
                { num: "65+", label: "Hours" },
                { num: "8+", label: "Topics" },
                { num: "1", label: "Database" },
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

        {/* PROJECTS */}
        {activeTab === "Projects" && (
          <div className="flex overflow-x-auto overflow-y-visible gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {capstoneProjects.map((p) => (
              <div
                key={p.title}
                className="glass-flat flex-shrink-0 w-72 rounded-xl text-white p-5 flex flex-col gap-3 hover:scale-[1.01] transition-transform duration-200"
              >
                <div className="flex items-center gap-2">
                  <div className="flex flex-col">
                    <span className="text-lg font-bold leading-tight">
                      {p.title}
                    </span>
                    <span className="text-white/40 text-xs uppercase font-semibold">
                      {p.type}
                    </span>
                  </div>
                </div>
                <p className="text-white/70 text-base leading-relaxed">
                  {p.desc}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="glass-flat text-white/60 text-xs px-2.5 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* TECH STACK */}
        {activeTab === "Tech Stack" && (
          <div className="flex flex-col gap-6">
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

            {/* Full-stack flow */}
            <div className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <span className="text-white text-lg font-bold">
                Full-Stack Flow
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {[
                  { title: "Browser", sub: "HTML / CSS / JS / React" },
                  { title: "Express Server", sub: "Routing + EJS Templates" },
                  { title: "PostgreSQL", sub: "Persistent Data" },
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

        {/* WHAT I LEARNED */}
        {activeTab === "What I Learned" && (
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              The bootcamp covered the full breadth of modern web development —
              from writing a first HTML tag to deploying full-stack apps and
              exploring Web3 concepts.
            </p>
            <div className="flex overflow-x-auto gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {learningTopics.map((topic) => (
                <div
                  key={topic.label}
                  className="glass-flat flex-shrink-0 w-56 rounded-xl p-4 flex flex-col gap-3 hover:scale-[1.01] transition-transform duration-200"
                >
                  <span className="text-2xl">{topic.icon}</span>
                  <p className="text-white/70 text-sm leading-relaxed">
                    {topic.label}
                  </p>
                </div>
              ))}
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
        <a href="/work" className="text-lg text-white hover:underline">
          See all works →
        </a>
      </div>
    </section>
  );
};

export default AppBreweryProject;
