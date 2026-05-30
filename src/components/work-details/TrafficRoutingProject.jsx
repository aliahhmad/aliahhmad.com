import { useState } from "react";
import { Link } from "react-router-dom";
import LargePills from "../ui/LargePills";
import SmallPills from "../ui/SmallPills";
import CTALinks from "../ui/CTALinks";
import BrowserFrame from "../ui/BrowserFrame";
import StatCards from "../ui/StatCards";
import FeatureCards from "../ui/FeatureCards";
import ProjectCards from "../ui/ProjectCards";
import TechStackCards from "../ui/TechStackCards";
import SimpleArchitectureFlow from "../ui/SimpleArchitectureFlow";
import ScreenshotGallery from "../ui/ScreenshotGallery";

const TABS = ["Overview", "Graph", "Algorithms", "Uncertainty", "Testing"];

const graphFeatures = [
  {
    title: "NY Road Graph",
    desc: "Manually constructed graph of 28 New York State cities across NYC Metro, Western NY, Central NY, Capital Region, and Southern Tier.",
  },
  {
    title: "Traffic Distributions",
    desc: "Each road stores AM peak, off-peak, and PM peak congestion multipliers with mean and standard deviation values.",
  },
  {
    title: "Geographic Heuristic",
    desc: "City nodes use GPS coordinates and Haversine distance to support A* search with a straight-line distance heuristic.",
  },
  {
    title: "Route Visualization",
    desc: "Graph rendering uses real coordinates, road labels, travel-time estimates, and optional highlighted paths.",
  },
];

const algorithmCards = [
  {
    title: "Uniform Cost Search",
    type: "Deterministic Baseline",
    desc: "Computes the least-cost path using cumulative free-flow travel time before traffic uncertainty is introduced.",
    tags: ["Optimal", "Free Flow", "Nodes Expanded"],
  },
  {
    title: "A* Search",
    type: "Heuristic Search",
    desc: "Adds a Haversine heuristic to reduce unnecessary exploration while preserving optimal routes in the deterministic setup.",
    tags: ["Haversine", "20% Fewer Expansions", "Optimal"],
  },
  {
    title: "Traffic-Aware Search",
    type: "Time-Dependent Costs",
    desc: "Extends UCS and A* with congestion-adjusted costs for AM peak, off-peak, and PM peak routing.",
    tags: ["AM Peak", "Off-Peak", "PM Peak"],
  },
];

const uncertaintyCards = [
  {
    title: "Monte Carlo Route Choice",
    desc: "Samples full traffic scenarios, runs UCS for each scenario, and counts how often each route is selected.",
  },
  {
    title: "Reliability Simulation",
    desc: "Runs a second simulation on the selected route to estimate mean, standard deviation, min, max, and threshold exceedance risk.",
  },
  {
    title: "Route Flip Example",
    desc: "Buffalo to Niagara Falls switches from the direct I-190 route off-peak to a Buffalo -> Tonawanda -> Niagara Falls path during AM peak.",
  },
];

const testCards = [
  {
    title: "Search Harnesses",
    type: "Notebook Tests",
    desc: "Validated UCS and A* on route cases such as Albany to Troy, Buffalo to Niagara Falls, Binghamton to Elmira, and unreachable destinations.",
    tags: ["UCS", "A*", "Edge Cases"],
  },
  {
    title: "Traffic Cases",
    type: "Route Validation",
    desc: "Checked time-period-sensitive costs and path flips, including NYC to Long Island City and Buffalo to Niagara Falls.",
    tags: ["AM Peak", "PM Peak", "Off-Peak"],
  },
  {
    title: "Class Tests",
    type: "Pytest",
    desc: "Automated tests cover traffic distributions, edges, nodes, graph loading, Haversine admissibility, and path reconstruction.",
    tags: ["pytest", "Graph Classes", "Reproducibility"],
  },
];

const techStack = [
  { category: "Language", items: ["Python", "Jupyter Notebook"] },
  { category: "AI", items: ["UCS", "A* Search", "Monte Carlo Simulation"] },
  { category: "Data", items: ["CSV", "Gaussian Distributions", "GPS Coordinates"] },
  { category: "Testing", items: ["pytest", "Notebook Harnesses", "Fixed Seeds"] },
];

