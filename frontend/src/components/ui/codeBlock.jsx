import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

const theme = {
  'code[class*="language-"]': {
    color: "#e6edf3",
    background: "none",
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
    fontSize: "0.8125rem",
    textShadow: "none",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.6",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
  },
  'pre[class*="language-"]': {
    color: "#e6edf3",
    background: "#0d1117",
    fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
    fontSize: "0.8125rem",
    textShadow: "none",
    direction: "ltr",
    textAlign: "left",
    whiteSpace: "pre",
    wordSpacing: "normal",
    wordBreak: "normal",
    lineHeight: "1.6",
    MozTabSize: "2",
    OTabSize: "2",
    tabSize: "2",
    WebkitHyphens: "none",
    MozHyphens: "none",
    msHyphens: "none",
    hyphens: "none",
    padding: "1rem",
    margin: "0",
    overflow: "auto",
    borderRadius: "0.75rem",
    border: "1px solid #30363d",
  },
  comment: {
    color: "#8b949e",
    fontStyle: "italic",
  },
  prolog: {
    color: "#8b949e",
  },
  doctype: {
    color: "#8b949e",
  },
  cdata: {
    color: "#8b949e",
  },
  punctuation: {
    color: "#e6edf3",
  },
  property: {
    color: "#79c0ff",
  },
  tag: {
    color: "#7ee787",
  },
  boolean: {
    color: "#d2a8ff",
  },
  number: {
    color: "#d2a8ff",
  },
  constant: {
    color: "#d2a8ff",
  },
  symbol: {
    color: "#d2a8ff",
  },
  selector: {
    color: "#7ee787",
  },
  "attr-name": {
    color: "#79c0ff",
  },
  string: {
    color: "#a5d6ff",
  },
  char: {
    color: "#a5d6ff",
  },
  builtin: {
    color: "#ffa657",
  },
  inserted: {
    color: "#7ee787",
  },
  variable: {
    color: "#e6edf3",
  },
  operator: {
    color: "#ff7b72",
  },
  entity: {
    color: "#d2a8ff",
    cursor: "help",
  },
  url: {
    color: "#a5d6ff",
  },
  "language-css": {
    color: "#79c0ff",
  },
  "language-javascript": {
    color: "#e6edf3",
  },
  "language-json": {
    color: "#e6edf3",
  },
  "language-html": {
    color: "#e6edf3",
  },
  atrule: {
    color: "#ff7b72",
  },
  "attr-value": {
    color: "#a5d6ff",
  },
  keyword: {
    color: "#ff7b72",
  },
  function: {
    color: "#d2a8ff",
  },
  regex: {
    color: "#a5d6ff",
  },
  important: {
    color: "#ff7b72",
    fontWeight: "bold",
  },
  bold: {
    fontWeight: "bold",
  },
  italic: {
    fontStyle: "italic",
  },
  deleted: {
    color: "#ff7b72",
  },
};

function CodeBlock({ code, language = "javascript", showLineNumbers = false, className = "" }) {
  if (!code) return null;

  return (
    <div className={`code-block-wrapper ${className}`}>
      <SyntaxHighlighter
        style={theme}
        language={language}
        showLineNumbers={showLineNumbers}
        wrapLines={false}
        customStyle={{
          margin: 0,
          borderRadius: "0.75rem",
          border: "1px solid #30363d",
          background: "#0d1117",
        }}
        codeTagProps={{
          style: {
            fontFamily: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
          },
        }}
      >
        {code}
      </SyntaxHighlighter>
    </div>
  );
}

export default CodeBlock;
