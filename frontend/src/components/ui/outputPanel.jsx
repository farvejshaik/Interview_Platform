import { TerminalIcon, XIcon } from "lucide-react";

function OutputPanel({ output, onClose }) {
  const outputText = output?.output || output?.error || null;

  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 bg-base-100 border-t border-base-300">
        <div className="flex items-center gap-2">
          <TerminalIcon className="size-4 text-base-content/60" />
          <span className="text-xs font-medium text-base-content/60">Output</span>
        </div>
        {onClose && (
          <button className="btn btn-ghost btn-xs" onClick={onClose} title="Close Output">
            <XIcon className="size-3" />
          </button>
        )}
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {output === null ? (
          <p className="text-sm text-base-content/40 italic">Run your code to see output here</p>
        ) : (
          <>
            <div>
              <p className="text-xs font-medium text-base-content/50 mb-1">Your Output:</p>
              {output.success ? (
                <pre className="text-sm text-success font-mono whitespace-pre-wrap">{outputText}</pre>
              ) : (
                <pre className="text-sm text-error font-mono whitespace-pre-wrap">{outputText}</pre>
              )}
            </div>
            {output.expected && (
              <div>
                <p className="text-xs font-medium text-base-content/50 mb-1">Expected:</p>
                <pre className="text-sm text-warning font-mono whitespace-pre-wrap">{output.expected}</pre>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default OutputPanel;
