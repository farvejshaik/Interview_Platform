import { Button } from "@/components/ui/button";

export function Footer({
  logo,
  brandName,
  socialLinks,
  mainLinks,
  legalLinks,
  copyright,
}) {
  return (
    <footer className="bg-transparent">
      <div className="page-container section-y">
        <div className="md:flex md:items-start md:justify-between">
          <a
            href="/"
            className="flex items-center gap-x-2"
            aria-label={brandName}
          >
            {logo}
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-xl font-bold text-transparent">
              {brandName}
            </span>
          </a>
          <ul className="mt-6 flex list-none space-x-3 md:mt-0">
            {socialLinks.map((link, i) => (
              <li key={i}>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-10 w-10 rounded-full text-base-content/70 hover:bg-base-200 hover:text-base-content"
                  asChild
                >
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
                </Button>
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-8 border-t border-base-content/10 pt-8 flex flex-col items-center gap-6 lg:grid lg:grid-cols-3 lg:items-start">
          <div className="text-sm font-medium text-base-content/60 lg:justify-self-start">
            {copyright.text}{copyright.license ? ` — ${copyright.license}` : ""}
          </div>
          <nav className="lg:justify-self-center">
            <ul className="flex list-none flex-wrap justify-center gap-x-6 gap-y-2">
              {mainLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm font-semibold text-base-content/80 transition-colors hover:text-base-content"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="lg:justify-self-end">
            <ul className="flex list-none flex-wrap justify-center gap-x-5 gap-y-2">
              {legalLinks.map((link, i) => (
                <li key={i}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-base-content/60 transition-colors hover:text-base-content/80"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
