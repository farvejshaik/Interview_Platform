import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";
import { BentoGrid } from "../components/ui/bento-grid";
import { CheckIcon, Code2Icon, ZapIcon, UsersIcon, ShieldIcon, GlobeIcon } from "lucide-react";

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

const features = [
  {
    icon: <Code2Icon className="h-6 w-6 text-primary" />,
    title: "Multi-Language Support",
    description: "Code in JavaScript, Python, or Java with our powerful web-based editor featuring syntax highlighting and autocomplete.",
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-secondary" />,
    title: "Collaborative Interviewing",
    description: "Real-time pair programming with video, audio, and shared code editing. Your virtual whiteboard for technical interviews.",
  },
  {
    icon: <ZapIcon className="h-6 w-6 text-accent" />,
    title: "Instant Code Execution",
    description: "Run your code instantly in the browser. Get immediate feedback with our lightning-fast code execution engine.",
  },
  {
    icon: <ShieldIcon className="h-6 w-6 text-primary" />,
    title: "100+ Practice Problems",
    description: "Curated collection of coding problems ranging from easy to hard, covering arrays, strings, trees, dynamic programming, and more.",
  },
  {
    icon: <GlobeIcon className="h-6 w-6 text-secondary" />,
    title: "Multi-Platform Access",
    description: "Access your interviews and practice sessions from any device. Your progress syncs seamlessly across platforms.",
  },
  {
    icon: <CheckIcon className="h-6 w-6 text-accent" />,
    title: "Progress Tracking",
    description: "Track your solved problems, monitor improvement, and identify areas that need more practice with detailed analytics.",
  },
];

function FeaturesPage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <section className="section-y">
          <div className="page-container text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Powerful Features
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-base-content/70">
              Everything you need to ace your technical interviews. Built for developers, by developers.
            </p>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="page-container">
            <div className="mx-auto grid max-w-6xl gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="group rounded-2xl border border-base-content/10 bg-base-100 p-8 transition-all duration-300 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-base-200 group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-base-content">
                    {feature.title}
                  </h3>
                  <p className="text-base text-base-content/70 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="page-container">
            <BentoGrid />
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

export default FeaturesPage;
