// src/components/project-details/SchdlrProject.jsx
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
    title: "Business Onboarding",
    desc: "Owners set up their profile, services, pricing, staff, and invoicing rules — everything needed to start accepting bookings.",
  },
  {
    title: "Smart Booking",
    desc: "Clients and guests can book appointments with real-time conflict checks. Guest bookings use secure token links — no account needed.",
  },
  {
    title: "Invoicing & Billing",
    desc: "Auto-generated invoices on booking or completion. Full lifecycle tracking: Draft → Sent → Paid → Overdue → Void.",
  },
  {
    title: "Stripe Payments",
    desc: "Clients pay invoices via Stripe Checkout. Webhooks update payment status in real time. Admin-handled refunds.",
  },
  {
    title: "Reminders & Receipts",
    desc: "System sends automated email reminders before appointments and receipts after payment — all without manual effort.",
  },
  {
    title: "Feedback Loop",
    desc: "After each appointment, clients receive a feedback link with ratings, quick tags, and comments. Trends surface in the dashboard.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Bootstrap CSS"] },
  { category: "Backend", items: ["Express.js", "PostgreSQL", "Stripe"] },
  { category: "Deployment", items: ["Vercel"] },
];

const screenshots = [
  { label: "📸 Booking Flow", caption: "Appointment Booking" },
  { label: "📸 Business Dashboard", caption: "Admin Overview" },
  { label: "📸 Invoice View", caption: "Invoice Detail" },
  { label: "📸 Client Portal", caption: "Booking History" },
  { label: "📸 Stripe Checkout", caption: "Payment Flow" },
  { label: "📸 Feedback Form", caption: "Post-Appointment Review" },
];

const SchdlrProject = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-10 min-h-screen">
      {/* ── Hero ── */}
      <div className="flex flex-col gap-4">
        <LargePills
          items={[
            { name: "Featured Project", color: "text-white/40" },
            { name: "Coming Soon", color: "text-amber-400/70" },
          ]}
        />

        <h1 className="text-white text-4xl font-bold">Schdlr</h1>

        <p className="text-white/60 text-lg max-w-xl">
          A multi-tenant appointment scheduling platform with smart invoicing,
          Stripe payments, and role-based access — built for real businesses.
        </p>

        {/* Pills */}
        <SmallPills
          items={[
            "React",
            "Express",
            "PostgreSQL",
            "Bootstrap",
            "Stripe",
            "Vercel",
          ]}
        />

        {/* CTA links — disabled while in development */}
        <div className="flex gap-3">
          <CTALinks
            links={[
              {
                label: "Live Site — Coming Soon",
                href: "#",
                type: "glass-flat",
                disabled: true,
              },
              {
                label: "GitHub ↗",
                href: "https://github.com/aliahhmad",
                type: "outline",
              },
            ]}
          />
        </div>
      </div>

      {/* ── Hero screenshot placeholder ── */}
      <BrowserFrame
        url="schdlr.aliahhmad.com/dashboard"
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
              Schdlr is a full-stack, multi-tenant scheduling platform designed
              for service businesses — think consultants, clinics, tutors, and
              repair services. It handles the entire client lifecycle: booking,
              invoicing, payment collection, reminders, and post-appointment
              feedback.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              The platform supports four actor types —{" "}
              <span className="text-white font-medium">Business Owners</span>,{" "}
              <span className="text-white font-medium">Staff</span>,{" "}
              <span className="text-white font-medium">Clients</span>, and{" "}
              <span className="text-white font-medium">Guests</span> — with
              role-based access and a full audit trail. Guests can book and pay
              without ever creating an account, via secure token links.
            </p>

            {/* Stat cards */}
            <StatCards stats={[
              { num: "4", label: "Actor Types" },
              { num: "6", label: "Core Modules" },
              { num: "1", label: "Stripe Integration" },
              { num: "∞", label: "Bookings" },
            ]} />
          </div>
        )}

        {/* FEATURES */}
        {activeTab === "Features" && (
          <FeatureCards features={features} />
        )}


        {/* TECH STACK */}
        {activeTab === "Tech Stack" && (
          <div className="flex flex-col gap-6">
            {/* Stack cards */}
            <TechStackCards techStacks={techStack} />

            {/* Architecture flow */}
            <div className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <span className="text-white text-lg font-bold">Architecture</span>
              <SimpleArchitectureFlow nodes={[
                { title: "Client", sub: "React + Bootstrap" },
                { title: "Vercel Edge", sub: "CDN + Routing" },
                { title: "Express API", sub: "Bookings + Invoices" },
                { title: "Stripe", sub: "Payments + Webhooks" },
                { title: "PostgreSQL", sub: "All Data" },
              ]} />
            </div>
          </div>
        )}

        {/* SCREENSHOTS — Coming Soon */}
        {activeTab === "Screenshots" && (
          <div className="flex flex-col items-center justify-center gap-4 py-16 glass-flat rounded-2xl">
            <p className="text-white/40 text-lg font-bold">
              Screenshots coming soon
            </p>
            <p className="text-white/25 text-base max-w-xs text-center">
              This project is currently in development. Check back once the UI
              is live.
            </p>
          </div>
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

export default SchdlrProject;
