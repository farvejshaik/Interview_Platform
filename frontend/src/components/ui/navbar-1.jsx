"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, SparklesIcon } from "lucide-react";
import { Link } from "react-router";

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-full">
      <div className="page-container py-4 md:py-6">
        <div className="relative z-10 flex w-full items-center justify-between rounded-full border border-base-content/10 bg-base-100/90 px-6 py-3 shadow-lg backdrop-blur-sm">
          <Link
            to="/"
            className="flex items-center gap-3 transition-transform duration-200 hover:scale-105"
          >
            <motion.div
              className="flex h-8 w-8 items-center justify-center rounded-lg bg-linear-to-br from-primary to-secondary shadow-md"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              whileHover={{ rotate: 10 }}
              transition={{ duration: 0.3 }}
            >
              <SparklesIcon className="h-5 w-5 text-primary-content" />
            </motion.div>
            <div className="hidden flex-col sm:flex">
              <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text font-mono text-lg font-black tracking-wider text-transparent">
                Talent Forge
              </span>
            </div>
          </Link>

          <motion.div
            className="hidden md:block"
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
