import { Link } from "react-router";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";
import { motion } from "motion/react";

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

const ROADMAPS = [
  {
    slug: "javascript",
    title: "JavaScript",
    description: "Master JavaScript — the world's most versatile programming language. From fundamentals to advanced concepts.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M12 3a9 9 0 0 1 9 9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
      </svg>
    ),
    color: "from-amber-400 to-yellow-500",
    topics: ["Variables", "Functions", "Closures", "Promises", "Event Loop", "ES6+"],
    steps: 42,
  },
  {
    slug: "react",
    title: "React",
    description: "Master React — the most popular frontend library for building modern user interfaces and single-page applications.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="2.5" />
        <path d="M12 2.5c-4 0-7.5 2-9.5 5" />
        <path d="M12 2.5c4 0 7.5 2 9.5 5" />
        <path d="M2.5 12c0 4 2 7.5 5 9.5" />
        <path d="M21.5 12c0 4-2 7.5-5 9.5" />
      </svg>
    ),
    color: "from-sky-400 to-cyan-500",
    topics: ["JSX", "Components", "Hooks", "State", "Next.js", "TypeScript"],
    steps: 56,
  },
  {
    slug: "dsa",
    title: "Data Structures & Algorithms",
    description: "Master DSA fundamentals for technical interviews at top tech companies — from arrays to advanced graph algorithms.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    color: "from-violet-400 to-purple-500",
    topics: ["Arrays", "Trees", "Graphs", "DP", "Sorting", "Recursion"],
    steps: 72,
  },
  {
    slug: "frontend",
    title: "Frontend Development",
    description: "Master modern frontend technologies — from HTML/CSS fundamentals to advanced React, TypeScript, and build tools.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12a9 9 0 1 1-9-9" />
        <path d="M12 3a9 9 0 0 1 9 9" />
        <path d="M12 3v18" />
        <path d="M3 12h18" />
        <path d="M12 3c1.5 1.5 2.5 4 2.5 9s-1 7.5-2.5 9" />
        <path d="M12 3c-1.5 1.5-2.5 4-2.5 9s1 7.5 2.5 9" />
      </svg>
    ),
    color: "from-sky-500 to-blue-600",
    topics: ["HTML/CSS", "JavaScript", "React", "TypeScript", "Tailwind CSS", "Next.js"],
    steps: 42,
  },
  {
    slug: "backend",
    title: "Backend Development",
    description: "Build scalable server-side applications with Node.js, Python, databases, and RESTful API design patterns.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    color: "from-emerald-500 to-teal-600",
    topics: ["Node.js", "Python", "PostgreSQL", "MongoDB", "REST APIs", "GraphQL"],
    steps: 38,
  },
  {
    slug: "fullstack",
    title: "Full Stack Development",
    description: "Combine frontend and backend skills to build complete web applications from database to deployment.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
    color: "from-violet-500 to-purple-600",
    topics: ["React + Next.js", "Node.js + Express", "Databases", "Docker", "CI/CD", "Cloud Deployment"],
    steps: 56,
  },
  {
    slug: "devops",
    title: "DevOps & Cloud",
    description: "Learn infrastructure automation, containerization, CI/CD pipelines, and cloud platforms like AWS and GCP.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.5a3.5 3.5 0 0 1 0-7h.5A5 5 0 0 1 22 8v2" />
        <path d="M6 14h1.5a3.5 3.5 0 0 1 0 7H7A5 5 0 0 1 2 16v-2" />
        <path d="M12 2v20" />
      </svg>
    ),
    color: "from-orange-500 to-red-600",
    topics: ["Docker", "Kubernetes", "AWS", "CI/CD", "Terraform", "Linux"],
    steps: 45,
  },
  {
    slug: "system-design",
    title: "System Design",
    description: "Design scalable distributed systems, microservices, and large-scale architectures for technical interviews.",
    icon: (
      <svg className="h-8 w-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v4m0 12v4m-10-10h4m12 0h4" />
      </svg>
    ),
    color: "from-amber-500 to-yellow-600",
    topics: ["Load Balancing", "Caching", "Database Scaling", "Microservices", "Message Queues", "CAP Theorem"],
    steps: 35,
  },
];

function RoadmapsPage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <section className="section-y">
          <div className="page-container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Learning Roadmaps
                </span>
              </h1>
              <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
                Structured learning paths to guide you from beginner to job-ready. Pick a domain and start your journey.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="page-container">
            <div className="mx-auto max-w-7xl">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {ROADMAPS.map((roadmap, index) => (
                  <motion.div
                    key={roadmap.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <Link
                      to={roadmap.slug ? `/roadmaps/${roadmap.slug}` : "#"}
                      className="group relative flex flex-col rounded-2xl border border-base-content/10 bg-base-100 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg h-full"
                    >
                      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-linear-to-br ${roadmap.color} text-white shadow-sm`}>
                        {roadmap.icon}
                      </div>
                      <h3 className="mt-4 text-lg font-semibold text-base-content">
                        {roadmap.title}
                      </h3>
                      <p className="mt-2 flex-1 text-sm text-base-content/70 leading-relaxed">
                        {roadmap.description}
                      </p>
                      <div className="mt-4 flex flex-wrap gap-1.5">
                        {roadmap.topics.slice(0, 4).map((topic) => (
                          <span
                            key={topic}
                            className="rounded-md bg-base-200 px-2 py-0.5 text-xs font-medium text-base-content/70"
                          >
                            {topic}
                          </span>
                        ))}
                        {roadmap.topics.length > 4 && (
                          <span className="rounded-md bg-base-200 px-2 py-0.5 text-xs font-medium text-base-content/50">
                            +{roadmap.topics.length - 4}
                          </span>
                        )}
                      </div>
                      <div className="mt-4 flex items-center justify-between border-t border-base-content/10 pt-4">
                        <span className="text-xs text-base-content/50">{roadmap.steps} steps</span>
                        <span className="text-xs font-medium text-primary opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                          View Roadmap &rarr;
                        </span>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
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
    </div>
  );
}

export default RoadmapsPage;
