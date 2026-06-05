import { motion, AnimatePresence } from "motion/react";

const difficultyColors = {
  Beginner: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  Intermediate: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Advanced: "border-orange-500/30 bg-orange-500/10 text-orange-400",
  Expert: "border-red-500/30 bg-red-500/10 text-red-400",
};

const resourceIcons = {
  video: "▶",
  docs: "📖",
  article: "📝",
  practice: "💻",
};

export default function RoadmapModal({ node, onClose }) {
  if (!node) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-start justify-center overflow-y-auto bg-black/60 backdrop-blur-sm p-4 pt-12 md:pt-24"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 40, scale: 0.96 }}
          transition={{ type: "spring", damping: 30, stiffness: 300 }}
          onClick={(e) => e.stopPropagation()}
          className="relative w-full max-w-2xl rounded-2xl border border-base-content/10 bg-base-100/95 backdrop-blur-xl shadow-2xl overflow-hidden"
        >
          <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-primary via-secondary to-accent" />

          <div className="p-6 md:p-8">
            <div className="flex items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-3 mb-1">
                  <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-medium ${difficultyColors[node.difficulty] || difficultyColors.Beginner}`}>
                    {node.difficulty}
                  </span>
                  <span className="inline-flex items-center gap-1 text-xs text-base-content/50">
                    <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                    {node.time}
                  </span>
                </div>
                <h2 className="text-2xl font-bold text-base-content mt-2">{node.title}</h2>
              </div>
              <button
                onClick={onClose}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-base-content/10 bg-base-300/50 text-base-content/50 hover:text-base-content hover:bg-base-300 transition-colors"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>

            <p className="mt-4 text-base text-base-content/70 leading-relaxed">
              {node.description}
            </p>

            <div className="mt-6 rounded-xl border border-base-content/10 bg-base-300/30 p-4">
              <div className="flex items-start gap-3">
                <svg className="h-5 w-5 mt-0.5 shrink-0 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
                <div>
                  <p className="text-sm font-medium text-base-content">Why It Matters</p>
                  <p className="mt-1 text-sm text-base-content/60 leading-relaxed">{node.whyMatters}</p>
                </div>
              </div>
            </div>

            {node.prerequisites && node.prerequisites.length > 0 && (
              <div className="mt-5">
                <p className="text-sm font-medium text-base-content mb-2">Prerequisites</p>
                <div className="flex flex-wrap gap-2">
                  {node.prerequisites.map((prereq) => (
                    <span key={prereq} className="inline-flex items-center gap-1 rounded-lg border border-base-content/10 bg-base-300/50 px-2.5 py-1 text-xs text-base-content/70">
                      <svg className="h-3 w-3 text-base-content/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                      {prereq}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {node.objectives && node.objectives.length > 0 && (
              <div className="mt-5">
                <p className="text-sm font-medium text-base-content mb-2">Learning Objectives</p>
                <ul className="space-y-1.5">
                  {node.objectives.map((obj, i) => (
                    <li key={i} className="flex items-start gap-2 text-sm text-base-content/70">
                      <svg className="h-4 w-4 mt-0.5 shrink-0 text-emerald-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {node.resources && node.resources.length > 0 && (
              <div className="mt-6 pt-6 border-t border-base-content/10">
                <p className="text-sm font-medium text-base-content mb-3">Resources</p>
                <div className="grid grid-cols-2 gap-2">
                  {node.resources.map((resource, i) => (
                    <a
                      key={i}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-xl border border-base-content/10 bg-base-300/30 px-4 py-2.5 text-sm font-medium text-base-content/70 hover:text-base-content hover:border-primary/30 hover:bg-primary/5 transition-all duration-200"
                    >
                      <span className="text-base">{resource.icon}</span>
                      {resource.label}
                    </a>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
