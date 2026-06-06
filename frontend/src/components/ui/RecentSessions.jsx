import { useState } from "react";
import { Code2, Clock, Users, Trophy, Loader, ChevronLeft, ChevronRight } from "lucide-react";
import { formatDistanceToNow } from "date-fns";

const PAGE_SIZE = 6;

function RecentSessions({ sessions, isLoading }) {
  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(sessions.length / PAGE_SIZE));
  const validPage = Math.min(page, totalPages - 1);
  const pageSessions = sessions.slice(validPage * PAGE_SIZE, (validPage + 1) * PAGE_SIZE);

  return (
    <div className="group relative p-4 sm:p-5 rounded-xl border border-base-300/50 bg-base-100/80 backdrop-blur-sm hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 transition-all duration-200 will-change-transform mt-4">
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
      </div>
      <div className="relative space-y-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
            <Clock className="w-4 h-4 text-base-content/60" />
          </div>
          <h2 className="text-sm font-medium">
            <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Past Sessions
            </span>
          </h2>
          {sessions.length > 0 && (
            <span className="text-[11px] font-medium px-2 py-0.5 rounded bg-black/5 dark:bg-white/10 text-base-content/40">
              {sessions.length}
            </span>
          )}
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {isLoading ? (
            <div className="col-span-full flex flex-col items-center justify-center py-12">
              <Loader className="w-5 h-5 animate-spin text-base-content/30 mb-2" />
              <p className="text-xs text-base-content/40">Loading sessions...</p>
            </div>
          ) : sessions.length > 0 ? (
            pageSessions.map((session) => (
              <div
                key={session._id}
                className={`relative p-3 sm:p-4 rounded-lg border transition-all duration-200 ${
                  session.status === "active"
                    ? "border-success/30 bg-success/[0.03] hover:border-success/50 hover:bg-success/[0.05]"
                    : "border-base-300/30 bg-base-200/50 hover:border-base-300/60 hover:bg-base-200/80"
                }`}
              >
                {session.status === "active" && (
                  <div className="flex items-center gap-1 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" />
                    <span className="text-[10px] font-medium text-success">LIVE</span>
                  </div>
                )}

                <div className="flex items-start gap-3 mb-2">
                  <div className="shrink-0 w-7 h-7 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
                    <Code2 className="w-3.5 h-3.5 text-base-content/50" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-sm font-medium text-base-content truncate">
                      {session.problem}
                    </h3>
                    <span
                      className={`text-[10px] font-medium px-1.5 py-0.5 rounded mt-1 inline-block ${
                        session.difficulty === "easy"
                          ? "bg-success/10 text-success"
                          : session.difficulty === "medium"
                          ? "bg-warning/10 text-warning"
                          : "bg-error/10 text-error"
                      }`}
                    >
                      {session.difficulty}
                    </span>
                  </div>
                </div>

                <div className="space-y-1 text-[11px] text-base-content/40">
                  <div className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3" />
                    <span>
                      {formatDistanceToNow(new Date(session.createdAt), { addSuffix: true })}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <Users className="w-3 h-3" />
                    <span>
                      {session.participant ? "2" : "1"} participant
                      {session.participant ? "s" : ""}
                    </span>
                  </div>
                </div>

                <div className="mt-2 pt-2 border-t border-base-300/30 flex items-center justify-between">
                  <span className="text-[10px] font-medium text-base-content/30 uppercase tracking-wider">
                    {session.status === "active" ? "In Progress" : "Completed"}
                  </span>
                  {session.status !== "active" && (
                    <span className="text-[10px] text-base-content/30">
                      {new Date(session.updatedAt).toLocaleDateString()}
                    </span>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full text-center py-12">
              <div className="w-14 h-14 mx-auto mb-3 rounded-xl bg-black/5 dark:bg-white/10 flex items-center justify-center">
                <Trophy className="w-6 h-6 text-base-content/30" />
              </div>
              <p className="text-sm font-medium text-base-content/50 mb-0.5">No sessions yet</p>
              <p className="text-xs text-base-content/40">Start your coding journey today!</p>
            </div>
          )}
        </div>

        {sessions.length > PAGE_SIZE && (
          <div className="flex items-center justify-center gap-2 pt-2">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={validPage === 0}
              className="btn btn-ghost btn-xs gap-1"
            >
              <ChevronLeft className="size-3.5" /> Previous
            </button>
            <span className="text-[11px] text-base-content/40 px-2">
              {validPage + 1} / {totalPages}
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={validPage >= totalPages - 1}
              className="btn btn-ghost btn-xs gap-1"
            >
              Next <ChevronRight className="size-3.5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default RecentSessions;
