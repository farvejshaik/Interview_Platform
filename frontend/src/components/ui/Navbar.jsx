"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Sun, Moon, LogOutIcon, Code2Icon } from "lucide-react";
import { Link } from "react-router";
import { useUser, useClerk } from "@clerk/clerk-react";
import { useTheme } from "../../lib/useTheme";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "./navigation-menu";

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-base-content/30 bg-base-100/30 text-base-content hover:bg-base-200 transition-colors"
      aria-label="Toggle Theme"
    >
      {theme === "talentforge-light" ? (
        <Moon className="h-5 w-5 text-primary" />
      ) : (
        <Sun className="h-5 w-5 text-warning" />
      )}
    </button>
  );
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { isSignedIn } = useUser();
  const { signOut } = useClerk();

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full">
      <div className="page-container py-4 md:py-6">
        <div className="relative z-10 flex w-full items-center justify-between rounded-full border border-base-content/30 bg-base-100/70 px-6 py-3 shadow-lg backdrop-blur-sm">
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
              <img
                src="/logo.png"
                alt="TalentForge"
                className="h-12 w-auto object-contain logo-theme"
              />
            </motion.div>
            <div className="hidden flex-col sm:flex">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text font-mono text-lg font-black tracking-wider text-transparent">
                TalentForge
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-4">
            <NavigationMenu viewport={false}>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/roadmaps" className="text-base-content/70 hover:text-base-content">
                      Roadmaps
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                    <Link to="/blog" className="text-base-content/70 hover:text-base-content">
                      Blog
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
                {isSignedIn && (
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild className={navigationMenuTriggerStyle()}>
                      <Link
                        to="/problems"
                        className="flex items-center gap-2 text-base-content/70 hover:text-base-content"
                      >
                        <Code2Icon className="size-4" />
                        Problems
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                )}
              </NavigationMenuList>
            </NavigationMenu>

            <ThemeToggle theme={theme} toggleTheme={toggleTheme} />

            {isSignedIn ? (
              <button
                onClick={() => signOut()}
                className="flex items-center gap-2 rounded-full border border-base-content/20 px-4 py-2 text-sm font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors"
              >
                <LogOutIcon className="size-4" />
                Sign Out
              </button>
            ) : (
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
            )}
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
              <div className="flex items-center justify-between border-b border-base-content/30 pb-4">
                <span className="text-base font-semibold text-base-content">
                  Theme
                </span>
                <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
              </div>
              <Link
                to="/roadmaps"
                className="flex items-center gap-3 rounded-lg border border-base-content/10 px-4 py-3 text-base font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors"
                onClick={toggleMenu}
              >
                Roadmaps
              </Link>
              <Link
                to="/blog"
                className="flex items-center gap-3 rounded-lg border border-base-content/10 px-4 py-3 text-base font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors"
                onClick={toggleMenu}
              >
                Blog
              </Link>
              {isSignedIn ? (
                <>
                  <Link
                    to="/problems"
                    className="flex items-center gap-3 rounded-lg border border-base-content/10 px-4 py-3 text-base font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors"
                    onClick={toggleMenu}
                  >
                    <Code2Icon className="size-5" />
                    Problems
                  </Link>
                  <button
                    onClick={() => { signOut(); toggleMenu(); }}
                    className="flex items-center gap-3 rounded-lg border border-base-content/10 px-4 py-3 text-base font-medium text-base-content/70 hover:text-base-content hover:bg-base-200 transition-colors w-full"
                  >
                    <LogOutIcon className="size-5" />
                    Sign Out
                  </button>
                </>
              ) : (
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
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export { Navbar };
export default Navbar;
