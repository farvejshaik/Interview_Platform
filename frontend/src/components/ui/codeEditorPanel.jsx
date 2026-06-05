import { useRef, useState, useEffect } from "react";
import Editor from "@monaco-editor/react";
import { Loader2Icon, PlayIcon, PauseIcon, ClockIcon, ZoomInIcon, ZoomOutIcon, SunIcon, MoonIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../../data/problems";
import { useTheme } from "../../lib/useTheme";

const TALENTFORGE_THEME = {
  base: "vs-dark",
  inherit: true,
  rules: [
    { token: "comment", foreground: "8b949e", fontStyle: "italic" },
    { token: "keyword", foreground: "ff7b72" },
    { token: "keyword.control", foreground: "ff7b72" },
    { token: "keyword.operator", foreground: "ff7b72" },
    { token: "keyword.other", foreground: "ff7b72" },
    { token: "storage", foreground: "ff7b72" },
    { token: "storage.type", foreground: "ff7b72" },
    { token: "string", foreground: "a5d6ff" },
    { token: "string.quoted", foreground: "a5d6ff" },
    { token: "string.template", foreground: "a5d6ff" },
    { token: "number", foreground: "d2a8ff" },
    { token: "constant", foreground: "d2a8ff" },
    { token: "constant.numeric", foreground: "d2a8ff" },
    { token: "type", foreground: "79c0ff" },
    { token: "type.identifier", foreground: "79c0ff" },
    { token: "function", foreground: "d2a8ff" },
    { token: "function.declaration", foreground: "d2a8ff" },
    { token: "variable", foreground: "e6edf3" },
    { token: "variable.parameter", foreground: "ffa657" },
    { token: "variable.language", foreground: "ff7b72" },
    { token: "tag", foreground: "7ee787" },
    { token: "attribute", foreground: "79c0ff" },
    { token: "delimiter", foreground: "e6edf3" },
    { token: "delimiter.html", foreground: "e6edf3" },
    { token: "metatag", foreground: "7ee787" },
    { token: "metatag.content", foreground: "a5d6ff" },
    { token: "operator", foreground: "ff7b72" },
    { token: "operator.sql", foreground: "ff7b72" },
    { token: "property", foreground: "79c0ff" },
  ],
  colors: {
    "editor.background": "#0d1117",
    "editor.foreground": "#e6edf3",
    "editor.lineHighlightBackground": "#161b22",
    "editor.selectionBackground": "#264f78",
    "editor.inactiveSelectionBackground": "#264f7866",
    "editorCursor.foreground": "#ff7b72",
    "editorLineNumber.foreground": "#6e7681",
    "editorLineNumber.activeForeground": "#e6edf3",
    "editor.selectionHighlightBackground": "#3b3b3b",
    "editorBracketMatch.background": "#2a2a2a",
    "editorBracketMatch.border": "#ff7b72",
    "editorGutter.background": "#0d1117",
    "editorWidget.background": "#161b22",
    "editorWidget.border": "#30363d",
    "input.background": "#0d1117",
    "input.foreground": "#e6edf3",
    "input.border": "#30363d",
    "focusBorder": "#ff7b72",
    "list.activeSelectionBackground": "#30363d",
    "list.hoverBackground": "#21262d",
    "editorIndentGuide.background": "#21262d",
    "editorIndentGuide.activeBackground": "#30363d",
    "editorBracketHighlight.foreground1": "#ff7b72",
    "editorBracketHighlight.foreground2": "#d2a8ff",
    "editorBracketHighlight.foreground3": "#a5d6ff",
    "editorBracketHighlight.foreground4": "#79c0ff",
    "editorBracketHighlight.foreground5": "#7ee787",
    "editorBracketHighlight.foreground6": "#ffa657",
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

function ThemeToggle({ theme, toggleTheme }) {
  return (
    <button
      onClick={toggleTheme}
      className="flex h-8 w-8 items-center justify-center rounded-full border border-base-content/3 bg-base-100/30 text-base-content hover:bg-base-200 transition-colors cursor-pointer"
      aria-label="Toggle Theme"
    >
      {theme === "talentforge-light" ? (
        <MoonIcon className="h-4 w-4 text-primary" />
      ) : (
        <SunIcon className="h-4 w-4 text-warning" />
      )}
    </button>
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
  const { theme, toggleTheme } = useTheme();
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
          <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
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
            folding: true,
            foldingHighlight: true,
            foldingStrategy: "indentation",
            autoClosingBrackets: "always",
            autoClosingQuotes: "always",
            autoIndent: "full",
            formatOnPaste: true,
            matchBrackets: "always",
            renderLineHighlight: "all",
            renderIndentGuides: true,
            guides: { indentation: true, bracketPairs: true },
            bracketPairColorization: { enabled: true },
            suggestOnTriggerCharacters: true,
            acceptSuggestionOnEnter: "on",
            tabCompletion: "on",
            wordBasedSuggestions: "currentDocument",
            parameterHints: { enabled: true },
            smoothScrolling: true,
            cursorBlinking: "smooth",
            cursorSmoothCaretAnimation: "on",
            cursorStyle: "line",
          }}
        />
      </div>
    </div>
  );
}
export default CodeEditorPanel;
