import { useState } from "react";
import { Navbar } from "../components/ui/Navbar";
import { Footer } from "../components/ui/footer";
import toast from "react-hot-toast";

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

function ContactPage() {
  const [formData, setFormData] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-base-200 text-base-content">
      <Navbar />
      <main>
        <section className="section-y">
          <div className="page-container">
            <div className="mx-auto max-w-6xl">
              <div className="text-center">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                    Get in Touch
                  </span>
                </h1>
                <p className="mx-auto mt-4 max-w-2xl text-lg text-base-content/70">
                  Have a question, suggestion, or want to partner with us? We'd love to hear from you.
                </p>
              </div>

              <div className="mt-16 grid gap-12 lg:grid-cols-2">
                <div>
                  <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-base-300/40 bg-base-100/80 backdrop-blur-sm p-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-base-content/80">
                          Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border border-base-content/20 bg-base-100 px-4 py-3 text-base-content placeholder:text-base-content/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-base-content/80">
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="mt-1 w-full rounded-lg border border-base-content/20 bg-base-100 px-4 py-3 text-base-content placeholder:text-base-content/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-base-content/80">
                        Subject
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-lg border border-base-content/20 bg-base-100 px-4 py-3 text-base-content placeholder:text-base-content/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors"
                        placeholder="How can we help?"
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-base-content/80">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        required
                        className="mt-1 w-full rounded-lg border border-base-content/20 bg-base-100 px-4 py-3 text-base-content placeholder:text-base-content/40 focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-colors resize-none"
                        placeholder="Tell us more about your inquiry..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-primary px-8 py-3 text-sm font-medium text-primary-content transition-colors hover:bg-primary/90"
                    >
                      Send Message
                    </button>
                  </form>
                </div>

                <div className="space-y-8">
                  <div>
                    <h2 className="text-lg font-semibold text-base-content">Contact Information</h2>
                    <div className="mt-4 space-y-4 text-base-content/70">
                      <p>
                        <span className="block font-medium text-base-content">Email</span>
                        support@nexthire.dev
                      </p>
                      <p>
                        <span className="block font-medium text-base-content">Twitter</span>
                        @FarvejFaru
                      </p>
                      <p>
                        <span className="block font-medium text-base-content">GitHub</span>
                        github.com/farvejshaik
                      </p>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-base-300/40 bg-base-100/80 backdrop-blur-sm p-6">
                    <h2 className="text-lg font-semibold text-base-content">Frequently Asked</h2>
                    <div className="mt-4 space-y-4 text-sm text-base-content/70">
                      <div>
                        <p className="font-medium text-base-content">How do I start practicing?</p>
                        <p className="mt-1">Sign in with your account and browse our problem library. Pick a problem and start coding!</p>
                      </div>
                      <div>
                        <p className="font-medium text-base-content">Is there a free tier?</p>
                        <p className="mt-1">Yes! Our Free plan gives you access to a curated set of problems to get started.</p>
                      </div>
                      <div>
                        <p className="font-medium text-base-content">Can I use my own IDE?</p>
                        <p className="mt-1">Our built-in editor supports JavaScript, Python, and Java with full syntax highlighting and execution.</p>
                      </div>
                    </div>
                  </div>
                </div>
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

export default ContactPage;
