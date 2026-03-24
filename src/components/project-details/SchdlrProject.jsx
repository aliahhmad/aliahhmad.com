// src/components/project-details/SchdlrProject.jsx
import { useState } from "react";

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
        <div className="flex items-center gap-2">
          <span className="self-start text-sm font-semibold uppercase text-white/40 glass-flat px-3 py-1 rounded-full">
            In Development
          </span>
          <span className="self-start text-sm font-semibold uppercase text-amber-400/70 glass-flat px-3 py-1 rounded-full">
            Coming Soon
          </span>
        </div>

        <h1 className="text-white text-4xl font-bold">Schdlr</h1>

        <p className="text-white/60 text-lg max-w-xl">
          A multi-tenant appointment scheduling platform with smart invoicing,
          Stripe payments, and role-based access — built for real businesses.
        </p>

        {/* Pills */}
        <div className="flex flex-wrap gap-2">
          {[
            "React",
            "Express",
            "PostgreSQL",
            "Bootstrap",
            "Stripe",
            "Vercel",
          ].map((t) => (
            <span
              key={t}
              className="glass-flat text-white/80 text-sm px-3 py-1 rounded-full"
            >
              {t}
            </span>
          ))}
        </div>

        {/* CTA links — disabled while in development */}
        <div className="flex gap-3">
          <span className="glass-flat text-white/30 text-base font-semibold px-5 py-2 rounded-full cursor-not-allowed select-none">
            Live Site — Coming Soon
          </span>
          <a
            href="https://github.com/aliahhmad"
            className="text-white/60 border border-white/20 text-base font-semibold px-5 py-2 rounded-full hover:text-white hover:border-white/40 transition-all duration-200"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* ── Hero screenshot placeholder ── */}
      <div className="glass rounded-2xl overflow-hidden">
        {/* Fake browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-white/5">
          <span className="w-3 h-3 rounded-full bg-red-400/80" />
          <span className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <span className="w-3 h-3 rounded-full bg-green-400/80" />
          <span className="ml-3 text-white/30 text-xs glass-flat px-3 py-0.5 rounded-md">
            schdlr.aliahhmad.com/dashboard
          </span>
        </div>
        {/* Placeholder — swap with <img src="..." className="w-full object-cover" /> */}
        <div
          style={{
            background:
              "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.03) 100%)",
          }}
          className="w-full h-64 flex flex-col items-center justify-center gap-3"
        >
          <span className="text-white/20 text-sm italic">
            Screenshot coming soon
          </span>
        </div>
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
            <div className="flex overflow-x-auto gap-4 py-2 px-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              {[
                { num: "4", label: "Actor Types" },
                { num: "6", label: "Core Modules" },
                { num: "1", label: "Stripe Integration" },
                { num: "∞", label: "Bookings" },
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
                  { title: "Client", sub: "React + Bootstrap" },
                  { title: "Vercel Edge", sub: "CDN + Routing" },
                  { title: "Express API", sub: "Bookings + Invoices" },
                  { title: "Stripe", sub: "Payments + Webhooks" },
                  { title: "PostgreSQL", sub: "All Data" },
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
        <a href="/work" className="text-lg text-white hover:underline">
          See all works →
        </a>
      </div>
    </section>
  );
};

export default SchdlrProject;
