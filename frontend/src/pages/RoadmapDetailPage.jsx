import { useState, useCallback } from "react";
import { useParams, Link } from "react-router";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";
import { motion } from "motion/react";
import { getRoadmap } from "../data/roadmaps";
import RoadmapHeader from "../components/ui/roadmap/RoadmapHeader";
import RoadmapTree from "../components/ui/roadmap/RoadmapTree";
import RoadmapModal from "../components/ui/roadmap/RoadmapModal";
import LearningPath from "../components/ui/roadmap/LearningPath";
import ResourcesSection from "../components/ui/roadmap/ResourcesSection";

function TwitterIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubIcon({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function RoadmapDetailPage() {
  const { slug } = useParams();
  const [selectedNode, setSelectedNode] = useState(null);

  const roadmap = getRoadmap(slug);

  const handleNodeClick = useCallback((node) => {
    setSelectedNode(node);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedNode(null);
  }, []);

  if (!roadmap) {
    return (
      <div className="min-h-screen bg-base-200 text-base-content flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-base-300/50 mb-6">
            <svg className="w-8 h-8 text-base-content/40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="9" />
              <line x1="12" y1="8" x2="12" y2="12" />
              <line x1="12" y1="16" x2="12.01" y2="16" />
            </svg>
          </div>
          <h1 className="text-3xl font-bold text-base-content">Roadmap Not Found</h1>
          <p className="mt-3 text-base-content/60 leading-relaxed">The roadmap you're looking for doesn't exist or may be coming soon.</p>
          <Link to="/roadmaps" className="mt-6 inline-flex items-center rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-content hover:bg-primary/90 transition-colors">
            Browse All Roadmaps
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <RoadmapHeader roadmap={roadmap} />

        {roadmap.comingSoon ? (
          <section className="page-container py-16 md:py-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mx-auto max-w-lg text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
                <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 8v4l3 3" />
                  <circle cx="12" cy="12" r="9" />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-base-content mb-3">Coming Soon</h2>
              <p className="text-base text-base-content/60 leading-relaxed">
                We&apos;re building this roadmap. It will be available soon with a complete learning path, resources, and practice problems.
              </p>
              <Link to="/roadmaps" className="mt-8 inline-flex items-center rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-content hover:bg-primary/90 transition-colors">
                Browse Other Roadmaps
              </Link>
            </motion.div>
          </section>
        ) : (
          <div className="page-container py-8 md:py-12 lg:py-16">
            <div className="grid gap-8 xl:gap-10 lg:grid-cols-3">
              {/* Sidebar */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="lg:col-span-1 order-2 lg:order-1"
              >
                <div className="space-y-6 lg:sticky lg:top-24">
                  <LearningPath sections={roadmap.sections} />
                  <ResourcesSection resources={roadmap.resources} />
                </div>
              </motion.div>

              {/* Tree */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="lg:col-span-2 order-1 lg:order-2 min-w-0"
              >
                <RoadmapTree sections={roadmap.sections} onNodeClick={handleNodeClick} />
              </motion.div>
            </div>
          </div>
        )}
      </main>

      <Footer
        logo={<img src="/logo.png" alt="TalentForge" className="h-12 w-auto object-contain" style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 6px #8b5cf6)" }} />}
        brandName="TalentForge"
        socialLinks={[
          { icon: <TwitterIcon className="h-5 w-5" />, href: "https://x.com/FarvejFaru", label: "Twitter" },
          { icon: <GithubIcon className="h-5 w-5" />, href: "https://github.com/farvejshaik", label: "GitHub" },
        ]}
        mainLinks={[
          { href: "/features", label: "Features" },
          { href: "/pricing", label: "Pricing" },
          { href: "/roadmaps", label: "Roadmaps" },
          { href: "/about", label: "About" },
          { href: "/blog", label: "Blog" },
        ]}
        legalLinks={[
          { href: "/privacy", label: "Privacy" },
          { href: "/terms", label: "Terms" },
          { href: "/contact", label: "Contact" },
        ]}
        copyright={{ text: "© 2026 TalentForge", license: "All rights reserved" }}
      />

      <RoadmapModal node={selectedNode} onClose={handleCloseModal} />
    </div>
  );
}

export default RoadmapDetailPage;
