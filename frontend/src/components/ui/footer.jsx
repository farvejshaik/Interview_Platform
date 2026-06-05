import { Link } from "react-router";
import { cn } from "@/lib/utils";

export function Footer({
  logo,
  brandName = "TalentForge",
  brandDescription = "AI-powered interview preparation platform. Master coding interviews with structured roadmaps and real-time practice sessions.",
  socialLinks = [],
  mainLinks = [],
  legalLinks = [],
  copyright,
  creatorName,
  creatorUrl,
  className,
}) {
  const allNavLinks = [...mainLinks, ...legalLinks];

  return (
    <section className={cn("relative w-full overflow-hidden", className)}>
      <footer className="border-t border-base-300/50 bg-base-100/80 backdrop-blur-sm relative">
        <div className="max-w-7xl flex flex-col justify-between mx-auto min-h-0 sm:min-h-[30rem] md:min-h-[35rem] relative p-4 pt-10 pb-32">
          <div className="flex flex-col mb-12 sm:mb-20 md:mb-0 w-full">
            <div className="w-full flex flex-col items-center">
              <div className="space-y-2 flex flex-col items-center flex-1">
                <div className="flex items-center gap-2">
                  {logo ? (
                    <div className="flex items-center gap-2">
                      {logo}
                    </div>
                  ) : (
                    <span className="text-base-content text-3xl font-bold">
                      {brandName}
                    </span>
                  )}
                </div>
                <p className="text-base-content/50 font-medium text-center w-full max-w-sm sm:w-96 px-4 sm:px-0 text-sm">
                  {brandDescription}
                </p>
              </div>

              {socialLinks.length > 0 && (
                <div className="flex mb-8 mt-3 gap-4">
                  {socialLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.href}
                      className="text-base-content/40 hover:text-base-content transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={link.label}
                    >
                      <div className="w-5 h-5 hover:scale-110 duration-300">
                        {link.icon}
                      </div>
                      <span className="sr-only">{link.label}</span>
                    </a>
                  ))}
                </div>
              )}

              {allNavLinks.length > 0 && (
                <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm font-medium text-base-content/50 max-w-full px-4">
                  {allNavLinks.map((link, index) => (
                    <Link
                      key={index}
                      className="hover:text-base-content duration-300 hover:font-semibold"
                      to={link.href}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              )}

              <p className="mt-6 text-xs text-base-content/30 text-center">
                {copyright?.text || `©${new Date().getFullYear()} ${brandName}`}{copyright?.license ? ` — ${copyright.license}` : ""}
              </p>
            </div>
          </div>

          {creatorName && creatorUrl && (
            <div className="flex justify-center mt-4">
              <a
                href={creatorUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-base-content/30 hover:text-base-content/50 transition-colors duration-300"
              >
                Crafted by {creatorName}
              </a>
            </div>
          )}
        </div>

        <div
          className="bg-linear-to-t from-base-content/25 via-base-content/15 to-base-content/5 bg-clip-text text-transparent leading-none absolute left-1/2 -translate-x-1/2 bottom-16 md:bottom-32 font-extrabold tracking-tighter pointer-events-none select-none text-center px-4"
          style={{
            fontSize: 'clamp(2.5rem, 12vw, 10rem)',
            maxWidth: '95vw'
          }}
        >
          {brandName.toUpperCase()}
        </div>

        <div className="absolute bottom-16 sm:bottom-34 backdrop-blur-sm h-px bg-linear-to-r from-transparent via-base-content/20 to-transparent w-full left-1/2 -translate-x-1/2" />

        <div className="bg-linear-to-t from-base-100 via-base-100/80 blur-[1em] to-base-100/40 absolute bottom-12 sm:bottom-28 w-full h-24" />
      </footer>
    </section>
  );
}
