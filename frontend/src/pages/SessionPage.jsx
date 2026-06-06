import { useUser } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import {
  useEndSession,
  useJoinRequests,
  useAcceptJoin,
  useRejectJoin,
  useRequestJoin,
  useSessionById,
} from "../hooks/useSessions";
import { PROBLEMS } from "../data/problems";
import { executeCode } from "../lib/piston";
import { Panel, PanelGroup, PanelResizeHandle } from "react-resizable-panels";
import { getDifficultyBadgeClass } from "../lib/utils";
import {
  ArrowLeftIcon,
  CheckIcon,
  Loader2Icon,
  PhoneOffIcon,
  UserPlusIcon,
  XIcon,
  FileTextIcon,
  CodeIcon,
  VideoIcon,
  UsersIcon,
} from "lucide-react";
import CodeEditorPanel from "../components/ui/codeEditorPanel";
import OutputPanel from "../components/ui/outputPanel";

import useStreamClient from "../hooks/useStreamClient";
import { StreamCall, StreamVideo } from "@stream-io/video-react-sdk";
import VideoCallUI from "../components/ui/VideoCallUI";

function SessionPage() {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useUser();
  const [output, setOutput] = useState(null);
  const [isRunning, setIsRunning] = useState(false);
  const [inviteCopied, setInviteCopied] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileTab, setMobileTab] = useState("description");

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const MOBILE_TABS = [
    { id: "description", label: "Description", icon: FileTextIcon },
    { id: "code", label: "Code", icon: CodeIcon },
    { id: "video", label: "Video", icon: VideoIcon },
  ];

  const {
    data: sessionData,
    isLoading: loadingSession,
    refetch,
  } = useSessionById(id);

  const endSessionMutation = useEndSession();
  const requestJoinMutation = useRequestJoin();
  const acceptJoinMutation = useAcceptJoin();
  const rejectJoinMutation = useRejectJoin();

  const session = sessionData?.session;
  const isHost = session?.host?.clerkId === user?.id;
  const isParticipant = session?.participant?.clerkId === user?.id;

  const { data: joinRequestsData, refetch: refetchRequests } = useJoinRequests(
    isHost ? id : null,
  );
  const joinRequests = joinRequestsData?.joinRequests || [];
  const pendingRequests = joinRequests.filter((r) => r.status === "pending");

  const { call, channel, chatClient, isInitializingCall, streamClient } =
    useStreamClient(session, loadingSession, isHost, isParticipant);

  const myRequest = session?.joinRequests?.find(
    (r) => r.user?.clerkId === user?.id,
  );
  const hasPendingRequest = myRequest?.status === "pending";
  const wasRejected = myRequest?.status === "rejected";

  const problemData = session?.problem
    ? Object.values(PROBLEMS).find((p) => p.title === session.problem)
    : null;

  const [selectedLanguage, setSelectedLanguage] = useState("javascript");
  const [code, setCode] = useState(
    problemData?.starterCode?.[selectedLanguage] || "",
  );

  useEffect(() => {
    if (!session || loadingSession) return;
    if (session.status === "completed") navigate("/dashboard");
  }, [session, loadingSession, navigate]);

  useEffect(() => {
    if (problemData?.starterCode?.[selectedLanguage]) {
      setCode(problemData.starterCode[selectedLanguage]);
    }
  }, [problemData, selectedLanguage]);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    setSelectedLanguage(newLang);
    const starterCode = problemData?.starterCode?.[newLang] || "";
    setCode(starterCode);
    setOutput(null);
  };

  const handleRunCode = async () => {
    setIsRunning(true);
    setOutput(null);
    const result = await executeCode(selectedLanguage, code);
    setOutput(result);
    setIsRunning(false);
  };

  const handleEndSession = () => {
    if (
      confirm(
        "Are you sure you want to end this session? All participants will be notified.",
      )
    ) {
      endSessionMutation.mutate(id, {
        onSuccess: () => navigate("/dashboard"),
      });
    }
  };

  const handleRequestJoin = () => {
    requestJoinMutation.mutate(id, { onSuccess: refetch });
  };

  const handleAccept = (userId) => {
    acceptJoinMutation.mutate(
      { sessionId: id, userId },
      {
        onSuccess: () => {
          refetch();
          refetchRequests();
        },
      },
    );
  };

  const handleReject = (userId) => {
    rejectJoinMutation.mutate(
      { sessionId: id, userId },
      { onSuccess: refetchRequests },
    );
  };

  const handleCopyInviteLink = () => {
    const link = `${window.location.origin}/session/${id}`;
    navigator.clipboard.writeText(link);
    setInviteCopied(true);
    setTimeout(() => setInviteCopied(false), 2000);
  };

  const renderVideoCall = () => {
    if (isInitializingCall) {
      return (
        <div className="h-full flex items-center justify-center">
          <div className="text-center">
            <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
            <p className="text-lg">Connecting to video call...</p>
          </div>
        </div>
      );
    }

    if (!streamClient || !call) {
      return (
        <div className="h-full flex items-center justify-center">
          <div className="card bg-base-100 shadow-xl max-w-md">
            <div className="card-body items-center text-center">
              <div className="w-24 h-24 bg-error/10 rounded-full flex items-center justify-center mb-4">
                <PhoneOffIcon className="w-12 h-12 text-error" />
              </div>
              <h2 className="card-title text-2xl">Connection Failed</h2>
              <p className="text-base-content/70">
                Unable to connect to the video call
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full">
        <StreamVideo client={streamClient}>
          <StreamCall call={call}>
            <VideoCallUI chatClient={chatClient} channel={channel} isHost={isHost} onEndSession={handleEndSession} isEndingSession={endSessionMutation.isPending} onCopyLink={handleCopyInviteLink} inviteCopied={inviteCopied} />
          </StreamCall>
        </StreamVideo>
      </div>
    );
  };

  const renderJoinRequestNotifications = () => {
    if (pendingRequests.length === 0) return null;

    return (
      <div className="fixed top-16 right-4 z-50 space-y-2 max-w-xs">
        {pendingRequests.map((req) => (
          <div
            key={req.user?._id}
            className="card bg-base-100 shadow-xl border border-base-300"
            style={{
              animation: "slideInRight 0.3s ease-out",
            }}
          >
            <div className="card-body p-3">
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="avatar">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center">
                    {req.user?.profileImage ? (
                      <img src={req.user.profileImage} alt="" className="rounded-full" />
                    ) : (
                      <span className="text-sm font-bold text-primary">
                        {req.user?.name?.[0] || "?"}
                      </span>
                    )}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium leading-tight">{req.user?.name || "Unknown"}</p>
                  <p className="text-xs text-base-content/50">wants to join</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleAccept(req.user?._id)}
                  disabled={acceptJoinMutation.isPending}
                  className="btn btn-success btn-xs flex-1 gap-1"
                >
                  <CheckIcon className="size-3" /> Accept
                </button>
                <button
                  onClick={() => handleReject(req.user?._id)}
                  disabled={rejectJoinMutation.isPending}
                  className="btn btn-error btn-xs flex-1 gap-1"
                >
                  <XIcon className="size-3" /> Reject
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderVideoPanelContent = () => {
    if (loadingSession) {
      return (
        <div className="h-full flex items-center justify-center">
          <Loader2Icon className="w-8 h-8 animate-spin text-primary" />
        </div>
      );
    }

    if (isHost) {
      return <div className="h-full">{renderVideoCall()}</div>;
    }

    if (isParticipant) {
      return <div className="h-full">{renderVideoCall()}</div>;
    }

    if (wasRejected) {
      return (
        <div className="h-full flex items-center justify-center p-4">
          <div className="card bg-base-100 shadow-xl max-w-md w-full">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-error/10 rounded-full flex items-center justify-center mb-3">
                <XIcon className="w-8 h-8 text-error" />
              </div>
              <h2 className="card-title">Request Rejected</h2>
              <p className="text-sm text-base-content/70">
                The host declined your request to join this session.
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (hasPendingRequest) {
      return (
        <div className="h-full flex items-center justify-center p-4">
          <div className="card bg-base-100 shadow-xl max-w-md w-full">
            <div className="card-body items-center text-center">
              <Loader2Icon className="w-12 h-12 animate-spin text-primary mb-3" />
              <h2 className="card-title">Request Sent</h2>
              <p className="text-sm text-base-content/70">
                Waiting for the host to accept your request...
              </p>
            </div>
          </div>
        </div>
      );
    }

    if (session?.participant) {
      return (
        <div className="h-full flex items-center justify-center p-4">
          <div className="card bg-base-100 shadow-xl max-w-md w-full">
            <div className="card-body items-center text-center">
              <div className="w-16 h-16 bg-warning/10 rounded-full flex items-center justify-center mb-3">
                <UserPlusIcon className="w-8 h-8 text-warning" />
              </div>
              <h2 className="card-title">Session Full</h2>
              <p className="text-sm text-base-content/70">
                This session already has a participant.
              </p>
            </div>
          </div>
        </div>
      );
    }

    return (
      <div className="h-full flex items-center justify-center p-4">
        <div className="card bg-base-100 shadow-xl max-w-md w-full">
          <div className="card-body items-center text-center">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-3">
              <UserPlusIcon className="w-8 h-8 text-primary" />
            </div>
            <h2 className="card-title">Join This Session</h2>
            <p className="text-sm text-base-content/70 mb-4">
              Send a request to the host to join this coding interview session.
            </p>
            <button
              onClick={handleRequestJoin}
              disabled={requestJoinMutation.isPending}
              className="btn btn-primary gap-2"
            >
              {requestJoinMutation.isPending ? (
                <Loader2Icon className="size-4 animate-spin" />
              ) : (
                <UserPlusIcon className="size-4" />
              )}
              Request to Join
            </button>
          </div>
        </div>
      </div>
    );
  };

  const renderDescriptionBody = () => (
    <div className="p-2.5 space-y-2.5 text-sm">
      {problemData?.description && (
        <div className="bg-base-100 rounded-lg shadow-sm p-2.5 border border-base-300">
          <p className="text-xs text-base-content/90 leading-relaxed">
            {problemData.description.text}
          </p>
          {problemData.description.notes?.map((note, idx) => (
            <p key={idx} className="text-xs text-base-content/90 mt-1">
              {note}
            </p>
          ))}
        </div>
      )}

      {problemData?.examples && problemData.examples.length > 0 && (
        <div className="bg-base-100 rounded-lg shadow-sm p-2.5 border border-base-300">
          <h3 className="font-bold text-xs mb-1.5">Examples</h3>
          {problemData.examples.map((example, idx) => (
            <div
              key={idx}
              className="bg-base-200 rounded p-2 font-mono text-[11px] space-y-0.5 mb-1.5 last:mb-0"
            >
              <div className="flex gap-1.5">
                <span className="text-primary font-bold">In:</span>
                <span>{example.input}</span>
              </div>
              <div className="flex gap-1.5">
                <span className="text-secondary font-bold">Out:</span>
                <span>{example.output}</span>
              </div>
              {example.explanation && (
                <p className="text-base-content/60 font-sans text-[10px] pt-1 border-t border-base-300 mt-1">
                  <span className="font-semibold">Why:</span>{" "}
                  {example.explanation}
                </p>
              )}
            </div>
          ))}
        </div>
      )}

      {problemData?.constraints && problemData.constraints.length > 0 && (
        <div className="bg-base-100 rounded-lg shadow-sm p-2.5 border border-base-300">
          <h3 className="font-bold text-xs mb-1">Constraints</h3>
          <ul className="space-y-0.5 text-[11px] text-base-content/90">
            {problemData.constraints.map((c, i) => (
              <li key={i} className="flex gap-1">
                <span className="text-primary">&bull;</span>
                <code>{c}</code>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );

  const renderDescriptionPanel = () => (
    <div className="h-full overflow-y-auto bg-base-200">
      {renderDescriptionBody()}
    </div>
  );

  const renderEditorPanel = () => (
    <PanelGroup direction="vertical">
      <Panel defaultSize={70} minSize={30}>
        <CodeEditorPanel
          selectedLanguage={selectedLanguage}
          code={code}
          isRunning={isRunning}
          onLanguageChange={handleLanguageChange}
          onCodeChange={(value) => setCode(value)}
          onRunCode={handleRunCode}
        />
      </Panel>

      <PanelResizeHandle className="h-1.5 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

      <Panel defaultSize={30} minSize={15}>
        <OutputPanel output={output} />
      </Panel>
    </PanelGroup>
  );

  return (
    <div className="h-screen bg-base-100 flex flex-col">
      <div className="flex items-center gap-3 px-3 py-2 bg-base-200 border-b border-base-300 shrink-0">
        <button
          onClick={() => navigate("/dashboard")}
          className="flex items-center gap-1 rounded-lg bg-base-300 px-2.5 py-1.5 text-xs text-base-content/70 hover:text-base-content transition-colors"
        >
          <ArrowLeftIcon className="size-3.5" />
          Back
        </button>
        <div className="flex items-center gap-2 min-w-0">
          <h1 className="text-sm font-semibold text-base-content truncate">
            {session?.problem || "Loading..."}
          </h1>
          {problemData?.category && (
            <span className="text-[11px] text-base-content/50 hidden sm:inline">
              {problemData.category}
            </span>
          )}
        </div>
        <div className="flex items-center gap-1.5 ml-auto shrink-0">
          <span
            className={`badge badge-sm ${getDifficultyBadgeClass(
              session?.difficulty,
            )}`}
          >
            {session?.difficulty?.slice(0, 1).toUpperCase() +
              session?.difficulty?.slice(1) || "Easy"}
          </span>
          <UsersIcon className="size-4 text-base-content/40" />
        </div>
      </div>

      {isMobile ? (
        <div className="flex-1 flex flex-col overflow-hidden">
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
              <div className="h-full overflow-y-auto bg-base-200">
                {renderDescriptionBody()}
              </div>
            )}
            {mobileTab === "code" && (
              <div className="h-full flex flex-col">
                <div className="flex-1 overflow-hidden">
                  <CodeEditorPanel
                    selectedLanguage={selectedLanguage}
                    code={code}
                    isRunning={isRunning}
                    onLanguageChange={handleLanguageChange}
                    onCodeChange={(value) => setCode(value)}
                    onRunCode={handleRunCode}
                  />
                </div>
                {output && (
                  <div className="h-1/2 border-t border-base-300 overflow-hidden">
                    <OutputPanel output={output} />
                  </div>
                )}
              </div>
            )}
            {mobileTab === "video" && (
              <div className="h-full bg-base-100 overflow-hidden">
                {renderVideoPanelContent()}
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="flex-1 relative overflow-hidden">
          <div
            className="absolute inset-0"
            style={{ animation: "fadeIn 0.2s ease-out" }}
          >
            <PanelGroup direction="horizontal">
              <Panel defaultSize={50} minSize={30}>
                <PanelGroup direction="vertical">
                  <Panel defaultSize={55} minSize={20}>
                    {renderDescriptionPanel()}
                  </Panel>

                  <PanelResizeHandle className="h-1.5 bg-base-300 hover:bg-primary transition-colors cursor-row-resize" />

                  <Panel defaultSize={45} minSize={15}>
                    {renderEditorPanel()}
                  </Panel>
                </PanelGroup>
              </Panel>

              <PanelResizeHandle className="w-1.5 bg-base-300 hover:bg-primary transition-colors cursor-col-resize" />

              <Panel defaultSize={50} minSize={25}>
                <div className="h-full bg-base-100 overflow-hidden">
                  {renderVideoPanelContent()}
                </div>
              </Panel>
            </PanelGroup>
          </div>
        </div>
      )}

      {isHost && renderJoinRequestNotifications()}
    </div>
  );
}

export default SessionPage;
