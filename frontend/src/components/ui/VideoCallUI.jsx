import {
  CallControls,
  CallingState,
  ParticipantView,
  useCallStateHooks,
} from "@stream-io/video-react-sdk";
import { CheckIcon, CopyIcon, Loader2Icon, LogOutIcon, MessageSquareIcon, UsersIcon, XIcon } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router";
import {
  Channel,
  Chat,
  MessageComposer,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "stream-chat-react/dist/css/index.css";

function VideoCallUI({ chatClient, channel, isHost, onEndSession, isEndingSession, onCopyLink, inviteCopied }) {
  const navigate = useNavigate();
  const { useCallCallingState, useParticipantCount, useParticipants, useHasOngoingScreenShare } =
    useCallStateHooks();
  const callingState = useCallCallingState();
  const participantCount = useParticipantCount();
  const participants = useParticipants();
  const hasOngoingScreenShare = useHasOngoingScreenShare();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const screenSharers = participants.filter(
    (p) => p.publishedTracks?.includes(3),
  );
  const hasScreenShare = hasOngoingScreenShare && screenSharers.length > 0;

  if (callingState === CallingState.JOINING) {
    return (
      <div className="h-full flex items-center justify-center">
        <div className="text-center">
          <Loader2Icon className="w-12 h-12 mx-auto animate-spin text-primary mb-4" />
          <p className="text-lg">Joining call...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-full flex gap-3 relative str-video">
      <div className="flex-1 flex flex-col gap-3 min-w-0">
        <div className="flex items-center justify-between gap-2 bg-base-200/80 p-3 rounded-lg shadow shrink-0">
          <div className="flex items-center gap-2">
            <UsersIcon className="w-5 h-5 text-primary" />
            <span className="font-semibold">
              {participantCount}{" "}
              {participantCount === 1 ? "participant" : "participants"}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <button onClick={onCopyLink} className="btn btn-ghost btn-sm gap-1.5">
              {inviteCopied ? (
                <><CheckIcon className="size-4" /> Copied</>
              ) : (
                <><CopyIcon className="size-4" /> Copy Link</>
              )}
            </button>
            {isHost && (
              <button
                onClick={onEndSession}
                disabled={isEndingSession}
                className="btn btn-error btn-sm gap-1.5"
              >
                {isEndingSession ? (
                  <Loader2Icon className="size-4 animate-spin" />
                ) : (
                  <LogOutIcon className="size-4" />
                )}
                End
              </button>
            )}
            {chatClient && channel && (
              <button
                onClick={() => setIsChatOpen(!isChatOpen)}
                className={`btn btn-sm gap-2 ${isChatOpen ? "btn-primary" : "btn-ghost"}`}
              >
                <MessageSquareIcon className="size-4" />
                Chat
              </button>
            )}
          </div>
        </div>

        <div className="flex-1 bg-base-300 rounded-lg overflow-hidden relative min-h-0 flex gap-1 p-1">
          {hasScreenShare ? (
            <>
              <div className="flex-1 rounded overflow-hidden bg-black min-h-0">
                <ParticipantView
                  participant={screenSharers[0]}
                  trackType="screenShareTrack"
                />
              </div>
              <div className="w-40 lg:w-56 shrink-0 flex flex-col gap-1 overflow-y-auto">
                {participants.map((p) => (
                  <div key={p.sessionId} className="aspect-video rounded overflow-hidden bg-black/50 shrink-0">
                    <ParticipantView participant={p} />
                  </div>
                ))}
              </div>
            </>
          ) : (
            <div className={`flex-1 p-1 ${participants.length <= 1 ? "flex items-center justify-center" : "grid grid-cols-2 gap-1"}`}>
              {participants.length === 0 ? (
                <div className="flex items-center justify-center text-base-content/40 text-sm">
                  No participants yet
                </div>
              ) : (
                participants.length === 1 ? (
                  <div className="w-full max-w-lg aspect-video">
                    <ParticipantView participant={participants[0]} />
                  </div>
                ) : (
                  participants.map((p) => (
                    <ParticipantView key={p.sessionId} participant={p} />
                  ))
                )
              )}
            </div>
          )}
        </div>

        <div className="bg-base-200/80 p-3 rounded-lg shadow flex justify-center shrink-0">
          <CallControls onLeave={() => navigate("/dashboard")} />
        </div>
      </div>

      {chatClient && channel && isChatOpen && (
        <div className="absolute right-0 top-0 bottom-0 w-80 z-20 flex flex-col rounded-lg shadow-xl overflow-hidden bg-base-200 border-l border-base-300">
          <div className="bg-base-300 p-3 border-b border-base-300 flex items-center justify-between shrink-0">
            <h3 className="font-semibold text-base-content">Session Chat</h3>
            <button
              onClick={() => setIsChatOpen(false)}
              className="text-base-content/50 hover:text-base-content transition-colors"
            >
              <XIcon className="size-5" />
            </button>
          </div>
          <div className="flex-1 overflow-hidden stream-chat-dark min-h-0">
            <Chat client={chatClient} theme="str-chat__theme-dark">
              <Channel channel={channel}>
                <Window>
                  <MessageList />
                  <MessageComposer />
                </Window>
                <Thread />
              </Channel>
            </Chat>
          </div>
        </div>
      )}
    </div>
  );
}
export default VideoCallUI;
