import { Fragment } from "react";
import { Link } from "react-router";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const floatingVariants = {
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const HeroSection = ({ title, subtitle, actions, stats, image, className }) => {
  return (
    <section className={cn("section-y w-full overflow-hidden", className)}>
      <div className="page-container grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
        {/* Left Column: Text Content */}
        <motion.div
          className="flex flex-col items-center text-center lg:items-start lg:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.h1
            className="text-4xl font-bold tracking-tight text-base-content sm:text-6xl"
            variants={itemVariants}
          >
            {title}
          </motion.h1>
          <motion.p
            className="mt-6 max-w-md text-lg text-base-content/70"
            variants={itemVariants}
          >
            {subtitle}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
            variants={itemVariants}
          >
            {actions.map((action, index) => {
              if (action.element) {
                return <Fragment key={index}>{action.element}</Fragment>;
              }
              const isLink = !!action.to;
              return (
                <Button
                  key={index}
                  onClick={action.onClick}
                  variant={action.variant}
                  size="lg"
                  className={action.className}
                  asChild={isLink}
                >
                  {isLink ? (
                    <Link to={action.to}>{action.text}</Link>
                  ) : (
                    action.text
                  )}
                </Button>
              );
            })}
          </motion.div>
          <motion.div
            className="mt-12 flex flex-wrap justify-center gap-8 lg:justify-start"
            variants={itemVariants}
          >
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-base-content/3 bg-base-100/70">
                  {stat.icon}
                </div>
                <div>
                  <p className="text-xl font-bold text-base-content">
                    {stat.value}
                  </p>
                  <p className="text-sm text-base-content/70">{stat.label}</p>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Right Column: Hero Image */}
        <motion.div
          className="relative flex items-center justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Decorative Shapes */}
          <motion.div
            className="absolute -top-10 -left-10 h-32 w-32 rounded-full bg-primary/10 blur-3xl animate-pulse"
            variants={floatingVariants}
            animate="animate"
          />
          <motion.div
            className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-secondary/10 blur-3xl animate-pulse"
            variants={floatingVariants}
            animate="animate"
            style={{ transitionDelay: "0.5s" }}
          />

          <motion.div className="relative w-full" variants={imageVariants}>
            <img
              src={image}
              alt="Talent Forge Hero"
              className="h-auto w-full opacity-80"
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
