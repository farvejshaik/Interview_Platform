import { useState, useCallback } from "react";
import { motion } from "motion/react";
import RoadmapNode from "./RoadmapNode";

export default function RoadmapTree({ sections, onNodeClick }) {
  const [expandedSections, setExpandedSections] = useState(
    () => sections.map((_, i) => i === 0)
  );

  const toggleSection = useCallback((index) => {
    setExpandedSections((prev) => {
      const next = [...prev];
      next[index] = !next[index];
      return next;
    });
  }, []);

  return (
    <div className="space-y-6">
      {sections.map((section, sectionIndex) => {
        const isExpanded = expandedSections[sectionIndex] ?? true;

        return (
          <div key={section.id}>
            {/* Section header */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: sectionIndex * 0.1 }}
              onClick={() => toggleSection(sectionIndex)}
              className="group flex w-full items-center gap-3 sm:gap-4 rounded-xl border border-base-content/10 bg-base-100/50 p-4 sm:p-5 text-left transition-all duration-200 hover:border-primary/30 hover:bg-base-100/80"
            >
              <div className="flex h-9 w-9 sm:h-10 sm:w-10 shrink-0 items-center justify-center rounded-xl bg-linear-to-br from-primary/20 to-secondary/20 text-primary">
                <span className="text-xs sm:text-sm font-bold">{String(sectionIndex + 1).padStart(2, "0")}</span>
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-base sm:text-lg font-semibold text-base-content group-hover:text-primary transition-colors">
                  {section.title}
                </h3>
                <p className="mt-0.5 text-xs sm:text-sm text-base-content/50 truncate">{section.description}</p>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 shrink-0">
                <span className="text-xs text-base-content/40 hidden sm:inline">{section.nodes.length} topics</span>
                <motion.svg
                  animate={{ rotate: isExpanded ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-4 w-4 sm:h-5 sm:w-5 text-base-content/30 group-hover:text-primary/50 transition-colors"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </motion.svg>
              </div>
            </motion.button>

            {/* Expandable content */}
            <motion.div
              initial={false}
              animate={{
                height: isExpanded ? "auto" : 0,
                opacity: isExpanded ? 1 : 0,
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              {/* Desktop: tree with proper branch connectors */}
              <div className="relative pl-8 sm:pl-10 mt-2 hidden md:block">
                <div className="absolute left-[19px] sm:left-[23px] top-0 bottom-0 w-px bg-linear-to-b from-primary/20 via-base-content/10 to-transparent" />
                <div className="space-y-1">
                  {section.nodes.map((node, nodeIndex) => (
                    <div key={node.id} className="relative flex items-start">
                      {/* Horizontal branch connector */}
                      <div className="absolute left-0 top-[19px] w-[18px] sm:w-[22px] h-px bg-base-content/20" />
                      {/* Node dot */}
                      <div className="relative z-10 flex items-center justify-center w-[18px] sm:w-[22px] shrink-0">
                        <div className="h-3 w-3 rounded-full border-2 border-base-content/20 bg-base-200 transition-all duration-200 group-hover:border-primary/50 group-hover:bg-primary/10" />
                      </div>
                      {/* Content card */}
                      <div className="flex-1 min-w-0 -ml-[18px] sm:-ml-[22px] pl-[18px] sm:pl-[22px]">
                        <RoadmapNode
                          node={node}
                          nodeIndex={nodeIndex}
                          onNodeClick={onNodeClick}
                          isMobile={false}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile: accordion cards */}
              <div className="mt-2 space-y-2 md:hidden">
                {isExpanded && section.nodes.map((node, nodeIndex) => (
                  <RoadmapNode
                    key={node.id}
                    node={node}
                    nodeIndex={nodeIndex}
                    onNodeClick={onNodeClick}
                    isMobile={true}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}
