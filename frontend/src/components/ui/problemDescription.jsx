import { ChevronLeftIcon, ChevronRightIcon, LightbulbIcon, ListIcon } from "lucide-react";
import { useState } from "react";

function ProblemDescription({ problem, currentProblemId, onProblemChange, allProblems }) {
  const [showNotes, setShowNotes] = useState(false);
  const currentIndex = allProblems.findIndex((p) => p.id === currentProblemId);

  return (
    <div className="h-full bg-base-100 flex flex-col overflow-hidden">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-base-300 bg-base-200">
        <div className="flex items-center gap-2">
          <ListIcon className="size-4 text-base-content/60" />
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

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
        <p className="text-sm leading-relaxed text-base-content/90">{problem.description.text}</p>

        {problem.description.notes && problem.description.notes.length > 0 && (
          <div>
            <button
              className="flex items-center gap-1 text-xs font-medium text-primary hover:underline cursor-pointer"
              onClick={() => setShowNotes(!showNotes)}
            >
              <LightbulbIcon className="size-3" />
              {showNotes ? "Hide" : "Show"} notes
            </button>
            {showNotes && (
              <ul className="mt-2 space-y-1">
                {problem.description.notes.map((note, i) => (
                  <li key={i} className="text-xs text-base-content/70 flex gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>{note}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

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
      </div>
    </div>
  );
}

export default ProblemDescription;
