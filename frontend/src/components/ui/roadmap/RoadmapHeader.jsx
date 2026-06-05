import { motion } from "motion/react";

function getDifficultyColor(difficulty) {
  if (difficulty.startsWith("Beginner")) return "bg-emerald-500/20 text-emerald-400 border-emerald-500/30";
  if (difficulty.startsWith("Intermediate") || difficulty.startsWith("Intermediate")) return "bg-amber-500/20 text-amber-400 border-amber-500/30";
  if (difficulty.startsWith("Advanced") || difficulty.startsWith("Advanced")) return "bg-orange-500/20 text-orange-400 border-orange-500/30";
  if (difficulty.startsWith("Expert")) return "bg-red-500/20 text-red-400 border-red-500/30";
  return "bg-base-300/50 text-base-content/70 border-base-content/10";
}

export default function RoadmapHeader({ roadmap }) {
  return (
    <section className="relative overflow-hidden border-b border-base-content/10">
      <div className="absolute inset-0 bg-linear-to-br from-transparent via-primary/[0.03] to-secondary/[0.03] pointer-events-none" />
      <div className="page-container py-16 md:py-24 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl"
        >
          <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-linear-to-br ${roadmap.color} text-white shadow-lg mb-6`}>
            {roadmap.icon}
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl text-base-content">
            {roadmap.title}{" "}
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Roadmap
            </span>
          </h1>
          <p className="mt-4 text-lg text-base-content/70 leading-relaxed max-w-2xl">
            {roadmap.description}
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-medium ${getDifficultyColor(roadmap.difficulty)}`}>
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
              </svg>
              {roadmap.difficulty}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-base-content/10 bg-base-300/30 px-3 py-1 text-xs font-medium text-base-content/70">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
              {roadmap.estimatedTime}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-full border border-base-content/10 bg-base-300/30 px-3 py-1 text-xs font-medium text-base-content/70">
              <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5z" />
                <line x1="8" y1="2" x2="8" y2="22" />
                <line x1="12" y1="2" x2="12" y2="22" />
                <line x1="16" y1="2" x2="16" y2="22" />
              </svg>
              {roadmap.sections.reduce((acc, s) => acc + s.nodes.length, 0)} topics
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
