import { useState } from 'react';

function SectionCard({ id, title, subtitle, placeholder, onSubmit }) {
  const [input, setInput] = useState("");
  return (
    <section id={id} className="scroll-mt-20">
      <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          </div>
        </div>
        <div className="mt-4 flex flex-col sm:flex-row gap-3">
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder={placeholder}
            className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            onClick={() => onSubmit?.(input)}
            className="rounded-lg bg-slate-900 text-white px-4 py-2 text-sm hover:bg-slate-800"
          >
            Generate with AI
          </button>
        </div>
        <div className="mt-4 rounded-lg bg-slate-50 p-4 text-sm text-slate-700">
          AI results will appear here. Connect to backend LLM APIs next.
        </div>
      </div>
    </section>
  );
}

export default function Sections() {
  return (
    <section className="py-12 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid gap-6">
        <SectionCard
          id="courses"
          title="Course Recommendation"
          subtitle="Get the best‑fit course & specialization based on your interests and education level."
          placeholder="e.g., Interest: Cybersecurity, Level: B.Tech"
          onSubmit={(val) => console.log('Course input:', val)}
        />
        <SectionCard
          id="skill-trainer"
          title="Skill Trainer"
          subtitle="Generate a day‑by‑day learning roadmap with Indian educator videos and practice links."
          placeholder="e.g., Skill: Python, Duration: 30 days, Level: B.Sc"
          onSubmit={(val) => console.log('Skill input:', val)}
        />
        <SectionCard
          id="scholarships"
          title="Scholarship Finder"
          subtitle="Find scholarships in India by course type, category, and academic profile."
          placeholder="e.g., Degree: B.Com, Category: OBC, CGPA: 8.0"
          onSubmit={(val) => console.log('Scholarship input:', val)}
        />
        <SectionCard
          id="internships"
          title="Internships & Projects"
          subtitle="Discover internships and project ideas with step‑by‑step roadmaps."
          placeholder="e.g., Skills: Web Dev + React, Preference: Remote"
          onSubmit={(val) => console.log('Internships input:', val)}
        />
      </div>
    </section>
  );
}
