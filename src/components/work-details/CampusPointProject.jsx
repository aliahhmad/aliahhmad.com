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

const TABS = ["Overview", "Features", "Tech Stack", "Transactions", "Testing", "Screenshots"];

const screenshots = [
  {
    label: "Home Page",
    caption: "CampusPoint Home Page",
    path: "/projects/campuspoint/home_page.png",
  },
  {
    label: "Sign In",
    caption: "Member Sign In",
    path: "/projects/campuspoint/sign_in_page.png",
  },
  {
    label: "Sign Up",
    caption: "Create a CampusPoint Account",
    path: "/projects/campuspoint/sign_up_page.png",
  },
];

const features = [
  {
    title: "Campus Requests",
    desc: "Browse, search, and filter location-based requests. Creating a request holds five points for one hour, giving contributors a clear reward and deadline.",
  },
  {
    title: "Responses & Rewards",
    desc: "Other members can submit one response per open request. The owner accepts a visible answer before expiry, awarding its contributor five points and one reputation point.",
  },
  {
    title: "Accounts & Profiles",
    desc: "Email verification, JWT access and refresh tokens, password resets, and profile management support member accounts. New wallets receive a one-time 100-point opening grant.",
  },
  {
    title: "Content Moderation",
    desc: "Configurable whole-word checks mark new content visible, hidden, or pending. Unpublished answers stay private to their contributors, and hidden content records a violation.",
  },
  {
    title: "Expiry & Refunds",
    desc: "Background scanning refunds overdue requests without visible responses. Requests with visible answers become conflicted and keep their reward in escrow for administrator review.",
  },
  {
    title: "Administrator Tools",
    desc: "Administrators manage user accounts and review conflicted requests. They can accept an eligible visible answer or refund the held reward through the backend.",
  },
  {
    title: "Safe Retries",
    desc: "The frontend preserves pending action keys in session storage and refreshes request and response lists every five seconds. Processing actions show success only after backend confirmation.",
  },
];

const techStack = [
  { category: "Frontend", items: ["React", "Vite", "React Router", "Bootstrap"] },
  { category: "Backend", items: ["Python", "FastAPI", "Campus API", "Points API"] },
  { category: "Data", items: ["PostgreSQL 18.1", "Native prepared transactions", "Alembic migrations"] },
  { category: "Development", items: ["Docker Compose", "uv", "pytest", "Ruff"] },
  { category: "Hosting", items: ["Vercel frontend", "Private VPS backend"] },
  { category: "Security", items: ["JWT authentication", "Role-based permissions", "Internal service token", "SMTP account emails"] },
];

const transactionSteps = [
  {
    title: "1. Persist the Operation",
    desc: "Campus saves the caller, idempotency key, trusted payload, reserved entity IDs, and required participants before preparing any business changes.",
  },
  {
    title: "2. Prepare Local Changes",
    desc: "Each participant validates eligibility under locks, writes its local changes and journal, then runs PostgreSQL PREPARE TRANSACTION before voting Yes.",
  },
  {
    title: "3. Record One Decision",
    desc: "Campus durably records COMMIT only after all required Yes votes. A failed or unconfirmed preparation leads to ABORT; a saved decision cannot be replaced.",
  },
  {
    title: "4. Deliver & Acknowledge",
    desc: "Participants verify the recorded decision before committing or rolling back their prepared transactions. The API reports completion only after every participant acknowledges.",
  },
  {
    title: "5. Recover After Failure",
    desc: "Background workers resume unfinished operations and replay saved decisions after restarts or lost acknowledgements. A prepared participant waits for the coordinator rather than guessing from a timeout.",
  },
];

const testing = [
  {
    title: "Validation & Permissions",
    desc: "The documented service suites cover request validation, moderation, authorization boundaries, schemas, and isolated service behavior using temporary SQLite or mocked Points storage.",
  },
  {
    title: "Real PostgreSQL Workflows",
    desc: "A separate workflow suite uses two disposable PostgreSQL databases with prepared transactions enabled to exercise native two-phase commit through both services' ASGI routes.",
  },
  {
    title: "Accounting & Concurrency",
    desc: "Workflow coverage includes wallet conservation, reward and reputation awards, refunds, competing settlements, idempotent retries, and rollback behavior.",
  },
  {
    title: "Failure Recovery",
    desc: "Lost prepare replies, lost commit acknowledgements, and crash recovery scenarios exercise the durable coordinator and participant journals across service failures.",
  },
];

