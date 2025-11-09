import { Compass, BookOpen, ScrollText, Briefcase } from "lucide-react";

const features = [
  {
    id: "courses",
    icon: Compass,
    title: "Course Recommendation",
    desc: "Get AI-guided course & specialization suggestions aligned with your interests and long‑term goals.",
    href: "#courses",
    color: "from-sky-500 to-indigo-600",
  },
  {
    id: "skill-trainer",
    icon: BookOpen,
    title: "Skill Trainer",
    desc: "Personalized day-by-day learning plans with Indian educator videos and practice links.",
    href: "#skill-trainer",
    color: "from-emerald-500 to-teal-600",
  },
  {
    id: "scholarships",
    icon: ScrollText,
    title: "Scholarship Finder",
    desc: "Discover scholarships in India by degree, category, income, and academic performance.",
    href: "#scholarships",
    color: "from-fuchsia-500 to-purple-600",
  },
  {
    id: "internships",
    icon: Briefcase,
    title: "Internships & Projects",
    desc: "Find internships and AI‑generated project ideas with step‑by‑step build roadmaps.",
    href: "#internships",
    color: "from-amber-500 to-orange-600",
  },
];

export default function FeatureCards() {
  return (
    <section className="py-12 bg-white" id="features">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({ id, icon: Icon, title, desc, href, color }) => (
            <a
              key={id}
              href={href}
              className="group relative rounded-2xl border border-slate-200 bg-white p-6 hover:shadow-lg transition"
            >
              <div className={`h-10 w-10 rounded-lg bg-gradient-to-br ${color} text-white grid place-content-center mb-4`}>
                <Icon size={18} />
              </div>
              <h3 className="font-semibold text-slate-900 group-hover:underline decoration-2 underline-offset-4">
                {title}
              </h3>
              <p className="mt-2 text-sm text-slate-600">{desc}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
