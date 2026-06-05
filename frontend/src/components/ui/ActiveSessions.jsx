import {
  ArrowRightIcon,
  Code2Icon,
  CrownIcon,
  SparklesIcon,
  UsersIcon,
  ZapIcon,
  LoaderIcon,
  ClockIcon,
} from "lucide-react";
import { Link } from "react-router";
import { formatDistanceToNow } from "date-fns";

function ActiveSessions({ sessions, isLoading, isUserInSession }) {
  return (
    <div className="lg:col-span-2 group relative p-4 sm:p-5 rounded-xl border border-base-300/50 bg-base-100/80 backdrop-blur-sm hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 transition-all duration-200 will-change-transform">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
      </div>
                <div className="relative space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
              <ZapIcon className="w-4 h-4 text-base-content/60" />
            </div>
            <h2 className="text-sm font-medium text-base-content">Live Sessions</h2>
          </div>
          <span className="text-[11px] font-medium px-2 py-1 rounded bg-black/5 dark:bg-white/10 text-base-content/40">
            {sessions.length}
          </span>
        </div>

        <div className="space-y-2 max-h-[300px] overflow-y-auto pr-1 -mr-1">
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-12">
              <LoaderIcon className="w-5 h-5 animate-spin text-base-content/30 mb-2" />
              <p className="text-xs text-base-content/40">Loading sessions...</p>
            </div>
          ) : sessions.length > 0 ? (
            sessions.map((session) => (
              <div
                key={session._id}
                className="relative p-3 sm:p-4 rounded-lg border border-base-300/30 bg-base-200/50 hover:border-base-300/60 hover:bg-base-200/80 transition-all duration-200"
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-3 flex-1 min-w-0">
                    <div className="shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
                      <Code2Icon className="w-4 h-4 text-base-content/60" />
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <h3 className="text-sm font-medium text-base-content truncate">
                          {session.problem}
                        </h3>
                        <span
                          className={`shrink-0 text-[10px] font-medium px-1.5 py-0.5 rounded ${
                            session.difficulty === "easy"
                              ? "bg-success/10 text-success"
                              : session.difficulty === "medium"
                              ? "bg-warning/10 text-warning"
                              : "bg-error/10 text-error"
                          }`}
                        >
                          {session.difficulty.charAt(0).toUpperCase() + session.difficulty.slice(1)}
                        </span>
                      </div>

                      <div className="flex items-center gap-3 text-[11px] text-base-content/40">
                        <span className="flex items-center gap-1">
                          <CrownIcon className="w-3 h-3" />
                          {session.host?.name}
                        </span>
                        <span className="flex items-center gap-1">
                          <UsersIcon className="w-3 h-3" />
                          {session.participant ? "2/2" : "1/2"}
                        </span>
                        <span className="flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" />
                          {formatDistanceToNow(new Date(session.createdAt), { addSuffix: true })}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="shrink-0">
                    {session.participant && !isUserInSession(session) ? (
                      <span className="text-[10px] font-medium px-2 py-1 rounded bg-error/10 text-error">
                        Full
                      </span>
                    ) : (
                      <Link
                        to={`/session/${session._id}`}
                        className="text-xs font-medium text-base-content/40 hover:text-base-content transition-colors flex items-center gap-1"
                      >
                        {isUserInSession(session) ? "Rejoin" : "Join"}
                        <ArrowRightIcon className="w-3 h-3" />
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
                <SparklesIcon className="w-6 h-6 text-base-content/30" />
              </div>
              <p className="text-sm font-medium text-base-content/50 mb-0.5">No active sessions</p>
              <p className="text-xs text-base-content/40">Create one to get started!</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
export default ActiveSessions;
