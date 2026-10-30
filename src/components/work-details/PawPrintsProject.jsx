import { useState } from "react";
import { Link } from "react-router-dom";
import LargePills from "../ui/LargePills";
import SmallPills from "../ui/SmallPills";
import CTALinks from "../ui/CTALinks";
import BrowserFrame from "../ui/BrowserFrame";
import FeatureCards from "../ui/FeatureCards";
import TechStackCards from "../ui/TechStackCards";
import SimpleArchitectureFlow from "../ui/SimpleArchitectureFlow";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const REPOSITORY_URL = "https://github.com/aliahhmad/pawprints_frontend_demo";
const TABS = ["Overview", "My Role", "Features", "Tech Stack", "Screenshots"];

const screenshots = [
  {
    label: "Petition Browsing",
    caption: "Redesigned petition listing with search, tags, and status filters",
    path: "/projects/pawprints/petitions_page.png",
  },
  {
    label: "Petition Details",
    caption: "Petition details, signature progress, and Student Government updates",
    path: "/projects/pawprints/view_petition_page.png",
  },
  {
    label: "Create a Petition",
    caption: "Rich-text petition creation with writing guidance",
    path: "/projects/pawprints/create_petition_page.png",
  },
];

const contributions = [
  {
    title: "Design Exploration",
    desc: "Created a working redesign to help my SG team discuss layout, navigation, visual identity, and complete user journeys with an interactive example.",
  },
  {
    title: "Frontend Development",
    desc: "Built reusable React and TypeScript screens for browsing petitions, reading updates, creating content, and managing profiles and drafts with Next.js.",
  },
  {
    title: "Accessible Interactions",
    desc: "Implemented a skip link, labeled navigation, keyboard-friendly dialogs with focus restoration, and petition tags that choose readable text colors from their backgrounds.",
  },
  {
    title: "Responsive Layouts",
    desc: "Developed mobile navigation and responsive workspace layouts so the team could explore the experience across desktop and smaller screens.",
  },
  {
    title: "Design Comparison",
    desc: "Integrated the original Pawprints 2 interface with preserved attribution, separate styles, and matching routes so both designs can be explored using the same saved demo data.",
  },
];

const features = [
  {
    title: "Discover Petitions",
    desc: "Browse, search, sort, and filter sample petitions. Open a petition to read its description, signature count, published updates, and timeline.",
  },
  {
    title: "Sign & Support",
    desc: "Choose a fictional student account to sign another student's open petition or remove an existing signature. Guests can browse public petitions and timelines.",
  },
  {
    title: "Rich-Text Creation",
    desc: "Compose petitions with a Lexical editor, tags, and local image attachments. Save an unpublished draft, reopen it, and publish it into the demo listing.",
  },
  {
    title: "Profiles & Drafts",
    desc: "View the selected example account's published petitions and saved drafts. Changes persist in the browser, and sample data can be reset from the redesigned profile.",
  },
  {
    title: "Committee Workflows",
    desc: "Use the fictional committee account to explore team history and create, edit, or delete draft updates on the sample petition. Draft updates stay outside the public timeline.",
  },
  {
    title: "Old & New Comparison",
    desc: "Switch between corresponding pages in the original and redesigned websites. Both presentations share saved petitions, signatures, attachments, and example accounts.",
  },
];

const techStack = [
  { category: "Frontend", items: ["Next.js App Router", "React", "TypeScript"] },
  { category: "Redesigned UI", items: ["Bootstrap", "Custom CSS", "SVG illustrations"] },
  { category: "Content Editing", items: ["Lexical", "Rich text", "Local image attachments"] },
  { category: "Demo State", items: ["Shared demo client", "Bundled JSON fixtures", "Browser localStorage"] },
  { category: "Original Interface", items: ["Pawprints 2 components", "Tailwind CSS", "Local compatibility adapter"] },
  { category: "Verification", items: ["Node.js test runner", "TypeScript checks", "ESLint", "Next.js production build"] },
];

