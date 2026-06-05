import { useState, useEffect, useRef, useMemo } from "react";
import hljs from "highlight.js";
import "../styles/hljs-github-dark.css";
import { useParams, Link } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";
import { BLOG_POSTS } from "../data/blog";
import {
  ArrowLeftIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ClockIcon,
  UserIcon,
  CalendarIcon,
  BookOpenIcon,
  ListIcon,
  Share2Icon,
  CheckIcon,
} from "lucide-react";

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

function extractHeadings(content) {
  const headings = [];
  const lines = content.split("\n");
  for (const line of lines) {
    const h2 = line.match(/^## (.+)/);
    const h3 = line.match(/^### (.+)/);
    if (h2) {
      headings.push({ level: 2, text: h2[1], id: h2[1].toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") });
    } else if (h3) {
      headings.push({ level: 3, text: h3[1], id: h3[1].toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "") });
    }
  }
  return headings;
}

function renderContent(text) {
  const lines = text.split("\n");
  let html = "";
  let inCodeBlock = false;
  let codeContent = "";
  let codeLang = "";
  let orderedListOpen = false;
  let inBlockquote = false;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];

    if (line.startsWith("```")) {
      if (inCodeBlock) {
        const escaped = codeContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
        html += `<div class="code-block relative my-8 rounded-2xl border border-base-content/10 bg-[#1e1e2e] overflow-hidden shadow-lg" data-code="${escapeAttr(codeContent)}"><div class="flex items-center justify-between bg-[#181825] px-4 py-2 text-xs border-b border-white/5"><span class="font-mono font-medium text-[#89b4fa]">${codeLang || "code"}</span><button class="copy-btn inline-flex items-center gap-1.5 text-white/40 hover:text-white/80 transition-colors cursor-pointer" data-copied="false"><svg class="copy-icon w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg><span class="copy-text">Copy</span></button></div><pre class="overflow-x-auto !bg-transparent !p-4 text-sm leading-relaxed !my-0"><code class="language-${codeLang} !bg-transparent !p-0">${escaped}</code></pre></div>`;
        codeContent = "";
        codeLang = "";
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
        codeLang = line.slice(3).trim();
      }
      continue;
    }

    if (inCodeBlock) {
      codeContent += (codeContent ? "\n" : "") + line;
      continue;
    }

    if (line.match(/^#{1,3} /)) {
      const level = line.indexOf(" ");
      const text = line.slice(level + 1);
      const id = text.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "");
      if (level === 2) {
        html += `<h2 id="${id}" class="group mt-12 mb-5 text-3xl font-bold text-base-content scroll-mt-24 flex items-center gap-3"><span class="inline-block w-1.5 h-8 rounded-full bg-gradient-to-b from-primary to-secondary shrink-0"></span>${processInline(text)}</h2>`;
      } else if (level === 3) {
        html += `<h3 id="${id}" class="mt-8 mb-3 text-xl font-semibold text-base-content scroll-mt-24 pl-3 border-l-2 border-primary/40">${processInline(text)}</h3>`;
      } else {
        html += `<h1 id="${id}" class="mt-12 mb-6 text-4xl font-bold text-base-content scroll-mt-24">${processInline(text)}</h1>`;
      }
      continue;
    }

    if (line.startsWith("> ")) {
      const content = line.slice(2);
      if (!inBlockquote) {
        inBlockquote = true;
        html += '<blockquote class="my-6 border-l-4 border-primary/50 bg-primary/5 pl-5 pr-4 py-4 rounded-r-xl text-base-content/80">';
      }
      html += `<p class="mb-2 leading-relaxed">${processInline(content)}</p>`;
      continue;
    } else if (inBlockquote) {
      html += "</blockquote>";
      inBlockquote = false;
    }

    if (line.match(/^---+$/)) {
      html += '<hr class="my-10 border-t border-base-content/10" />';
      continue;
    }

    if (line.startsWith("- **")) {
      const match = line.match(/- \*\*(.+?)\*\*(.*)/);
      if (match) {
        html += `<li class="ml-6 list-disc text-base-content/80 mb-2 marker:text-primary"><strong class="text-base-content">${match[1]}</strong>${match[2] || ""}</li>`;
      } else {
        html += `<li class="ml-6 list-disc text-base-content/80 mb-2 marker:text-primary">${line.slice(2)}</li>`;
      }
    } else if (line.startsWith("- ")) {
      html += `<li class="ml-6 list-disc text-base-content/80 mb-2 marker:text-primary">${line.slice(2)}</li>`;
    } else if (line.match(/^\d+\. /)) {
      if (!orderedListOpen) {
        html += '<ol class="list-decimal pl-6 space-y-2 mb-6 text-base-content/80 marker:text-primary">';
        orderedListOpen = true;
      }
      const match = line.match(/^\d+\.\s+(.*)/);
      if (match) {
        html += `<li>${match[1]}</li>`;
      }
    } else {
      if (orderedListOpen) {
        html += "</ol>";
        orderedListOpen = false;
      }

      if (line.startsWith("| ")) {
        if (line.includes("---")) continue;
        const cells = line.split("|").filter(Boolean).map((c) => c.trim());
        const isHeader = line.startsWith("| **");
        if (!html.includes("<table")) {
          html += '<div class="overflow-x-auto my-6 rounded-2xl border border-base-content/10"><table class="w-full text-left text-sm">';
          if (isHeader) {
            html += "<thead><tr>";
            for (let ci = 0; ci < cells.length; ci++) {
              html += `<th class="bg-base-300/40 px-4 py-3 font-semibold text-base-content border-b border-base-content/10">${cells[ci].replace(/\*\*/g, "")}</th>`;
            }
            html += "</tr></thead><tbody>";
          }
        } else if (isHeader && html.includes("<tbody>")) {
          continue;
        } else {
          html += "<tr>";
          for (let ci = 0; ci < cells.length; ci++) {
            html += `<td class="px-4 py-2.5 border-b border-base-content/5 text-base-content/80${ci % 2 === 0 ? " bg-base-300/10" : ""}">${cells[ci].replace(/\*\*/g, "")}</td>`;
          }
          html += "</tr>";
        }
        continue;
      }

      if (line.trim() === "") {
        if (html.includes("<table") && !html.includes("</table>") && !line.startsWith("|")) {
          html += "</tbody></table></div>";
        }
        html += '</p><p class="mb-5 text-base leading-7 text-base-content/80">';
        continue;
      }

      if (!html.endsWith("</p>") && !html.endsWith(">")) {
        html += '<p class="mb-5 text-base leading-7 text-base-content/80">';
      }

      let processed = processInline(line);

      if (html.endsWith('"text-base leading-7 text-base-content/80">')) {
        html += processed;
      } else {
        html += processed + " ";
      }
    }
  }

  if (inCodeBlock) {
    const escaped = codeContent.replace(/</g, "&lt;").replace(/>/g, "&gt;");
    html += `<div class="code-block relative my-8 rounded-2xl border border-base-content/10 bg-[#1e1e2e] overflow-hidden shadow-lg"><pre class="overflow-x-auto !bg-transparent !p-4 text-sm leading-relaxed !my-0"><code class="!bg-transparent !p-0">${escaped}</code></pre></div>`;
  }
  if (orderedListOpen) html += "</ol>";
  if (inBlockquote) html += "</blockquote>";
  if (html.includes("<table") && !html.includes("</table>")) {
    html += "</tbody></table></div>";
  }

  return html;
}

function escapeAttr(str) {
  return str.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function processInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, "<strong class='text-base-content font-semibold'>$1</strong>")
    .replace(/`(.+?)`/g, "<code class='rounded-md bg-base-300/70 px-1.5 py-0.5 text-sm font-mono text-primary before:content-[] after:content-[] ring-1 ring-base-content/10'>$1</code>")
    .replace(/\[(.+?)\]\((.+?)\)/g, "<a href='$2' class='text-primary hover:text-primary/80 underline underline-offset-2 decoration-primary/30 hover:decoration-primary/60 transition-colors' target='_blank' rel='noopener noreferrer'>$1</a>");
}

