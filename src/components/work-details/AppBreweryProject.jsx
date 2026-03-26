// src/components/project-details/AppBreweryProject.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import LargePills from "../ui/LargePills";
import SmallPills from "../ui/SmallPills";
import CTALinks from "../ui/CTALinks";
import BrowserFrame from "../ui/BrowserFrame";
import StatCards from "../ui/StatCards";
import ProjectCards from "../ui/ProjectCards";
import TechStackCards from "../ui/TechStackCards";
import SimpleArchitectureFlow from "../ui/SimpleArchitectureFlow";
import ScreenshotGallery from "./../ui/ScreenshotGallery";

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
        <LargePills
          items={[
            { name: "Featured Project", color: "text-white/40" },
            { name: "Learning Project", color: "text-green-400/70" },
          ]}
        />

        <h1 className="text-white text-4xl font-bold">
          App Brewery Course Projects
        </h1>

        <p className="text-white/60 text-lg max-w-xl">
          A collection of projects built through Angela Yu's Complete Full-Stack
          Web Development Bootcamp — covering everything from static HTML to
          React, REST APIs, and PostgreSQL.
        </p>

        {/* Pills */}
        <SmallPills
          items={["React", "Node.js", "Express", "PostgreSQL", "Bootstrap"]}
        />

        {/* CTA links */}
        <CTALinks
          links={[
            {
              label: "GitHub ↗",
              href: "https://github.com/aliahhmad/appbrewery_projects",
              type: "glass-flat",
            },
            {
              label: "Course ↗",
              href: "https://www.udemy.com/course/the-complete-web-development-bootcamp/",
              type: "outline",
            },
          ]}
        />
      </div>

      {/* ── Hero banner ── */}
      <BrowserFrame
        url="udemy.com — The Complete Full-Stack Web Development Bootcamp"
        imageSrc="/projects/appbrewery/course_page.png"
        altText="Project Screenshot"
      />

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
            <StatCards
              stats={[
                { num: "3", label: "Capstones" },
                { num: "65+", label: "Hours" },
                { num: "8+", label: "Topics" },
                { num: "1", label: "Database" },
              ]}
            />
          </div>
        )}

        {/* PROJECTS */}
        {activeTab === "Projects" && (
          <ProjectCards projects={capstoneProjects} />
        )}

        {/* TECH STACK */}
        {activeTab === "Tech Stack" && (
          <div className="flex flex-col gap-6">
            <TechStackCards techStacks={techStack} />

            {/* Full-stack flow */}
            <div className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <span className="text-white text-lg font-bold">
                Full-Stack Flow
              </span>
              <SimpleArchitectureFlow
                nodes={[
                  { title: "Browser", sub: "HTML / CSS / JS / React" },
                  { title: "Express Server", sub: "Routing + EJS Templates" },
                  { title: "PostgreSQL", sub: "Persistent Data" },
                ]}
              />
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
        <Link to="/work" className="text-lg text-white hover:underline">
          See all works →
        </Link>
      </div>
    </section>
  );
};

export default AppBreweryProject;
