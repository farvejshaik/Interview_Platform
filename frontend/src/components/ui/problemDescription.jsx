import { ChevronLeftIcon, ChevronRightIcon, LightbulbIcon, FileTextIcon, StickyNoteIcon, CodeIcon, ArrowLeftIcon } from "lucide-react";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { PROBLEM_HINTS, PROBLEM_SOLUTIONS } from "../../data/problems-meta";

const TABS = [
  { id: "description", label: "Description", icon: FileTextIcon },
  { id: "hints", label: "Hints", icon: LightbulbIcon },
  { id: "notes", label: "Notes", icon: StickyNoteIcon },
];

function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems, failedCount }) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("description");
  const [notes, setNotes] = useState("");
  const currentIndex = allProblems.findIndex((p) => p.id === currentProblemId);
  const hints = PROBLEM_HINTS[currentProblemId];
  const solution = PROBLEM_SOLUTIONS[currentProblemId];
  const showSolution = failedCount >= 5;

  useEffect(() => {
    const saved = localStorage.getItem(`notes-${currentProblemId}`);
    if (saved) setNotes(saved);
    else setNotes("");
    setActiveTab("description");
  }, [currentProblemId]);

  useEffect(() => {
    localStorage.setItem(`notes-${currentProblemId}`, notes);
  }, [notes, currentProblemId]);

  const tabs = showSolution
    ? [...TABS, { id: "solution", label: "Solution", icon: CodeIcon }]
    : TABS;

  return (
    <div className="h-full bg-base-100 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-base-300 bg-base-200">
        <div className="flex items-center gap-2">
          <button
            onClick={() => navigate("/problems")}
            className="btn btn-ghost btn-xs btn-square text-base-content/50 hover:text-base-content"
            title="Back to problems"
          >
            <ArrowLeftIcon className="size-4" />
          </button>
          <span className="text-sm font-medium">{problem.title}</span>
          <span className={`badge badge-sm ${
            problem.difficulty === "Easy" ? "badge-success" :
            problem.difficulty === "Medium" ? "badge-warning" : "badge-error"
          }`}>
            {problem.difficulty}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <button
            className="btn btn-ghost btn-sm"
            disabled={currentIndex <= 0}
            onClick={() => onProblemChange(allProblems[currentIndex - 1].id)}
          >
            <ChevronLeftIcon className="size-4" />
          </button>
          <span className="text-xs text-base-content/60">
            {currentIndex + 1}/{allProblems.length}
          </span>
          <button
            className="btn btn-ghost btn-sm"
            disabled={currentIndex >= allProblems.length - 1}
            onClick={() => onProblemChange(allProblems[currentIndex + 1].id)}
          >
            <ChevronRightIcon className="size-4" />
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-base-300 bg-base-200/50">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium border-b-2 transition-colors ${
                activeTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-base-content/50 hover:text-base-content/80"
              }`}
            >
              <Icon className="size-3.5" />
              {tab.label}
              {tab.id === "solution" && (
                <span className="badge badge-xs badge-secondary ml-1">New</span>
              )}
            </button>
          );
        })}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        {activeTab === "description" && (
          <>
            <p className="text-sm leading-relaxed text-base-content/90">{problem.description.text}</p>

            {/* Examples */}
            <div className="space-y-3">
              {problem.examples.map((example, i) => (
                <div key={i} className="bg-base-200 rounded-lg p-3 space-y-2">
                  <div className="text-xs font-medium text-base-content/50">Example {i + 1}:</div>
                  {example.input && (
                    <div>
                      <div className="text-xs text-base-content/50 mb-1">Input:</div>
                      <pre className="bg-base-300 text-xs p-2 rounded overflow-x-auto">{example.input}</pre>
                    </div>
                  )}
                  {example.output && (
                    <div>
                      <div className="text-xs text-base-content/50 mb-1">Output:</div>
                      <pre className="bg-base-300 text-xs p-2 rounded overflow-x-auto">{example.output}</pre>
                    </div>
                  )}
                  {example.explanation && (
                    <div>
                      <div className="text-xs text-base-content/50 mb-1">Explanation:</div>
                      <p className="text-xs text-base-content/70">{example.explanation}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Constraints */}
            {problem.constraints && problem.constraints.length > 0 && (
              <div>
                <div className="text-xs font-medium text-base-content/50 mb-2">Constraints:</div>
                <ul className="space-y-1">
                  {problem.constraints.map((c, i) => (
                    <li key={i} className="text-xs text-base-content/70 flex gap-2">
                      <span className="text-base-content/30">•</span>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </>
        )}

        {activeTab === "hints" && (
          <div className="space-y-3">
            {hints && hints.length > 0 ? (
              hints.map((hint, i) => (
                <div key={i} className="bg-base-200 rounded-lg p-3">
                  <div className="text-xs font-medium text-primary mb-1.5">Hint {i + 1}</div>
                  <p className="text-sm text-base-content/80">{hint}</p>
                </div>
              ))
            ) : (
              <p className="text-sm text-base-content/50">No hints available for this problem yet.</p>
            )}
          </div>
        )}

        {activeTab === "notes" && (
          <div className="space-y-2">
            <p className="text-xs text-base-content/50">
              Write your thoughts, approach, or observations about this problem.
            </p>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Start taking notes..."
              className="textarea textarea-bordered w-full h-64 text-sm font-mono bg-base-200 focus:bg-base-100 transition-colors resize-none"
            />
            <p className="text-xs text-base-content/30 text-right">
              Notes are saved automatically
            </p>
          </div>
        )}

        {activeTab === "solution" && solution && (
          <div className="space-y-3">
            {!showSolution && (
              <div className="bg-base-200 rounded-lg p-3 text-sm text-base-content/60">
                <p>You have {5 - failedCount} more failed attempt{failedCount !== 4 ? "s" : ""} before the solution is revealed.</p>
              </div>
            )}
            {showSolution && (
              <>
                <div className="flex items-center gap-2 text-xs text-base-content/50">
                  <CodeIcon className="size-3.5" />
                  Reference solution (JavaScript)
                </div>
                <div className="relative">
                  <pre className="bg-[#1e1e2e] text-sm leading-relaxed rounded-xl p-4 overflow-x-auto">
                    <code className="text-gray-200">{solution}</code>
                  </pre>
                </div>
              </>
            )}
          </div>
        )}

        {activeTab === "solution" && !solution && (
          <p className="text-sm text-base-content/50">Solution not available for this problem.</p>
        )}
      </div>
    </div>
  );
}

export default ProblemDescription;