function TableOfContents({ headings, activeId, onHeadingClick, isOpen, onToggle }) {
  return (
    <>
      <button
        onClick={onToggle}
        className="fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-content shadow-lg hover:bg-primary/90 transition-colors lg:hidden cursor-pointer"
        aria-label="Table of contents"
      >
        <ListIcon className="h-5 w-5" />
      </button>

      <aside className={`${isOpen ? "fixed inset-0 z-40 bg-base-200/95 backdrop-blur-sm lg:relative lg:inset-auto lg:bg-transparent lg:backdrop-blur-none" : "hidden"} lg:block`}>
        <div className={`${isOpen ? "fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 max-h-[70vh] overflow-y-auto rounded-2xl border border-base-content/10 bg-base-100 p-6 shadow-2xl" : ""} lg:w-auto lg:max-h-[calc(100vh-8rem)] lg:overflow-y-auto lg:border-0 lg:bg-transparent lg:p-0 lg:shadow-none`}>
          <div className="flex items-center justify-between mb-4 lg:mb-5">
            <h3 className="flex items-center gap-2 text-sm font-semibold text-base-content uppercase tracking-wider">
              <BookOpenIcon className="h-4 w-4 text-primary" />
              On this page
            </h3>
            <button onClick={onToggle} className="lg:hidden text-base-content/50 hover:text-base-content cursor-pointer">
              ✕
            </button>
          </div>
          <nav className="space-y-0.5">
            {headings.map((h) => (
              <button
                key={h.id}
                onClick={() => { onHeadingClick(h.id); if (onToggle && window.innerWidth < 1024) onToggle(); }}
                className={`block w-full text-left rounded-lg px-3 py-2 text-sm transition-all duration-200 cursor-pointer ${
                  activeId === h.id
                    ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                    : "text-base-content/60 hover:text-base-content hover:bg-base-200/50 border-l-2 border-transparent"
                } ${h.level === 3 ? "pl-8" : ""}`}
              >
                {h.text}
              </button>
            ))}
          </nav>

          <div className="mt-6 pt-4 border-t border-base-content/10 hidden lg:block">
            <Link
              to="/blog"
              className="flex items-center gap-2 text-sm text-base-content/50 hover:text-primary transition-colors"
            >
              <ArrowLeftIcon className="h-3.5 w-3.5" /> Back to Blog
            </Link>
          </div>
        </div>
      </aside>
    </>
  );
}

