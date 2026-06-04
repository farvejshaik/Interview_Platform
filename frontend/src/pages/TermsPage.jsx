import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";

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

function TermsPage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <section className="section-y">
          <div className="page-container mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Terms of Service
              </span>
            </h1>
            <p className="mt-2 text-sm text-base-content/50">Last updated: June 1, 2026</p>

            <div className="mt-12 space-y-8 text-base-content/80 leading-relaxed">
              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">1. Acceptance of Terms</h2>
                <p>By accessing and using Next Hire, you agree to be bound by these Terms of Service. If you do not agree with any part of these terms, you may not use our platform.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">2. User Accounts</h2>
                <p>You are responsible for maintaining the confidentiality of your account credentials. You must be at least 13 years old to use this platform. You agree to provide accurate and complete information when creating your account.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">3. Acceptable Use</h2>
                <p>You agree to use Next Hire only for lawful purposes and in accordance with these terms. You may not use the platform to: violate laws, infringe intellectual property rights, distribute malware, or engage in any activity that disrupts the platform's functionality.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">4. Code Submissions</h2>
                <p>You retain all rights to the code you submit on our platform. By submitting code, you grant us a non-exclusive license to execute, analyze, and store your code for the purpose of providing our services.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">5. Intellectual Property</h2>
                <p>The Next Hire platform, including its design, logo, problem library, and underlying technology, is protected by intellectual property laws. You may not copy, modify, or reverse engineer any part of the platform without our explicit consent.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">6. Limitation of Liability</h2>
                <p>Next Hire is provided "as is" without warranties of any kind. We are not liable for any damages arising from your use of the platform, including but not limited to lost profits or data loss.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">7. Termination</h2>
                <p>We reserve the right to suspend or terminate your account at any time for violations of these terms, with or without notice. You may terminate your account at any time by contacting us.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">8. Changes to Terms</h2>
                <p>We may modify these terms at any time. We will notify users of material changes via email or through the platform. Continued use of the platform after changes constitutes acceptance of the new terms.</p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer
        logo={<img src="/logo.png" alt="Next Hire" className="h-12 w-auto object-contain" style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 6px #8b5cf6)" }} />}
        brandName="Next Hire"
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
        copyright={{ text: "© 2026 Next Hire", license: "All rights reserved" }}
      />
    </div>
  );
}

export default TermsPage;
