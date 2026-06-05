"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, Code2Icon, LayoutDashboardIcon, MapIcon, FileTextIcon } from "lucide-react";
import { Link, useLocation } from "react-router";
import { useUser, UserButton } from "@clerk/clerk-react";
import { useTheme } from "../../lib/useTheme";

const navLinks = [
  { to: "/roadmaps", label: "Roadmaps", icon: MapIcon },
  { to: "/blog", label: "Blog", icon: FileTextIcon },
];

const authLinks = [
  { to: "/dashboard", label: "Dashboard", icon: LayoutDashboardIcon },
  { to: "/problems", label: "Problems", icon: Code2Icon },
];

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex h-9 w-9 items-center justify-center rounded-lg border border-base-content/20 bg-base-100/50 text-base-content/60 hover:bg-base-200 hover:text-base-content transition-all"
      aria-label="Toggle Theme"
    >
      {theme === "talentforge-light" ? (
        <Moon className="h-4 w-4" />
      ) : (
        <Sun className="h-4 w-4 text-warning" />
      )}
    </button>
  );
}

function NavLink({ to, label, icon: Icon, onClick }) {
  const { pathname } = useLocation();
  const isActive = pathname === to || pathname.startsWith(to + "/");

  return (
    <Link
      to={to}
      onClick={onClick}
      className={`flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium rounded-lg transition-all ${
        isActive
          ? "text-primary bg-primary/10"
          : "text-base-content/60 hover:text-base-content hover:bg-base-200/50"
      }`}
    >
      <Icon className="size-4" />
      {label}
    </Link>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isSignedIn } = useUser();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full sticky top-0 z-50">
      <div className="border-b border-base-300/50 bg-base-100/80 backdrop-blur-md">
        <div className="page-container">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2.5 shrink-0">
              <img
                src="/logo.png"
                alt="TalentForge"
                className="h-8 w-auto object-contain logo-theme"
              />
              <span className="hidden sm:inline bg-linear-to-r from-primary to-accent bg-clip-text font-mono text-base font-bold tracking-tight text-transparent">
                TalentForge
              </span>
            </Link>

            <div className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => (
                <NavLink key={link.to} {...link} />
              ))}
              {isSignedIn && authLinks.map((link) => (
                <NavLink key={link.to} {...link} />
              ))}
            </div>

            <div className="hidden md:flex items-center gap-3">
              <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              {isSignedIn ? (
                <div className="flex items-center">
                  <UserButton />
                </div>
              ) : (
                <Link
                  to="/sign-in"
                  className="inline-flex items-center justify-center rounded-lg bg-primary px-4 py-1.5 text-sm font-medium text-primary-content hover:bg-primary/90 transition-all"
                >
                  Sign In
                </Link>
              )}
            </div>

            <button
              className="flex items-center md:hidden p-2 -mr-2 rounded-lg hover:bg-base-200 transition-colors"
              onClick={toggleMenu}
              aria-label="Open menu"
            >
              {isOpen ? <X className="h-5 w-5 text-base-content" /> : <Menu className="h-5 w-5 text-base-content" />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="border-b border-base-300/50 bg-base-100 md:hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
          >
            <div className="page-container py-4 space-y-1">
              {navLinks.map((link) => (
                <NavLink key={link.to} {...link} onClick={toggleMenu} />
              ))}
              {isSignedIn && authLinks.map((link) => (
                <NavLink key={link.to} {...link} onClick={toggleMenu} />
              ))}
              <div className="flex items-center justify-between pt-3 mt-3 border-t border-base-300/50">
                <span className="text-sm text-base-content/50">Theme</span>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
              <div className="pt-2">
                {isSignedIn ? (
                  <div className="flex items-center justify-center py-2">
                    <UserButton />
                  </div>
                ) : (
                  <Link
                    to="/sign-in"
                    className="flex w-full items-center justify-center rounded-lg bg-primary px-4 py-2.5 text-sm font-medium text-primary-content hover:bg-primary/90 transition-all"
                    onClick={toggleMenu}
                  >
                    Sign In
                  </Link>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navbar };
export default Navbar;