const screenshots = [
  {
    label: "Traffic routing results",
    caption: "Traffic routing model outputs and result summary",
    path: "/projects/trafficrouting/results.png",
  },
];

// Project detail page for the uncertainty-aware traffic routing AI project.
const TrafficRoutingProject = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-10 min-h-screen">
      <header className="flex flex-col gap-4">
        <LargePills
          items={[
            { name: "Artificial Intelligence", color: "text-white/40" },
            { name: "CSCI-630", color: "text-green-400/70" },
          ]}
        />

        <h1 className="text-white text-4xl font-bold">
          Uncertainty-Aware Traffic Routing
        </h1>

        <p className="text-white/60 text-lg max-w-xl">
          An AI routing system that models New York State roads as a
          probabilistic graph and compares deterministic, traffic-aware, and
          Monte Carlo route planning.
        </p>

        <SmallPills
          items={["Python", "UCS", "A* Search", "Monte Carlo", "pytest"]}
        />

        <CTALinks
          links={[
            {
              label: "GitHub ↗",
              href: "https://github.com/aliahhmad/rit_csci_630_ai_project",
              type: "glass-flat",
            },
            {
              label: "Presentation ↗",
              href: "https://drive.google.com/file/d/1FjW4jvxAAOPBz9PHXmvtOYFBH-EihfGp/view?usp=sharing",
              type: "outline",
            },
          ]}
        />
      </header>

      <BrowserFrame
        url="rit-csci-630 — Uncertainty-Aware Traffic Routing"
        imageSrc="/projects/trafficrouting/results.png"
        altText="Traffic routing project results"
      />

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

      <div className="flex flex-col gap-6">
        {activeTab === "Overview" && (
          <div className="flex flex-col gap-6">
            <p className="text-white/70 text-base leading-relaxed">
              Traditional route planners often assume fixed travel times, but
              real traffic changes with congestion, incidents, and time of day.
              This project explores how search-based AI algorithms behave when
              road costs are uncertain instead of deterministic.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              The system models a New York State road network as an undirected
              graph. Edges contain distance, speed, road type, and probabilistic
              traffic multipliers so routes can be evaluated for both efficiency
              and reliability.
            </p>

            <StatCards
              stats={[
                { num: "28", label: "Cities" },
                { num: "41", label: "Roads" },
                { num: "5", label: "Regions" },
                { num: "3", label: "Time Periods" },
              ]}
            />
          </div>
        )}

        {activeTab === "Graph" && (
          <div className="flex flex-col gap-6">
            <FeatureCards features={graphFeatures} />
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">
                Graph Data Model
              </h2>
              <SimpleArchitectureFlow
                nodes={[
                  { title: "Nodes", sub: "Cities + GPS coordinates" },
                  { title: "Edges", sub: "Road distance + speed limit" },
                  { title: "Traffic", sub: "Gaussian congestion models" },
                  { title: "Graph", sub: "Undirected adjacency list" },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === "Algorithms" && (
          <div className="flex flex-col gap-6">
            <ProjectCards projects={algorithmCards} />
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">
                Search Progression
              </h2>
              <SimpleArchitectureFlow
                nodes={[
                  { title: "Free Flow", sub: "Baseline UCS + A*" },
                  { title: "Traffic Mean", sub: "Time-period costs" },
                  { title: "Probabilistic", sub: "Sampled road scenarios" },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === "Uncertainty" && (
          <div className="flex flex-col gap-6">
            <FeatureCards features={uncertaintyCards} />
            <ScreenshotGallery screenshots={screenshots} />
          </div>
        )}

        {activeTab === "Testing" && (
          <div className="flex flex-col gap-6">
            <ProjectCards projects={testCards} />
            <TechStackCards techStacks={techStack} />
          </div>
        )}
      </div>

      <div className="flex items-end justify-end">
        <Link to="/work" className="text-lg text-white hover:underline">
          See all works →
        </Link>
      </div>
    </section>
  );
};

export default TrafficRoutingProject;
