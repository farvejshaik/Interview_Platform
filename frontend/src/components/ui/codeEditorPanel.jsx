import { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon, PauseIcon, ClockIcon, ZoomInIcon, ZoomOutIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../../data/problems";

const TALENTFORGE_THEME = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "6b7280", fontStyle: "italic" },
    { token: "keyword", foreground: "8b5cf6" },
    { token: "string", foreground: "a78bfa" },
    { token: "number", foreground: "c084fc" },
    { token: "type", foreground: "8b5cf6" },
    { token: "function", foreground: "a78bfa" },
    { token: "variable", foreground: "f4f4f5" },
    { token: "constant", foreground: "c084fc" },
    { token: "operator", foreground: "8b5cf6" },
    { token: "tag", foreground: "8b5cf6" },
    { token: "attribute", foreground: "a78bfa" },
    { token: "delimiter", foreground: "f4f4f5" },
  ],
  colors: {
    "editor.background": "#07020d",
    "editor.foreground": "#f4f4f5",
    "editor.lineHighlightBackground": "#120721",
    "editor.selectionBackground": "#220f3a",
    "editor.inactiveSelectionBackground": "#1a0d2e",
    "editorCursor.foreground": "#8b5cf6",
    "editorLineNumber.foreground": "#4a4a5a",
    "editorLineNumber.activeForeground": "#8b5cf6",
    "editor.selectionHighlightBackground": "#220f3a80",
    "editorBracketMatch.background": "#220f3a",
    "editorBracketMatch.border": "#8b5cf6",
    "editorGutter.background": "#07020d",
    "editorWidget.background": "#120721",
    "editorWidget.border": "#220f3a",
    "input.background": "#120721",
    "input.foreground": "#f4f4f5",
    "input.border": "#220f3a",
    "focusBorder": "#8b5cf6",
    "list.activeSelectionBackground": "#220f3a",
    "list.hoverBackground": "#120721",
  },
};

function Stopwatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    if (!running) return;
    const interval = setInterval(() => setTime((t) => t + 1), 1000);
    return () => clearInterval(interval);
  }, [running]);

  const minutes = String(Math.floor(time / 60)).padStart(2, "0");
  const seconds = String(time % 60).padStart(2, "0");

  const handleReset = () => {
    setRunning(false);
    setTime(0);
  };

  return (
    <div className="flex items-center gap-1.5 text-sm font-mono text-base-content/60">
      <ClockIcon className="size-3.5" />
      <span className="min-w-[45px] text-right">{minutes}:{seconds}</span>
      {running ? (
        <button className="btn btn-ghost btn-xs p-0.5" onClick={() => setRunning(false)} title="Pause">
          <PauseIcon className="size-3" />
        </button>
      ) : (
        <button className="btn btn-ghost btn-xs p-0.5" onClick={() => setRunning(true)} title="Start">
          <PlayIcon className="size-3" />
        </button>
      )}
      {time > 0 && !running && (
        <button className="btn btn-ghost btn-xs p-0.5" onClick={handleReset} title="Reset">
          <svg className="size-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="1 4 1 10 7 10" />
            <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10" />
          </svg>
        </button>
      )}
    </div>
  );
}

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  const editorRef = useRef(null);
  const [fontSize, setFontSize] = useState(() => {
    const saved = localStorage.getItem("editor-font-size");
    return saved ? parseInt(saved) : 16;
  });

  useEffect(() => {
    localStorage.setItem("editor-font-size", fontSize);
  }, [fontSize]);

  const handleBeforeMount = (monaco) => {
    monaco.editor.defineTheme("talentforge-dark", TALENTFORGE_THEME);
  };

  const handleMount = (editor, monaco) => {
    editorRef.current = editor;
    monaco.editor.setTheme("talentforge-dark");
  };

  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        <div className="flex items-center gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-6"
          />
          <select className="select select-sm" value={selectedLanguage} onChange={onLanguageChange}>
            {Object.values(LANGUAGE_CONFIG).map((lang) => (
              <option key={lang.value} value={lang.value}>
                {lang.name}
              </option>
            ))}
          </select>
          <div className="flex items-center gap-1 ml-2 border-l border-base-300 pl-3">
            <button
              className="btn btn-ghost btn-xs btn-square"
              onClick={() => setFontSize((s) => Math.max(10, s - 1))}
              disabled={fontSize <= 10}
              title="Decrease font size"
            >
              <ZoomOutIcon className="size-3.5" />
            </button>
            <span className="text-xs font-mono text-base-content/60 min-w-[20px] text-center">{fontSize}</span>
            <button
              className="btn btn-ghost btn-xs btn-square"
              onClick={() => setFontSize((s) => Math.min(30, s + 1))}
              disabled={fontSize >= 30}
              title="Increase font size"
            >
              <ZoomInIcon className="size-3.5" />
            </button>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Stopwatch />
          <button className="btn btn-primary btn-sm gap-2" disabled={isRunning} onClick={onRunCode}>
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin" />
              Running...
            </>
          ) : (
            <>
              <PlayIcon className="size-4" />
              Run Code
            </>
          )}
        </button>
      </div>
      </div>

      <div className="flex-1">
        <Editor
          height={"100%"}
          language={LANGUAGE_CONFIG[selectedLanguage].monaco}
          value={code}
          onChange={onCodeChange}
          theme="talentforge-dark"
          beforeMount={handleBeforeMount}
          onMount={handleMount}
          options={{
            fontSize,
            lineNumbers: "on",
            scrollBeyondLastLine: false,
            automaticLayout: true,
            minimap: { enabled: false },
            padding: { top: 12 },
          }}
        />
      </div>
    </div>
  );
}
export default CodeEditorPanel;