// CampusPoint follows the shared project-detail layout used throughout the portfolio.
function CampusPointProject() {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-10 min-h-screen">
      <header className="flex flex-col gap-4">
        <LargePills items={[{ name: "Featured Project", color: "text-white/40" }]} />
        <h1 className="text-white text-4xl font-bold">CampusPoint</h1>
        <p className="text-white/60 text-lg max-w-xl">
          A campus request-and-response platform with points-based rewards,
          escrow, and durable transaction coordination across two independent
          services.
        </p>
        <SmallPills items={["React", "Vite", "Bootstrap", "FastAPI", "PostgreSQL", "Docker", "Two-Phase Commit"]} />
        <CTALinks links={[
          {
            label: "Live Site ↗",
            href: "https://cp-rit.aliahhmad.dev/",
            type: "glass-flat",
          },
          {
            label: "Frontend GitHub ↗",
            href: "https://github.com/aliahhmad/campus_point_rit_frontend",
            type: "outline",
          },
          {
            label: "Backend GitHub ↗",
            href: "https://github.com/aliahhmad/campus_point_rit_backend",
            type: "outline",
          },
        ]} />
      </header>

      <BrowserFrame
        url="cp-rit.aliahhmad.dev"
        imageSrc="/projects/campuspoint/home_page.png"
        altText="CampusPoint home page introducing campus questions, helpful responses, and points-based rewards for the RIT community."
      />

      <div className="flex overflow-x-auto gap-1 glass-flat rounded-xl p-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            aria-pressed={activeTab === tab}
            onClick={() => setActiveTab(tab)}
            className={`flex-1 min-w-max px-4 py-2 rounded-lg text-base transition-transform duration-200
              ${activeTab === tab ? "text-white shadow-sm" : "text-white/70 hover:text-white/80 hover:scale-[1.02]"}`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="flex flex-col gap-6">
        {activeTab === "Overview" && (
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              CampusPoint lets campus members ask location-based questions,
              contribute answers, and earn points and reputation for helping
              others. A new request holds five points in escrow for one hour.
              Accepting an eligible answer releases the reward to its contributor
              and adds one reputation point.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              Unanswered requests without visible responses are refunded after
              expiry. Requests that have visible responses but no accepted answer
              become conflicted, keeping their escrow held for administrator
              resolution. Account verification, moderation, and backend permission
              checks govern who can see content and take action.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              The React frontend talks only to the Campus API. Behind it, Campus
              and Points each own a PostgreSQL database. Native two-phase commit
              coordinates request creation, rewards, and refunds across those
              databases, with durable decisions, idempotent retries, and background
              recovery for interrupted operations.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              The frontend is deployed on Vercel. The backend is hosted on a
              private VPS, configured to serve the deployed frontend through the
              Campus API while coordinating points operations with the Points
              service.
            </p>
            <StatCards stats={[
              { num: "2", label: "FastAPI Services" },
              { num: "2", label: "Databases" },
              { num: "5", label: "Points per Request" },
              { num: "1 hr", label: "Request Lifetime" },
            ]} />
            <figure className="glass-flat rounded-xl p-4 sm:p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">Architecture Overview</h2>
              <p className="text-white/70 text-base leading-relaxed">
                The React frontend sends requests to the Campus API, which handles
                accounts, campus questions, responses, and transaction coordination.
                Campus calls the Points API over authenticated HTTP to manage
                wallets, escrow, rewards, and reputation.
              </p>
              <div
                className="overflow-x-auto rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
                role="region"
                aria-label="Service architecture diagram; scroll horizontally to see all services and databases"
                tabIndex={0}
              >
                <img
                  src="/projects/campuspoint/architecture.svg"
                  alt="CampusPoint architecture: the React frontend calls Campus API, which coordinates with Points API. Each service owns a separate PostgreSQL database."
                  className="w-full min-w-[760px]"
                />
              </div>
              <figcaption className="text-white/60 text-sm leading-relaxed">
                Each service owns its PostgreSQL database and accesses only its
                own records. Two-phase commit coordinates request changes with
                points accounting across both databases, while durable journals
                and recovery workers finish interrupted operations.
              </figcaption>
              <a
                href="/projects/campuspoint/architecture.svg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-sm hover:text-white hover:underline self-start"
              >
                Open full-size diagram ↗
              </a>
            </figure>
          </div>
        )}

        {activeTab === "Features" && <FeatureCards features={features} />}

        {activeTab === "Tech Stack" && (
          <div className="flex flex-col gap-6">
            <TechStackCards techStacks={techStack} />
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">Service Architecture</h2>
              <SimpleArchitectureFlow nodes={[
                { title: "Frontend", sub: "React + Vite + Bootstrap" },
                { title: "Campus API", sub: "Requests + coordination" },
                { title: "Points API", sub: "Wallets + escrow + reputation" },
              ]} />
              <p className="text-white/70 text-base leading-relaxed">
                Campus stores users, locations, requests, responses, and coordinator
                state. Points stores wallets, escrow, its ledger, and participant
                journal. Each service accesses only its own database; authenticated
                HTTP calls carry coordination messages between them.
              </p>
            </section>
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">Request Lifecycle</h2>
              <SimpleArchitectureFlow nodes={[
                { title: "Create", sub: "Hold 5 points" },
                { title: "Respond", sub: "One answer per contributor" },
                { title: "Accept", sub: "Award 5 points + 1 reputation" },
              ]} />
              <p className="text-white/70 text-base leading-relaxed">
                After the one-hour deadline, requests without visible answers enter
                the refund workflow. Those with visible answers await administrator
                review as conflicts.
              </p>
            </section>
          </div>
        )}

        {activeTab === "Transactions" && (
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              Request creation couples the Campus record with a Points escrow
              hold. Acceptance couples the selected response with a reward and
              reputation award. Expiry refunds couple request state with returning
              the held points. Response creation uses the same coordinator with
              Campus as its only participant.
            </p>
            <figure className="glass-flat rounded-xl p-4 sm:p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">Two-Phase Commit Sequence</h2>
              <p className="text-white/70 text-base leading-relaxed">
                A two-participant operation moves from durable preparation to one
                saved decision, then finishes only after both services acknowledge.
                Points verifies that decision with Campus before settling its
                prepared transaction.
              </p>
              <div
                className="overflow-x-auto rounded-xl focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60"
                role="region"
                aria-label="Transaction sequence diagram; scroll horizontally to see all four participants"
                tabIndex={0}
              >
                <img
                  src="/projects/campuspoint/transaction-sequence.svg"
                  alt="Sequence diagram with Campus coordinator, Campus PostgreSQL, Points API, and Points PostgreSQL: persist operation, prepare each database, collect Yes votes, record COMMIT or ABORT, deliver and verify the decision, finish prepared transactions, acknowledge, and save completion."
                  className="w-full min-w-[760px]"
                />
              </div>
              <figcaption className="text-white/60 text-sm leading-relaxed">
                Solid arrows show calls and database actions; dashed arrows show
                replies. A saved COMMIT or ABORT is replayed during recovery until
                every participant acknowledges.
              </figcaption>
              <a
                href="/projects/campuspoint/transaction-sequence.svg"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 text-sm hover:text-white hover:underline self-start"
              >
                Open full-size diagram ↗
              </a>
            </figure>
            <FeatureCards features={transactionSteps} />
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-3">
              <h2 className="text-white text-lg font-bold">Completion & Recovery</h2>
              <p className="text-white/70 text-base leading-relaxed">
                Processing operations remain pending in the browser until the
                backend confirms completion. Coordinator and Points recovery
                workers run on startup and after each five-second delay between
                passes; operation polling can also advance unfinished work.
              </p>
              <p className="text-white/70 text-base leading-relaxed">
                Prepared transactions retain locks and can wait during an outage.
                Independent reads may temporarily see one participant's committed
                state before the other finishes. A durable COMMIT must still be
                completed after recovery, even if a deadline has passed.
              </p>
            </section>
          </div>
        )}

        {activeTab === "Testing" && (
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              The backend separates isolated service checks from real database
              workflow tests. Native two-phase commit coverage requires two
              disposable PostgreSQL databases; those database-dependent tests skip
              when their connection URLs are absent.
            </p>
            <FeatureCards features={testing} />
          </div>
        )}

        {activeTab === "Screenshots" && (
          <ScreenshotGallery screenshots={screenshots} />
        )}
      </div>

      <div className="flex items-end justify-end">
        <Link to="/work" className="text-lg text-white hover:underline">
          See all works →
        </Link>
      </div>
    </section>
  );
}

export default CampusPointProject;
