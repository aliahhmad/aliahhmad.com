// src/components/project-details/AliAhhmadProject.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import LargePills from "../ui/LargePills";
import SmallPills from "../ui/SmallPills";
import CTALinks from "../ui/CTALinks";
import BrowserFrame from "../ui/BrowserFrame";
import StatCards from "../ui/StatCards";
import FeatureCards from "../ui/FeatureCards";
import TechStackCards from "../ui/TechStackCards";
import SimpleArchitectureFlow from "../ui/SimpleArchitectureFlow";
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
    desc: "Browse all posts in a grid. Click any post to expand and see the full article.",
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
        <LargePills
          items={[{ name: "Featured Project", color: "text-white/40" }]}
        />

        <h1 className="text-white text-4xl font-bold">
          Personal Portfolio (aliahhmad.com)
        </h1>

        <p className="text-white/60 text-lg max-w-xl">
          A full-stack portfolio site with a blog, contact system, and an iOS
          26-inspired glassmorphism UI — the very site you're on.
        </p>

        {/* Pills */}
        <SmallPills
          items={["React", "Serverless Functions", "Tailwind CSS", "Vercel"]}
        />

        {/* CTA links */}
        <CTALinks
          links={[
            {
              label: "Live Site ↗",
              href: "https://aliahhmad.com/",
              type: "glass-flat",
            },
            {
              label: "GitHub ↗",
              href: "https://github.com/aliahhmad/aliahhmad.com",
              type: "outline",
            },
          ]}
        />
      </div>

      {/* ── Hero screenshot ── */}
      <BrowserFrame
        url="aliahhmad.com"
        imageSrc="/projects/aliahhmad/home_page.png"
        altText="Project Screenshot"
      />

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
            <StatCards
              stats={[
                { num: "5", label: "Pages" },
                { num: "1", label: "APIs" },
                { num: "∞", label: "CSS tweaks" },
              ]}
            />
          </div>
        )}

        {/* FEATURES */}
        {activeTab === "Features" && <FeatureCards features={features} />}

        {/* TECH STACK */}
        {activeTab === "Tech Stack" && (
          <div className="flex flex-col gap-6">
            {/* Stack cards */}
            <TechStackCards techStacks={techStack} />

            {/* Architecture flow */}
            <div className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <span className="text-white text-lg font-bold">Architecture</span>
              <SimpleArchitectureFlow
                nodes={[
                  { title: "Client", sub: "React + Tailwind + Mapbox" },
                  { title: "Vercel CDN", sub: "Hosting + Routing" },
                  { title: "Serverless Function", sub: "Email via Mailtrap" },
                ]}
              />
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
