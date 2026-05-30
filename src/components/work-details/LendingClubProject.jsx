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

const TABS = ["Overview", "Pipeline", "Models", "Results", "Tech Stack"];

const pipelineSteps = [
  {
    title: "Leakage-Aware Labels",
    desc: "Built a binary target from loan_status and removed post-origination fields that would not be known at approval time.",
  },
  {
    title: "Feature Cleaning",
    desc: "Dropped admin columns, high-missing columns, high-cardinality text fields, and features identified as hurting model specificity.",
  },
  {
    title: "Feature Engineering",
    desc: "Parsed term, interest rate, employment length, and dates into numeric values, with optional TF-IDF features from descriptions.",
  },
  {
    title: "Time-Ordered Split",
    desc: "Used a 70/30 chronological train-test split and fit scaling only on training data to avoid future-data leakage.",
  },
];

const modelCards = [
  {
    title: "Logistic Regression",
    type: "Interpretable Baseline",
    desc: "Trained on scaled features with manual tuning for regularization, solver choice, and class weighting.",
    tags: ["AUC 0.6715", "F1 0.7548", "Precision 0.9152"],
  },
  {
    title: "Neural Network",
    type: "MLP Classifier",
    desc: "Dense network with dropout, early stopping, class-aware training, and tuned hidden layers, learning rate, and batch size.",
    tags: ["AUC 0.7035", "F1 0.7616", "Recall 0.6468"],
  },
  {
    title: "XGBoost",
    type: "Gradient Boosting",
    desc: "Tree-based model trained on engineered tabular features with row weighting and early stopping during grid search.",
    tags: ["AUC 0.7204", "AP 0.9422", "Precision 0.9332"],
  },
];

const resultHighlights = [
  {
    title: "Best F1",
    desc: "The neural network produced the strongest default-threshold F1-score and recall at threshold 0.5.",
  },
  {
    title: "Best Ranking",
    desc: "XGBoost achieved the highest ROC-AUC and average precision, making it strongest for ranking borrower risk.",
  },
  {
    title: "Threshold Tradeoffs",
    desc: "Lower thresholds increased recall but approved more risky loans, while higher thresholds improved precision and reduced bad approvals.",
  },
];

const techStack = [
  { category: "Data", items: ["Pandas", "NumPy", "Kaggle Dataset"] },
  {
    category: "Modeling",
    items: ["Scikit-learn", "XGBoost", "Neural Network", "Grid Search"],
  },
  { category: "Evaluation", items: ["ROC-AUC", "Average Precision", "F1", "Confusion Matrix"] },
  { category: "Visualization", items: ["Matplotlib", "Seaborn"] },
];

const screenshots = [
  {
    label: "Final model comparison results",
    caption: "Final model comparison and evaluation outputs",
    path: "/projects/lendingclub/results.png",
  },
];

// Project detail page for the Lending Club default-risk machine learning project.
const LendingClubProject = () => {
  const [activeTab, setActiveTab] = useState("Overview");

  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-10 min-h-screen">
      <header className="flex flex-col gap-4">
        <LargePills
          items={[
            { name: "Machine Learning", color: "text-white/40" },
            { name: "CSCI-635", color: "text-green-400/70" },
          ]}
        />

        <h1 className="text-white text-4xl font-bold">
          Predicting Default Risk of Lending Club Loans
        </h1>

        <p className="text-white/60 text-lg max-w-xl">
          A machine learning project comparing Logistic Regression, Neural
          Networks, and XGBoost for borrower default prediction on 2.26M Lending
          Club loans.
        </p>

        <SmallPills
          items={["Python", "Scikit-learn", "XGBoost", "Pandas", "Seaborn"]}
        />

        <CTALinks
          links={[
            {
              label: "GitHub ↗",
              href: "https://github.com/aliahhmad/rit_csci_635_ml_project",
              type: "glass-flat",
            },
            {
              label: "Presentation ↗",
              href: "https://drive.google.com/file/d/199-tsKZEIkBDDboflzrL1oinyUV1dxFJ/view?usp=sharing",
              type: "outline",
            },
          ]}
        />
      </header>

      <BrowserFrame
        url="rit-csci-635 — Lending Club Loan Default Risk"
        imageSrc="/projects/lendingclub/results.png"
        altText="Lending Club loan default model results"
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
              The project frames loan default prediction as a binary
              classification problem: estimate whether a borrower is likely to
              repay or default using information available at loan origination.
              The work intentionally mirrors ideas from a Stanford CS229 Lending
              Club project while rebuilding the pipeline around leakage
              prevention, temporal validation, and consistent model comparison.
            </p>
            <p className="text-white/70 text-base leading-relaxed">
              The dataset contains accepted Lending Club loans from 2007 through
              2018, with 2,260,701 rows and 151 original columns. After
              preprocessing, each model is evaluated on the same held-out test
              period so the comparison stays consistent.
            </p>

            <StatCards
              stats={[
                { num: "2.26M", label: "Loans" },
                { num: "151", label: "Raw Columns" },
                { num: "3", label: "Models" },
                { num: "0.7204", label: "Top AUC" },
              ]}
            />
          </div>
        )}

        {activeTab === "Pipeline" && (
          <div className="flex flex-col gap-6">
            <FeatureCards features={pipelineSteps} />
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">
                Preprocessing Flow
              </h2>
              <SimpleArchitectureFlow
                nodes={[
                  { title: "Raw Loans", sub: "2007-2018 accepted loans" },
                  { title: "Clean Features", sub: "Leakage removal + encoding" },
                  { title: "Train / Test", sub: "70/30 chronological split" },
                  { title: "Model Inputs", sub: "Scaled and unscaled exports" },
                ]}
              />
            </section>
          </div>
        )}

        {activeTab === "Models" && <ProjectCards projects={modelCards} />}

        {activeTab === "Results" && (
          <div className="flex flex-col gap-6">
            <FeatureCards features={resultHighlights} />
            <ScreenshotGallery screenshots={screenshots} />
          </div>
        )}

        {activeTab === "Tech Stack" && (
          <div className="flex flex-col gap-6">
            <TechStackCards techStacks={techStack} />
            <section className="glass-flat rounded-xl p-5 flex flex-col gap-4">
              <h2 className="text-white text-lg font-bold">
                Evaluation Artifacts
              </h2>
              <SimpleArchitectureFlow
                nodes={[
                  { title: "Summaries", sub: "Saved model metrics" },
                  { title: "Thresholds", sub: "Approval cutoff comparison" },
                  { title: "Plots", sub: "ROC, PR, F1, confusion matrices" },
                ]}
              />
            </section>
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

export default LendingClubProject;
