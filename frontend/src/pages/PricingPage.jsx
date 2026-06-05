import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";
import { CheckIcon } from "lucide-react";
import { Link } from "react-router";

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

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Perfect for getting started with practice problems.",
    features: [
      "Access to 30+ coding problems",
      "JavaScript, Python, Java support",
      "Basic code editor",
      "Community support",
    ],
    cta: "Get Started",
    href: "/sign-in",
    highlighted: false,
  },
  {
    name: "Pro",
    price: "$19",
    period: "/month",
    description: "For serious interview preparation.",
    features: [
      "Access to 100+ coding problems",
      "Collaborative interview mode",
      "Video & audio chat",
      "Detailed performance analytics",
      "Priority support",
      "Custom problem sets",
    ],
    cta: "Start Free Trial",
    href: "/sign-in",
    highlighted: true,
  },
  {
    name: "Enterprise",
    price: "$49",
    period: "/month",
    description: "For teams and organizations.",
    features: [
      "Everything in Pro",
      "Unlimited team seats",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "SSO & SAML integration",
      "Custom problem creation",
    ],
    cta: "Contact Sales",
    href: "/contact",
    highlighted: false,
  },
];

function PricingPage() {
  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <section className="section-y">
          <div className="page-container text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                Simple, Transparent Pricing
              </span>
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-base-content/70">
              Choose the plan that fits your interview preparation needs. No hidden fees.
            </p>
          </div>
        </section>

        <section className="section-y pt-0">
          <div className="page-container">
            <div className="mx-auto grid max-w-6xl gap-8 lg:grid-cols-3">
              {plans.map((plan, index) => (
                <div
                  key={index}
                    className={`relative flex flex-col rounded-2xl border p-8 transition-all duration-300 hover:-translate-y-0.5 ${
                    plan.highlighted
                      ? "border-primary/50 bg-primary/5 shadow-xl shadow-primary/10 scale-105"
                      : "border-base-300/40 bg-base-100/80 backdrop-blur-sm hover:border-primary/30"
                  }`}
                >
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-xs font-semibold text-primary-content">
                      Most Popular
                    </span>
                  )}
                  <h2 className="text-xl font-bold text-base-content">{plan.name}</h2>
                  <div className="mt-4 flex items-baseline gap-1">
                    <span className="text-4xl font-black text-base-content">{plan.price}</span>
                    {plan.period && <span className="text-sm text-base-content/50">{plan.period}</span>}
                  </div>
                  <p className="mt-2 text-sm text-base-content/70">{plan.description}</p>
                  <ul className="mt-6 flex-1 space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-base-content/80">
                        <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to={plan.href}
                    className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                      plan.highlighted
                        ? "bg-primary text-primary-content hover:bg-primary/90"
                        : "border border-base-content/20 text-base-content hover:bg-base-200"
                    }`}
                  >
                    {plan.cta}
                  </Link>
                </div>
              ))}
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

export default PricingPage;
