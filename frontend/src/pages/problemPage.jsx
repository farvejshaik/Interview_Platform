import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router";
import { FileTextIcon, CodeIcon, TerminalIcon } from "lucide-react";
import { PROBLEMS } from "../data/problems";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import ProblemDescription from "../components/ui/problemDescription";
import OutputPanel from "../components/ui/outputPanel";
import CodeEditorPanel from "../components/ui/codeEditorPanel";
import { executeCode } from "../lib/piston";

import toast from "react-hot-toast";
import confetti from "canvas-confetti";

function ProblemWorkspace({ problem, problemId, onProblemChange, allProblems }) {
  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(problem.starterCode.javascript);
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [failedCount, setFailedCount] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [mobileTab, setMobileTab] = useState("code");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    setFailedCount(0);
  }, [problemId]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    setCode(problem.starterCode[newLang]);
    setOutput(null);
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.2, y: 0.6 },
    });
    confetti({
      particleCount: 80,
      spread: 250,
      origin: { x: 0.8, y: 0.6 },
    });
  };

  const normalizeOutput = (output) => {
    if (!output) return "";
    return output
      .replace(/\r\n/g, "\n")
      .replace(/\r/g, "\n")
      .trim()
      .split("\n")
      .map((line) =>
        line
          .trim()
          .replace(/\[\s+/g, "[")
          .replace(/\s+\]/g, "]")
          .replace(/\s*,\s*/g, ",")
      )
      .filter((line) => line.length > 0)
      .join("\n");
  };

  const checkIfTestsPassed = (actualOutput, expectedOutput) => {
    const normalizedActual = normalizeOutput(actualOutput);
    const normalizedExpected = normalizeOutput(expectedOutput);
    return normalizedActual === normalizedExpected;
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setShowOutput(true);
    setOutput(null);
    if (isMobile) setMobileTab("code");

    const result = await executeCode(selectedLanguage, code);
    setIsRunning(false);

    if (result.success) {
      const expectedOutput = problem.expectedOutput[selectedLanguage];
      const testsPassed = checkIfTestsPassed(result.output, expectedOutput);

      if (testsPassed) {
        setOutput(result);
        triggerConfetti();
        toast.success("All tests passed! Great job!");
      } else {
        setOutput({ ...result, expected: expectedOutput });
        if (code !== problem.starterCode[selectedLanguage]) {
          setFailedCount((prev) => prev + 1);
        }
        toast("Output does not match expected");
      }
    } else {
      setOutput(result);
      toast.error("Code execution failed!");
    }
  };

  const MOBILE_TABS = [
    { id: "description", label: "Description", icon: FileTextIcon },
    { id: "code", label: "Code", icon: CodeIcon },
    { id: "output", label: "Output", icon: TerminalIcon },
  ];

  return isMobile ? (
    <div className="h-full flex flex-col">
      <div className="flex border-b border-base-300 bg-base-200/50 shrink-0">
        {MOBILE_TABS.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setMobileTab(tab.id)}
              className={`flex items-center gap-1.5 px-4 py-2.5 text-xs font-medium border-b-2 transition-colors ${
                mobileTab === tab.id
                  ? "border-primary text-primary"
                  : "border-transparent text-base-content/50"
              }`}
            >
              <Icon className="size-3.5" />
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="flex-1 overflow-hidden">
        {mobileTab === "description" && (
          <ProblemDescription
            problem={problem}
            currentProblemId={problemId}
            onProblemChange={onProblemChange}
            allProblems={allProblems}
            failedCount={failedCount}
          />
        )}
        {mobileTab === "code" && (
          <div className="h-full flex flex-col">
            <div className="flex-1 overflow-hidden">
              <CodeEditorPanel
                selectedLanguage={selectedLanguage}
                code={code}
                isRunning={isRunning}
                onLanguageChange={handleLanguageChange}
                onCodeChange={setCode}
                onRunCode={handleRunCode}
              />
            </div>
            {showOutput && (
              <div className="h-1/2 border-t border-base-300 overflow-hidden">
                <OutputPanel output={output} onClose={() => setShowOutput(false)} />
              </div>
            )}
          </div>
        )}
        {mobileTab === "output" && (
          <div className="h-full">
            <OutputPanel output={output} onClose={null} />
          </div>
        )}
      </div>
    </div>
  ) : (
    <PanelGroup direction="horizontal">
      <Panel defaultSize={40} minSize={30}>
        <ProblemDescription
          problem={problem}
          currentProblemId={problemId}
          onProblemChange={onProblemChange}
          allProblems={allProblems}
          failedCount={failedCount}
        />
      </Panel>

      <PanelResizeHandle className="w-2 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

      <Panel defaultSize={60} minSize={30} className="overflow-hidden">
        {showOutput ? (
    <PanelGroup direction="vertical">
            <Panel defaultSize={70} minSize={30} className="overflow-hidden">
              <CodeEditorPanel
                selectedLanguage={selectedLanguage}
                code={code}
                isRunning={isRunning}
                onLanguageChange={handleLanguageChange}
                onCodeChange={setCode}
                onRunCode={handleRunCode}
              />
            </Panel>

      <PanelResizeHandle className="h-2 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

            <Panel defaultSize={30} minSize={15} className="overflow-hidden">
              <OutputPanel output={output} onClose={() => setShowOutput(false)} />
            </Panel>
          </PanelGroup>
        ) : (
          <CodeEditorPanel
            selectedLanguage={selectedLanguage}
            code={code}
            isRunning={isRunning}
            onLanguageChange={handleLanguageChange}
            onCodeChange={setCode}
            onRunCode={handleRunCode}
          />
        )}
      </Panel>
    </PanelGroup>
  );
}

function ProblemPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const problemId = id && PROBLEMS[id] ? id : "two-sum";
  const currentProblem = PROBLEMS[problemId];

  const handleProblemChange = (newProblemId) => navigate(`/problem/${newProblemId}`);

  return (
    <div className="h-screen bg-base-200 flex flex-col">
      <div className="flex-1" key={problemId}>
        <ProblemWorkspace
          problem={currentProblem}
          problemId={problemId}
          onProblemChange={handleProblemChange}
          allProblems={Object.values(PROBLEMS)}
        />
      </div>
    </div>
  );
}

export default ProblemPage;
