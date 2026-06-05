import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";
import { Code2Icon, UsersIcon, TargetIcon, HeartIcon } from "lucide-react";

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

const values = [
  {
    icon: <Code2Icon className="h-6 w-6 text-primary" />,
    title: "Code Excellence",
    description: "We believe in writing clean, efficient, and maintainable code. Our platform is built to help developers hone their coding skills.",
  },
  {
    icon: <UsersIcon className="h-6 w-6 text-secondary" />,
    title: "Community First",
    description: "Learning is better together. We foster a collaborative environment where developers can grow and succeed as a community.",
  },
  {
    icon: <TargetIcon className="h-6 w-6 text-accent" />,
    title: "Interview Ready",
    description: "Our focused approach ensures you're prepared for the toughest technical interviews at top companies.",
  },
  {
    icon: <HeartIcon className="h-6 w-6 text-primary" />,
    title: "Passion for Teaching",
    description: "Every problem, every feature, every line of code is designed with one goal: helping you become a better developer.",
  },
];

function AboutPage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <section className="section-y">
          <div className="page-container">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  About TalentForge
                </span>
              </h1>
              <p className="mt-6 text-lg text-base-content/70 leading-relaxed">
                TalentForge is a collaborative coding interview platform designed to help developers prepare for technical interviews. We provide a real-time coding environment with support for JavaScript, Python, and Java, along with a growing library of interview-style problems.
              </p>
              <p className="mt-4 text-lg text-base-content/70 leading-relaxed">
                Whether you're practicing solo or pair programming with a friend, TalentForge offers the tools you need to succeed in your technical interviews.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="page-container">
            <div className="mx-auto max-w-6xl">
              <h2 className="text-center text-2xl font-bold text-base-content">Our Values</h2>
              <div className="mt-10 grid gap-8 sm:grid-cols-2">
                {values.map((value, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-base-content/10 bg-base-100 p-8 transition-all duration-300 hover:border-primary/30"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-base-200">
                      {value.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-base-content">{value.title}</h3>
                    <p className="mt-2 text-base text-base-content/70 leading-relaxed">{value.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="page-container">
            <div className="mx-auto max-w-3xl rounded-2xl border border-base-content/10 bg-base-100 p-8 text-center">
              <h2 className="text-2xl font-bold text-base-content">Our Mission</h2>
              <p className="mt-4 text-base text-base-content/70 leading-relaxed">
                To make technical interview preparation accessible, collaborative, and effective for every developer worldwide. We believe that with the right tools and practice, anyone can ace their dream job interview.
              </p>
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

export default AboutPage;
