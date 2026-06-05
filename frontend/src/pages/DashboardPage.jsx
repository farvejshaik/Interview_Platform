import { useNavigate } from "react-router";
import { useUser } from "@clerk/clerk-react";
import { useState } from "react";
import { useActiveSessions, useCreateSession, useMyRecentSessions } from "../hooks/useSessions";
import { ArrowRightIcon, LinkIcon } from "lucide-react";

import Navbar from "../components/ui/Navbar";
import WelcomeSection from "../components/ui/WelcomeSection";
import StatsCards from "../components/ui/StatsCard";
import ActiveSessions from "../components/ui/ActiveSessions";
import RecentSessions from "../components/ui/RecentSessions";
import CreateSessionModal from "../components/ui/CreateSessionModal";

function DashboardPage() {
  const navigate = useNavigate();
  const { user } = useUser();
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [roomConfig, setRoomConfig] = useState({ problem: "", difficulty: "" });
  const [inviteLink, setInviteLink] = useState("");

  const handleJoinViaLink = () => {
    const match = inviteLink.match(/\/session\/([a-f0-9]+)$/i);
    if (match) {
      navigate(`/session/${match[1]}`);
    } else {
      navigate(inviteLink.trim());
    }
  };

  const createSessionMutation = useCreateSession();

  const { data: activeSessionsData, isLoading: loadingActiveSessions } = useActiveSessions();
  const { data: recentSessionsData, isLoading: loadingRecentSessions } = useMyRecentSessions();

  const handleCreateRoom = () => {
    if (!roomConfig.problem || !roomConfig.difficulty) return;

    createSessionMutation.mutate(
      {
        problem: roomConfig.problem,
        difficulty: roomConfig.difficulty.toLowerCase(),
      },
      {
        onSuccess: (data) => {
          setShowCreateModal(false);
          navigate(`/session/${data.session._id}`);
        },
      }
    );
  };

  const activeSessions = activeSessionsData?.sessions || [];
  const recentSessions = recentSessionsData?.sessions || [];

  const isUserInSession = (session) => {
    if (!user.id) return false;
    return session.host?.clerkId === user.id || session.participant?.clerkId === user.id;
  };

  return (
    <div className="min-h-screen bg-base-200/50">
      <Navbar />
      <WelcomeSection onCreateSession={() => setShowCreateModal(true)} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <div className="flex items-center gap-2 mb-4 bg-base-100 rounded-box p-3 shadow-sm border border-base-300">
          <LinkIcon className="size-4 text-base-content/50 shrink-0" />
          <input
            type="text"
            value={inviteLink}
            onChange={(e) => setInviteLink(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleJoinViaLink()}
            placeholder="Paste an invite link to join a session..."
            className="input input-sm input-ghost flex-1 min-w-0 text-sm px-2"
          />
          <button
            onClick={handleJoinViaLink}
            disabled={!inviteLink.trim()}
            className="btn btn-primary btn-sm gap-1.5"
          >
            Join <ArrowRightIcon className="size-3.5" />
          </button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">
          <StatsCards
            activeSessionsCount={activeSessions.length}
            recentSessionsCount={recentSessions.length}
          />
          <ActiveSessions
            sessions={activeSessions}
            isLoading={loadingActiveSessions}
            isUserInSession={isUserInSession}
          />
        </div>
        <RecentSessions sessions={recentSessions} isLoading={loadingRecentSessions} />
      </div>
      <CreateSessionModal
        isOpen={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        roomConfig={roomConfig}
        setRoomConfig={setRoomConfig}
        onCreateRoom={handleCreateRoom}
        isCreating={createSessionMutation.isPending}
      />
    </div>
  );
}

export default DashboardPage;
