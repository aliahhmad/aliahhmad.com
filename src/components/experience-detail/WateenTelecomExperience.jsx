import { Link } from "react-router-dom";
import SmallPills from "../ui/SmallPills";
import MoreExperiences from "../experience/MoreExperiences";
import experiences from "../../data/allExperiences.json";

const experience = experiences.find((item) => item.id === "1");
const skills = [
  "Machine Learning",
  "Text Classification",
  "Data Preprocessing",
  "Feature Engineering",
  "Model Evaluation",
  "Production Integration",
];
const highlights = [
  "Deployed a machine learning model that classified more than 1,000 customer feedback emails daily with over 90% accuracy.",
  "Handled data preprocessing and feature engineering for the classification model.",
  "Evaluated model performance and integrated the model into production.",
];

const stats = [
  {
    num: "1,000+",
    label: "Emails classified daily",
  },
  {
    num: "90%+",
    label: "Classification accuracy",
  },
];

function WateenTelecomExperience() {
  return (
    <section className="bg-surface-deep flex flex-col gap-8 px-6 sm:px-10 py-2 text-white">
      <header className="flex flex-col gap-5">
        <div className="flex items-center gap-4">
          <img
            src={experience.picture}
            alt={experience.company}
            className="w-14 h-14 object-cover rounded-xl shrink-0"
          />
          <div className="flex flex-col gap-1">
            <p className="text-white/80 text-lg">{experience.company}</p>
            <p className="text-white/50">{experience.date}</p>
          </div>
        </div>
        <h1 className="text-3xl sm:text-4xl font-bold">{experience.title}</h1>
        <p className="text-white/60 text-lg leading-relaxed">
          {experience.summary}
        </p>
        <SmallPills items={skills} />
      </header>

      <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="glass-flat rounded-xl p-5 flex flex-col gap-2"
          >
            <dt className="text-white/60 text-sm">{stat.label}</dt>
            <dd className="text-3xl font-bold">{stat.num}</dd>
          </div>
        ))}
      </dl>

      <section className="flex flex-col gap-3">
        <h2 className="text-2xl font-semibold">Overview</h2>
        <p className="text-white/70 leading-relaxed">
          {
            "At Wateen Telecom, I worked on customer feedback email classification from preprocessing through production integration. The deployed machine learning model classified more than 1,000 emails per day with over 90% accuracy."
          }
        </p>
      </section>

      <section className="glass-flat rounded-xl p-5 sm:p-6 flex flex-col gap-4">
        <h2 className="text-2xl font-semibold">Key contributions</h2>
        <ul className="list-disc pl-5 space-y-3 text-white/70 leading-relaxed">
          {highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
      </section>

      <MoreExperiences currentId={experience.id} />
      <Link
        to="/experiences"
        className="text-lg text-white/60 hover:text-white self-end hover:underline"
      >
        See all experiences →
      </Link>
    </section>
  );
}

export default WateenTelecomExperience;
