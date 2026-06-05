import { motion } from "motion/react";

const typeConfig = {
  docs: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5A2.5 2.5 0 0 1 4 19.5z" />
        <polyline points="8 2 8 8 11 6 14 8 14 2" />
      </svg>
    ),
    gradient: "from-blue-500/20 to-indigo-500/20 text-blue-400 border-blue-500/20",
  },
  video: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="23 7 16 12 23 17 23 7" />
        <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
      </svg>
    ),
    gradient: "from-red-500/20 to-rose-500/20 text-red-400 border-red-500/20",
  },
  article: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
      </svg>
    ),
    gradient: "from-emerald-500/20 to-teal-500/20 text-emerald-400 border-emerald-500/20",
  },
  practice: {
    icon: (
      <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    gradient: "from-violet-500/20 to-purple-500/20 text-violet-400 border-violet-500/20",
  },
};

export default function ResourcesSection({ resources }) {
  return (
    <section className="rounded-2xl border border-base-content/10 bg-base-100/50 p-5 md:p-6 backdrop-blur-sm">
      <h2 className="text-lg font-bold text-base-content">Recommended Resources</h2>
      <p className="mt-1 text-xs text-base-content/50">Additional learning materials for this roadmap</p>

      {resources && resources.length > 0 ? (
        <div className="mt-5 grid gap-2.5">
          {resources.map((resource, i) => {
            const config = typeConfig[resource.type] || typeConfig.article;
            return (
              <motion.a
                key={i}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                href={resource.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex items-center gap-3 rounded-xl border p-3 transition-all duration-200 hover:shadow-sm ${config.gradient}`}
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg border border-inherit bg-base-300/50">
                  {config.icon}
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium text-base-content group-hover:text-primary transition-colors truncate">{resource.title}</p>
                  <p className="text-xs text-base-content/50 line-clamp-1">{resource.description}</p>
                </div>
                <svg className="h-3.5 w-3.5 shrink-0 text-base-content/20 group-hover:text-primary/50 transition-colors" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
              </motion.a>
            );
          })}
        </div>
      ) : (
        <p className="mt-5 text-sm text-base-content/40">Resources coming soon.</p>
      )}
    </section>
  );
}
