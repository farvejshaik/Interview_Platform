import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";
import { BLOG_POSTS, CATEGORIES } from "../data/blog";
import { ArrowRightIcon, ClockIcon, UserIcon, ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

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

function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [page, setPage] = useState(1);
  const POSTS_PER_PAGE = 6;

  const filtered = useMemo(() => {
    return activeCategory === "All"
      ? BLOG_POSTS
      : BLOG_POSTS.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE));
  const paginated = useMemo(() => {
    const start = (page - 1) * POSTS_PER_PAGE;
    return filtered.slice(start, start + POSTS_PER_PAGE);
  }, [filtered, page]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  useEffect(() => {
    setPage(1);
  }, [activeCategory]);

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <section className="section-y">
          <div className="page-container text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Blog & Resources
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-base-content/70">
              Tips, guides, and insights to help you succeed in your technical interviews.
            </p>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="page-container">
            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {["All", ...CATEGORIES].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`rounded-full px-5 py-2 text-sm font-medium transition-colors cursor-pointer ${
                    activeCategory === cat
                      ? "bg-primary text-primary-content"
                      : "border border-base-content/20 text-base-content/70 hover:text-base-content hover:bg-base-200"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <motion.div
              layout
              className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3"
            >
              {paginated.map((post, index) => (
                <motion.article
                  key={post.slug}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Link
                    to={`/blog/${post.slug}`}
                    className="group block h-full rounded-2xl border border-base-content/10 bg-base-100 p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                  >
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                      {post.category}
                    </span>
                    <h2 className="mt-4 text-lg font-semibold text-base-content group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-base-content/70 leading-relaxed flex-1">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center justify-between border-t border-base-content/10 pt-4 text-xs text-base-content/50">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="h-3 w-3" />
                        {post.readTime}
                      </span>
                      <span className="flex items-center gap-1">
                        {post.date}
                      </span>
                    </div>
                    <div className="mt-3 flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                      Read more <ArrowRightIcon className="h-4 w-4" />
                    </div>
                  </Link>
                </motion.article>
              ))}
            </motion.div>

            {totalPages > 1 && filtered.length > 0 && (
              <div className="flex items-center justify-center gap-2 mt-12">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page <= 1}
                  className="btn btn-ghost btn-sm btn-square disabled:opacity-30"
                >
                  <ChevronLeftIcon className="size-4" />
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button
                    key={p}
                    onClick={() => setPage(p)}
                    className={`btn btn-sm min-w-[36px] ${
                      p === page ? "btn-primary" : "btn-ghost"
                    }`}
                  >
                    {p}
                  </button>
                ))}
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page >= totalPages}
                  className="btn btn-ghost btn-sm btn-square disabled:opacity-30"
                >
                  <ChevronRightIcon className="size-4" />
                </button>
              </div>
            )}
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

export default BlogPage;
