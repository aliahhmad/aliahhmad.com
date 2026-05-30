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

const TABS = ["Overview", "Features", "Tech Stack", "Roadmap", "Screenshots"];

const features = [
  {
    title: "Business Onboarding",
    desc: "Owners configure business profiles, hours, time zones, cancellation rules, services, staff, tax, currency, and invoice branding.",
  },
  {
    title: "Service-Based Booking",
    desc: "Clients and guests pick a service, provider, available slot, and booking details with conflict checks before confirmation.",
  },
  {
    title: "Invoicing & Billing",
    desc: "Invoices can be generated on booking, appointment completion, or manually with line items, taxes, discounts, and lifecycle tracking.",
  },
  {
    title: "Stripe Payments",
    desc: "Clients and guests pay through Stripe Checkout while verified webhooks update invoice state and trigger receipts.",
  },
  {
    title: "Email Automation",
    desc: "SES-backed confirmations, invoice links, receipts, reminders, and feedback requests keep the customer journey moving.",
  },
  {
    title: "Feedback Loop",
    desc: "Post-appointment feedback captures ratings, quick tags, and comments, then surfaces trends by service and provider.",
  },
  {
    title: "Audit Trail",
    desc: "Business-critical events such as invoice edits, cancellations, refunds, and settings changes are logged for accountability.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Vite", "Bootstrap CSS"] },
  { category: "Backend", items: ["Node.js", "TypeScript", "AWS Lambda", "API Gateway"] },
  { category: "Data", items: ["RDS PostgreSQL", "Prisma ORM", "S3"] },
  { category: "Platform", items: ["Cognito", "SES", "EventBridge", "CloudWatch", "CDK"] },
  { category: "Payments", items: ["Stripe Checkout", "Stripe Webhooks"] },
];

const roadmap = [
  {
    title: "Foundation",
    desc: "Set up the React + Vite frontend, Node.js + TypeScript Lambda backend, PostgreSQL database, Prisma schema, and environment strategy.",
  },
  {
    title: "Auth & Onboarding",
    desc: "Add Cognito-backed admin, staff, and client roles, then build business profile, services, staff, and invoice settings workflows.",
  },
  {
    title: "Booking Core",
    desc: "Ship service selection, availability lookup, slot booking, conflict checks, confirmations, and authenticated client history.",
  },
  {
    title: "Guest Flow",
    desc: "Support email-only booking with secure manage links for rescheduling, cancellation, invoice access, and payment.",
  },
  {
    title: "Billing System",
    desc: "Create invoice and payment tables, lifecycle states, generated line items, Stripe Checkout, webhooks, receipts, and refunds.",
  },
  {
    title: "Automation",
    desc: "Use EventBridge, Lambda, and SES for reminders, feedback emails, overdue invoice handling, and operational monitoring.",
  },
];

// Project detail page for Schdlr, using the same shared building blocks as the other work pages.
const SchdlrProject = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-10 min-h-screen">
      {/* ── Hero ── */}
      <header className="flex flex-col gap-4">
        <LargePills
          items={[
            { name: "Featured Project", color: "text-white/40" },
            { name: "Coming Soon", color: "text-amber-400/70" },
          ]}
        />

        <h1 className="text-white text-4xl font-bold">Schdlr</h1>

        <p className="text-white/60 text-lg max-w-xl">
          A multi-tenant appointment scheduling and invoicing SaaS for service
          businesses, designed around AWS serverless infrastructure and real
          payment workflows.
        </p>

        {/* Pills */}
        <SmallPills
          items={[
            "React",
            "Vite",
            "Lambda",
            "API Gateway",
            "RDS PostgreSQL",
            "Prisma",
            "Stripe",
            "Cognito",
            "SES",
            "CDK",
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
      </header>

      {/* ── Hero screenshot placeholder ── */}
      <BrowserFrame
        url="schdlr.aliahhmad.com/dashboard"
        altText="Project Screenshot"
      />

      {/* Tabs switch between content sections without leaving the detail page. */}
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
              for service businesses like consultants, clinics, tutors, and
              repair teams. The MVP centers on one-on-one, service-based
              appointments with pricing, availability, conflict checks,
              invoicing, payments, reminders, and post-appointment feedback.
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
            <p className="text-white/70 text-base leading-relaxed">
              The planned production architecture uses React + Vite on the
              frontend, API Gateway and Lambda for serverless APIs, Prisma with
              RDS PostgreSQL for relational scheduling and billing data, Cognito
              for authenticated roles, S3 for business assets, SES for email
              automation, EventBridge for reminders, Stripe for payments, and
              CDK for infrastructure as code.
            </p>

            {/* Stat cards */}
            <StatCards stats={[
              { num: "4", label: "Actor Types" },
              { num: "7", label: "Core Modules" },
              { num: "12", label: "Build Phases" },
              { num: "AWS", label: "Serverless Stack" },
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
            <TechStackCards techStacks={techStack} />

            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">Architecture</h2>
              <SimpleArchitectureFlow nodes={[
                { title: "Frontend", sub: "React + Vite" },
                { title: "Hosting", sub: "Amplify or S3 + CloudFront" },
                { title: "API", sub: "Gateway + Lambda" },
                { title: "Data", sub: "Prisma + RDS PostgreSQL" },
                { title: "Automation", sub: "SES + EventBridge" },
                { title: "Payments", sub: "Stripe Webhooks" },
              ]} />
            </section>

            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">Core Data Model</h2>
              <SimpleArchitectureFlow nodes={[
                { title: "Organization", sub: "Tenant + profile" },
                { title: "Users", sub: "Admin, staff, clients" },
                { title: "Services", sub: "Duration + pricing" },
                { title: "Appointments", sub: "Slots + status" },
                { title: "Invoices", sub: "Items + payments" },
                { title: "Feedback", sub: "Ratings + tags" },
              ]} />
            </section>
          </div>
        )}

        {/* ROADMAP */}
        {activeTab === "Roadmap" && (
          <div className="flex flex-col gap-6">
            <FeatureCards features={roadmap} />

            <section className="glass-flat rounded-xl p-5 flex flex-col gap-3">
              <h2 className="text-white text-lg font-bold">Later Additions</h2>
              <SmallPills
                items={[
                  "RBAC billing role",
                  "SQS async jobs",
                  "ElastiCache availability cache",
                  "Step Functions workflows",
                  "SMS reminders",
                  "Invoice adjustments",
                ]}
              />
            </section>
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