function BlogPostPage() {
  const { slug } = useParams();
  const currentIndex = BLOG_POSTS.findIndex((p) => p.slug === slug);
  const post = BLOG_POSTS[currentIndex];
  const prevPost = currentIndex > 0 ? BLOG_POSTS[currentIndex - 1] : null;
  const nextPost = currentIndex < BLOG_POSTS.length - 1 ? BLOG_POSTS[currentIndex + 1] : null;
  const [activeId, setActiveId] = useState("");
  const [tocOpen, setTocOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const contentRef = useRef(null);

  const headings = useMemo(() => post ? extractHeadings(post.content) : [], [post]);

  useEffect(() => {
    if (!headings.length) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      { rootMargin: "-80px 0px -60% 0px", threshold: 0.1 }
    );
    for (const h of headings) {
      const el = document.getElementById(h.id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, [headings]);

  useEffect(() => {
    if (!contentRef.current) return;
    const blocks = contentRef.current.querySelectorAll("pre code");
    for (const block of blocks) {
      hljs.highlightElement(block);
    }
  });

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const handleCopy = (e) => {
      const btn = e.target.closest(".copy-btn");
      if (!btn) return;
      const codeBlock = btn.closest(".code-block");
      if (!codeBlock) return;
      const code = codeBlock.getAttribute("data-code");
      if (!code) return;
      navigator.clipboard.writeText(code).then(() => {
        const text = btn.querySelector(".copy-text");
        const icon = btn.querySelector(".copy-icon");
        if (text) text.textContent = "Copied!";
        if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"/>';
        setTimeout(() => {
          if (text) text.textContent = "Copy";
          if (icon) icon.innerHTML = '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/>';
        }, 2000);
      }).catch(() => {});
    };
    container.addEventListener("click", handleCopy);
    return () => container.removeEventListener("click", handleCopy);
  }, [post?.slug]);

  const handleHeadingClick = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  if (!post) {
    return (
      <div className="min-h-screen bg-base-200 text-base-content flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Post not found</h1>
          <Link to="/blog" className="mt-4 inline-flex items-center gap-2 text-primary hover:underline">
            <ArrowLeftIcon className="h-4 w-4" /> Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <article className="section-y">
          <div className="page-container">
            <div className="mx-auto flex gap-10 lg:max-w-7xl justify-center">
              <div className="min-w-0 flex-1 max-w-3xl">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm text-base-content/50 hover:text-primary transition-colors mb-6"
                >
                  <ArrowLeftIcon className="h-4 w-4" /> Back to Blog
                </Link>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="inline-block rounded-full bg-primary/10 px-3.5 py-1 text-sm font-medium text-primary">
                        {post.category}
                      </span>
                      <span className="flex items-center gap-1.5 text-sm text-base-content/50">
                        <ClockIcon className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    </div>

                    <h1 className="text-3xl font-bold tracking-tight text-base-content sm:text-4xl lg:text-5xl leading-tight">
                      {post.title}
                    </h1>

                    <div className="mt-5 flex flex-wrap items-center gap-5 text-sm text-base-content/50">
                      <span className="flex items-center gap-2">
                        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-xs font-bold text-primary">
                          {post.author.charAt(0)}
                        </span>
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <CalendarIcon className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                    </div>

                    <div className="relative mt-8 mb-10 overflow-hidden rounded-2xl border border-base-content/10">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="h-48 w-full object-cover sm:h-64 md:h-80 opacity-80"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-base-200 via-transparent to-transparent" />
                    </div>

                    <div className="flex items-center gap-3 mb-8 pb-6 border-b border-base-content/10">
                      <button
                        onClick={handleCopyLink}
                        className="inline-flex items-center gap-2 rounded-lg border border-base-content/20 px-4 py-2 text-xs font-medium text-base-content/60 hover:text-base-content hover:border-base-content/40 transition-colors cursor-pointer"
                      >
                        {copied ? (
                          <><CheckIcon className="h-3.5 w-3.5 text-primary" /> Copied!</>
                        ) : (
                          <><Share2Icon className="h-3.5 w-3.5" /> Share</>
                        )}
                      </button>
                    </div>

                    <div
                      ref={contentRef}
                      className="prose-content leading-relaxed"
                      dangerouslySetInnerHTML={{ __html: renderContent(post.content) }}
                    />
                  </motion.div>
                </AnimatePresence>

                <div className="mt-16 flex items-center justify-between border-t border-base-content/10 pt-8">
                  {prevPost ? (
                    <Link
                      to={`/blog/${prevPost.slug}`}
                      className="group flex items-center gap-3 text-sm text-base-content/70 hover:text-primary transition-colors max-w-[45%]"
                    >
                      <ChevronLeftIcon className="h-5 w-5 shrink-0 transition-transform group-hover:-translate-x-1" />
                      <div>
                        <span className="text-xs text-base-content/40 block mb-0.5">Previous</span>
                        <span className="font-medium block leading-tight line-clamp-2">{prevPost.title}</span>
                      </div>
                    </Link>
                  ) : <div />}

                  {nextPost ? (
                    <Link
                      to={`/blog/${nextPost.slug}`}
                      className="group flex items-center gap-3 text-sm text-base-content/70 hover:text-primary transition-colors text-right max-w-[45%]"
                    >
                      <div>
                        <span className="text-xs text-base-content/40 block mb-0.5">Next</span>
                        <span className="font-medium block leading-tight line-clamp-2">{nextPost.title}</span>
                      </div>
                      <ChevronRightIcon className="h-5 w-5 shrink-0 transition-transform group-hover:translate-x-1" />
                    </Link>
                  ) : <div />}
                </div>

                <div className="mt-8 text-center">
                  <Link
                    to="/blog"
                    className="inline-flex items-center gap-2 rounded-full border border-base-content/20 px-6 py-2.5 text-sm font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors"
                  >
                    <ArrowLeftIcon className="h-4 w-4" /> All Articles
                  </Link>
                </div>
              </div>

              <div className="hidden lg:block w-64 shrink-0 lg:self-start lg:sticky lg:top-24">
                <TableOfContents
                  headings={headings}
                  activeId={activeId}
                  onHeadingClick={handleHeadingClick}
                  isOpen={tocOpen}
                  onToggle={() => setTocOpen(!tocOpen)}
                />
              </div>
            </div>
          </div>
        </article>
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

export default BlogPostPage;