function PawPrintsProject() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-6 sm:px-10 min-h-screen">
      <header className="flex flex-col gap-4">
        <LargePills items={[{ name: "Frontend Design Showcase", color: "text-white/60" }]} />
        <h1 className="text-white text-4xl font-bold">PawPrints</h1>
        <p className="text-white/60 text-lg max-w-xl">
          A working redesign of RIT Student Government’s petition platform,
          built to help my SG team explore a more accessible, responsive
          experience for student voices.
        </p>
        <SmallPills items={["Next.js", "React", "TypeScript", "Bootstrap", "Lexical", "Accessibility"]} />
        <CTALinks links={[
          { label: "Live Site ↗", href: "https://pawprints.aliahhmad.dev", type: "glass-flat" },
          { label: "GitHub ↗", href: REPOSITORY_URL, type: "outline" },
          { label: "Documentation ↗", href: `${REPOSITORY_URL}/tree/main/docs`, type: "outline" },
        ]} />
      </header>

      <section className="glass-flat rounded-xl p-5 flex flex-col gap-3">
        <p className="text-white/50 text-sm uppercase tracking-wide">Role & Context</p>
        <h2 className="text-white text-lg font-semibold">
          Frontend Developer · Rochester Institute of Technology
        </h2>
        <p className="text-white/60 text-sm">September 2026 – Present</p>
        <p className="text-white/70 leading-relaxed">
          I created this personal design showcase alongside my frontend
          development work on PawPrints to give the team a practical example
          of the interfaces and user experiences we could build.
        </p>
        <Link
          to="/experience/3"
          className="text-white/80 hover:text-white hover:underline self-start rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          View my RIT experience →
        </Link>
      </section>

      <BrowserFrame
        url="pawprints.aliahhmad.dev"
        imageSrc={screenshots[0].path}
        altText="Redesigned PawPrints petition browsing interface for RIT Student Government."
      />

      <div
        role="group"
        aria-label="Project sections"
        className="flex overflow-x-auto gap-1 glass-flat rounded-xl p-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            aria-pressed={activeTab === tab}
            aria-controls="pawprints-project-content"
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-max px-4 py-2 rounded-lg text-base transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white
              ${activeTab === tab ? "text-white bg-white/10 shadow-sm" : "text-white/70 hover:text-white hover:bg-white/5"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <section id="pawprints-project-content" aria-label={activeTab} className="flex flex-col gap-6">
        {activeTab === "Overview" && (
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              PawPrints gives RIT students a way to raise campus issues, gather
              support, and follow responses from Student Government. While working
              as a Frontend Developer at SG RIT, I built this personal project to
              make possible improvements to that experience tangible for my team.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              The showcase brings the original Pawprints 2 website and my
              redesigned experience into one Next.js application. A comparison
              toggle opens matching pages in either design, making it easier to
              discuss navigation, visual identity, responsive behavior, and
              end-to-end petition workflows.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Fictional student and committee accounts let reviewers explore
              signing, rich-text petition creation, saved drafts, profiles, and
              committee updates. The demo uses sample JSON and browser-local
              storage, so these flows can be explored without a backend or an
              institutional account. Submissions and signatures stay in the
              visitor’s browser.
            </p>
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-3">
              <h2 className="text-white text-lg font-bold">A Working Conversation Starter</h2>
              <p className="text-white/70 text-base leading-relaxed">
                My goal was to give the SG team something they could use, review,
                and discuss. Keeping both designs available with shared sample
                data makes the comparison practical, from finding a petition to
                saving a draft and returning to it later.
              </p>
            </section>
          </div>
        )}

        {activeTab === "My Role" && <FeatureCards features={contributions} />}

        {activeTab === "Features" && <FeatureCards features={features} />}

        {activeTab === "Tech Stack" && (
          <div className="flex flex-col gap-6">
            <TechStackCards techStacks={techStack} />
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">Shared Demo Architecture</h2>
              <SimpleArchitectureFlow nodes={[
                { title: "Two Presentations", sub: "Original + redesigned layouts" },
                { title: "Shared Demo Client", sub: "Accounts + petition workflows" },
                { title: "Local Data", sub: "JSON fixtures + localStorage" },
              ]} />
              <p className="text-white/70 text-base leading-relaxed">
                Separate root layouts keep the original Tailwind styles and
                redesigned Bootstrap interface independent. A local compatibility
                adapter connects the original components to the same demo client
                used by the redesigned screens. Saved changes survive navigation
                between the two presentations on the same browser origin.
              </p>
            </section>
            <p className="text-white/70 text-base leading-relaxed">
              The repository includes tests for local data operations, draft
              ownership, signatures, committee privacy, storage failures,
              navigation, metadata, and the original-site adapter. Its
              verification guide also records production-preview checks of both
              designs, including mobile layouts.
            </p>
          </div>
        )}

        {activeTab === "Screenshots" && (
          <ScreenshotGallery screenshots={screenshots} />
        )}
      </section>

      <div className="flex items-end justify-end">
        <Link to="/work" className="text-lg text-white hover:underline">
          See all works →
        </Link>
      </div>
    </section>
  );
}

export default PawPrintsProject;
