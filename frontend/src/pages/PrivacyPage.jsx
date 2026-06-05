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

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <section className="section-y">
          <div className="page-container mx-auto max-w-3xl">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Privacy Policy
              </span>
            </h1>
            <p className="mt-2 text-sm text-base-content/50">Last updated: June 1, 2026</p>

            <div className="mt-12 space-y-8 text-base-content/80 leading-relaxed">
              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">1. Information We Collect</h2>
                <p>We collect information you provide when creating an account, including your name, email address, and authentication data via Clerk. We also collect code submissions, interview session data, and usage analytics to improve our platform.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">2. How We Use Your Information</h2>
                <p>Your information is used to provide and maintain our coding interview platform, process your code submissions, personalize your experience, send service updates, and improve our problem library and features.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">3. Data Sharing</h2>
                <p>We do not sell your personal data. We may share anonymized aggregate data for analytics purposes. Your code submissions are stored securely and are not shared with third parties without your consent.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">4. Data Security</h2>
                <p>We implement industry-standard security measures including encryption at rest and in transit, regular security audits, and strict access controls to protect your data from unauthorized access.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">5. Third-Party Services</h2>
                <p>We use Clerk for authentication, Piston for code execution, and Vercel for hosting. Each service provider has its own privacy policy and data handling practices. We recommend reviewing their policies for complete information.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">6. Cookies</h2>
                <p>We use essential cookies for authentication and session management. Analytics cookies help us understand platform usage. You can control cookie preferences through your browser settings.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">7. Your Rights</h2>
                <p>You have the right to access, correct, or delete your personal data at any time. Contact us through our contact page to exercise these rights. We will respond to your request within 30 days.</p>
              </section>

              <section>
                <h2 className="mb-4 text-xl font-semibold text-base-content">8. Contact</h2>
                <p>If you have questions about this privacy policy, please reach out through our contact page or email us at privacy@nexthire.dev.</p>
              </section>
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

export default PrivacyPage;
