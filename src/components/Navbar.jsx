import { GraduationCap, Rocket } from "lucide-react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/80 border-b border-slate-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-purple-500 to-fuchsia-500 grid place-content-center text-white">
            <GraduationCap size={18} />
          </div>
          <span className="font-semibold tracking-tight text-slate-800">SMART</span>
          <span className="ml-2 text-xs text-slate-500">Student Mentorship & Roadmap Trainer</span>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-600">
          <a href="#courses" className="hover:text-slate-900 transition">Courses</a>
          <a href="#skill-trainer" className="hover:text-slate-900 transition">Skill Trainer</a>
          <a href="#scholarships" className="hover:text-slate-900 transition">Scholarships</a>
          <a href="#internships" className="hover:text-slate-900 transition">Internships</a>
        </nav>
        <button className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-fuchsia-600 text-white px-4 py-2 text-sm shadow hover:opacity-95 active:opacity-90">
          <Rocket size={16} />
          Get Started
        </button>
      </div>
    </header>
  );
}
