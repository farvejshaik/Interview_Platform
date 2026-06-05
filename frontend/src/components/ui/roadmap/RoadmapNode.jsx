import { motion } from "motion/react";

const difficultyColors = {
  Beginner: "border-emerald-500/30 bg-emerald-500/10 text-emerald-400",
  Intermediate: "border-amber-500/30 bg-amber-500/10 text-amber-400",
  Advanced: "border-orange-500/30 bg-orange-500/10 text-orange-400",
  Expert: "border-red-500/30 bg-red-500/10 text-red-400",
};

export default function RoadmapNode({ node, nodeIndex, onNodeClick, isMobile }) {
  if (isMobile) {
    return (
      <button
        onClick={() => onNodeClick(node)}
        className="group w-full text-left"
      >
        <div className="flex items-start gap-3 rounded-xl border border-base-content/10 bg-base-100/50 p-3 sm:p-4 transition-all duration-200 hover:border-primary/30 hover:bg-primary/[0.03]">
          <span className={`mt-0.5 flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full border text-[10px] font-bold ${difficultyColors[node.difficulty] || difficultyColors.Beginner}`}>
            {nodeIndex + 1}
          </span>
          <div className="min-w-0 flex-1">
            <p className="text-sm font-medium text-base-content group-hover:text-primary transition-colors">{node.title}</p>
            <p className="mt-0.5 text-xs text-base-content/50 line-clamp-1">{node.description}</p>
          </div>
          <svg className="h-4 w-4 mt-1 shrink-0 text-base-content/20 group-hover:text-primary/50 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </div>
      </button>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, x: -10 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: nodeIndex * 0.05 }}
    >
      <button
        onClick={() => onNodeClick(node)}
        className="group w-full text-left"
      >
        <div className="rounded-xl border border-base-content/5 bg-base-100/30 px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-200 hover:border-primary/20 hover:bg-base-100/60 hover:shadow-sm">
          <div className="flex items-center justify-between gap-3">
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-sm text-base-content group-hover:text-primary transition-colors">{node.title}</span>
                <span className={`inline-flex items-center rounded-full border px-1.5 sm:px-2 py-0.5 text-[10px] font-medium ${difficultyColors[node.difficulty] || difficultyColors.Beginner}`}>
                  {node.difficulty}
                </span>
              </div>
              <p className="mt-0.5 text-xs text-base-content/50 line-clamp-1">{node.description}</p>
            </div>
            <svg className="h-4 w-4 shrink-0 text-base-content/20 group-hover:text-primary/50 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </div>
        </div>
      </button>
    </motion.div>
  );
}
