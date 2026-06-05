import { Code2Icon, LoaderIcon, PlusIcon, XIcon, ChevronRightIcon } from "lucide-react";
import { PROBLEMS } from "../../data/problems";

function CreateSessionModal({
  isOpen,
  onClose,
  roomConfig,
  setRoomConfig,
  onCreateRoom,
  isCreating,
}) {
  const problems = Object.values(PROBLEMS);

  if (!isOpen) return null;

  return (
    <div className="modal modal-open">
      <div className="modal-box max-w-xl p-0 overflow-hidden rounded-xl">
        <div className="px-6 py-4 border-b border-base-300/50 flex items-center justify-between">
          <div>
            <h3 className="font-semibold text-base text-base-content">Create New Session</h3>
            <p className="text-xs text-base-content/50 mt-0.5">Set up a coding session</p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
          >
            <XIcon className="size-4 text-base-content/50" />
          </button>
        </div>

        <div className="px-6 py-5 space-y-5">
          <div className="space-y-2">
            <label className="text-xs font-medium flex items-center gap-1.5 text-base-content/70">
              <Code2Icon className="size-3.5 shrink-0" />
              Select Problem
              <span className="text-error">*</span>
            </label>
            <div className="relative">
              <select
                className="w-full text-sm bg-base-200/50 border border-base-300/50 focus:border-base-content/30 rounded-lg px-3 py-2.5 appearance-none cursor-pointer hover:bg-base-200/80 transition-colors"
                value={roomConfig.problem}
                onChange={(e) => {
                  const selectedProblem = problems.find((p) => p.title === e.target.value);
                  setRoomConfig({
                    difficulty: selectedProblem.difficulty,
                    problem: e.target.value,
                  });
                }}
              >
                <option value="" disabled>
                  Choose a coding problem...
                </option>
                {problems.map((problem) => (
                  <option key={problem.id} value={problem.title}>
                    {problem.title} ({problem.difficulty})
                  </option>
                ))}
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                <svg className="w-4 h-4 text-base-content/40" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </div>
            </div>
          </div>

          {roomConfig.problem && (
            <div className="rounded-lg border border-base-300/30 bg-base-200/30 p-4 space-y-3">
              <div className="flex items-center gap-1.5 text-xs font-medium text-base-content/60">
                <ChevronRightIcon className="size-3.5" />
                Room Summary
              </div>
              <div className="grid grid-cols-2 gap-2 text-xs">
                <div className="bg-base-200/50 rounded-lg px-3 py-2">
                  <span className="text-base-content/40 block mb-0.5">Problem</span>
                  <span className="font-medium text-base-content truncate block">{roomConfig.problem}</span>
                </div>
                <div className="bg-base-200/50 rounded-lg px-3 py-2">
                  <span className="text-base-content/40 block mb-0.5">Difficulty</span>
                  <span className="font-medium text-base-content">{roomConfig.difficulty}</span>
                </div>
                <div className="bg-base-200/50 rounded-lg px-3 py-2 col-span-2">
                  <span className="text-base-content/40 block mb-0.5">Participants</span>
                  <span className="font-medium text-base-content">2 (1-on-1 pair programming)</span>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="px-6 py-4 border-t border-base-300/50 flex items-center justify-end gap-3">
          <button
            className="text-xs font-medium px-3 py-1.5 rounded-lg hover:bg-black/5 dark:hover:bg-white/10 transition-colors text-base-content/50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="text-xs font-medium px-4 py-1.5 rounded-lg bg-base-content/5 hover:bg-base-content/10 border border-base-300/50 text-base-content/70 hover:text-base-content transition-all inline-flex items-center gap-1.5 disabled:opacity-40 disabled:pointer-events-none"
            onClick={onCreateRoom}
            disabled={isCreating || !roomConfig.problem}
          >
            {isCreating ? (
              <LoaderIcon className="size-3.5 animate-spin" />
            ) : (
              <PlusIcon className="size-3.5" />
            )}
            {isCreating ? "Creating..." : "Create Session"}
          </button>
        </div>
      </div>
      <div className="modal-backdrop" onClick={onClose} />
    </div>
  );
}
export default CreateSessionModal;
