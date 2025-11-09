export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-600">
        <p>© {new Date().getFullYear()} SMART — Student Mentorship & Roadmap Trainer</p>
        <p className="text-slate-500">Made for Indian students. Learn, grow, and build your future.</p>
      </div>
    </footer>
  );
}
