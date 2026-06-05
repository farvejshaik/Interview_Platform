import { motion } from "motion/react";

export default function LearningPath({ sections }) {
  const totalTopics = sections.reduce((acc, s) => acc + s.nodes.length, 0);
  const totalSections = sections.length;
  const completed = 0;

  return (
    <section className="rounded-2xl border border-base-content/10 bg-base-100/50 p-6 md:p-8 backdrop-blur-sm">
      <h2 className="text-xl font-bold text-base-content">Your Learning Path</h2>
      <p className="mt-1 text-sm text-base-content/50">Track your progress through this roadmap</p>

      {/* Static progress bar */}
      <div className="mt-6">
        <div className="flex items-center justify-between text-sm mb-2">
          <span className="text-base-content/70 font-medium">Progress</span>
          <span className="text-base-content/50">{completed} / {totalTopics} topics</span>
        </div>
        <div className="h-2.5 rounded-full bg-base-300/50 overflow-hidden">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: `${(completed / totalTopics) * 100}%` }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="h-full rounded-full bg-linear-to-r from-primary via-secondary to-accent"
          />
        </div>
      </div>

      {/* Stats grid */}
      <div className="mt-8 grid grid-cols-2 gap-3">
        {[
          { label: "Sections", value: totalSections, icon: "📂" },
          { label: "Topics", value: totalTopics, icon: "📝" },
          { label: "Beginner", value: sections.reduce((a, s) => a + s.nodes.filter((n) => n.difficulty === "Beginner").length, 0), icon: "🌱" },
          { label: "Advanced", value: sections.reduce((a, s) => a + s.nodes.filter((n) => n.difficulty === "Advanced" || n.difficulty === "Expert").length, 0), icon: "🚀" },
        ].map((stat) => (
          <div key={stat.label} className="rounded-xl border border-base-content/10 bg-base-300/30 p-3 text-center">
            <span className="text-lg">{stat.icon}</span>
            <p className="mt-1 text-xl font-bold text-base-content">{stat.value}</p>
            <p className="text-xs text-base-content/50">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
