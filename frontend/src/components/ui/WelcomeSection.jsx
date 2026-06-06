import { useUser } from "@clerk/clerk-react";
import { ArrowRightIcon, SparklesIcon, ZapIcon } from "lucide-react";

function WelcomeSection({ onCreateSession }) {
  const { user } = useUser();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-8 sm:pt-12 pb-4">
      <div className="relative overflow-hidden rounded-xl border border-base-300/50 bg-base-100/80 backdrop-blur-sm p-5 sm:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
        <div className="relative flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
              <SparklesIcon className="w-4 h-4 text-base-content/60" />
            </div>
            <div>
              <h1 className="text-lg sm:text-xl font-semibold tracking-tight">
                <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  Welcome back, {user?.firstName || "there"}
                </span>
              </h1>
              <p className="text-xs sm:text-sm text-base-content/50 mt-0.5">
                Ready to sharpen your coding skills?
              </p>
            </div>
          </div>
          <button
            onClick={onCreateSession}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-base-content/5 hover:bg-base-content/10 border border-base-300/50 text-xs sm:text-sm font-medium text-base-content/70 hover:text-base-content transition-all duration-200 group"
          >
            <ZapIcon className="w-3.5 h-3.5" />
            <span>Create Session</span>
            <ArrowRightIcon className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;
