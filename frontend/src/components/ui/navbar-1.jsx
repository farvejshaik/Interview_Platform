"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon } from "lucide-react";
import { Link } from "react-router";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        document.documentElement.getAttribute("data-theme") ||
        "talentforge-dark"
      );
    }
    return "talentforge-dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "talentforge-light" ? "talentforge-dark" : "talentforge-light",
    );
  };

  const ThemeToggle = () => (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-base-content/3 bg-base-100/30 text-base-content hover:bg-base-200 transition-colors cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "talentforge-light" ? (
        <Moon className="h-5 w-5 text-primary" />
      ) : (
        <Sun className="h-5 w-5 text-warning" />
      )}
    </button>
  );

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full">
      <div className="page-container py-4 md:py-6">
        <div className="relative z-10 flex w-full items-center justify-between rounded-full border border-base-content/3 bg-base-100/70 px-6 py-3 shadow-lg backdrop-blur-sm">
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
          >
            <motion.div
              className="h-12 w-auto"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <img src="/logo.png" alt="Next Hire" className="h-full w-auto object-contain" style={{ filter: "brightness(0) invert(1) drop-shadow(0 0 6px #8b5cf6)" }} />
            </motion.div>
            <div className="hidden flex-col sm:flex">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text font-mono text-lg font-black tracking-wider text-transparent">
                Next Hire
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to="/sign-in"
                className="inline-flex items-center justify-center rounded-full bg-primary px-5 py-2 text-sm font-medium text-primary-content transition-colors hover:bg-primary/90"
              >
                Get Started
              </Link>
            </motion.div>
          </div>

          <motion.button
            className="flex items-center md:hidden"
            onClick={toggleMenu}
            whileTap={{ scale: 0.9 }}
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6 text-base-content" />
          </motion.button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-base-100 px-6 pt-24 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              aria-label="Close menu"
            >
              <X className="h-6 w-6 text-base-content" />
            </motion.button>
            <div className="flex flex-col space-y-6">
              <div className="flex items-center justify-between border-b border-base-content/3 pb-4">
                <span className="text-base font-semibold text-base-content">
                  Theme
                </span>
                <ThemeToggle />
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                exit={{ opacity: 0, y: 20 }}
              >
                <Link
                  to="/sign-in"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-5 py-3 text-base font-medium text-primary-content transition-colors hover:bg-primary/90"
                  onClick={toggleMenu}
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navbar1 };
