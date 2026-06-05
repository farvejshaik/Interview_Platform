import { Marquee } from "./marquee";

const COMPANY_LOGOS = [
  { name: "Google", src: "/companies/2916251_google_communication_logo_marketing_media_icon.png" },
  { name: "Microsoft", src: "/companies/294669_microsoft_icon.png" },
  { name: "Netflix", src: "/companies/7124274_netflix_logo_icon.png" },
  { name: "Spotify", src: "/companies/7124272_spotify_logo_icon.png" },
  { name: "Oracle", src: "/companies/294664_oracle_icon.png" },
  { name: "Cisco", src: "/companies/294687_cisco_icon.png" },
  { name: "PayPal", src: "/companies/1156727_finance_payment_paypal_icon.png" },
];

export function CompaniesMarquee() {
  return (
    <section className="section-y w-full overflow-hidden">
      <div className="section-header">
        <h2 className="text-3xl font-bold text-base-content sm:text-4xl">
          Trusted by{" "}
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text font-mono text-transparent">
            Top Companies
          </span>
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-base-content/70">
          Candidates from leading companies prepare for their next career move with TalentForge
        </p>
      </div>
      <div className="page-container">
        <Marquee pauseOnHover speed={40}>
          {COMPANY_LOGOS.map((company) => (
            <div
              key={company.name}
              className="mx-10 flex items-center justify-center"
              title={company.name}
            >
              <img
                src={company.src}
                alt={company.name}
                className="company-logo h-20 w-auto object-contain opacity-70 transition-all duration-300 hover:opacity-100"
              />
            </div>
          ))}
        </Marquee>
      </div>
    </section>
  );
}
