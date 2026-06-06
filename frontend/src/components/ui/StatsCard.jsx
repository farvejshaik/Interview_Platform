import { TrophyIcon, ActivityIcon } from "lucide-react";

function StatsCards({ activeSessionsCount, recentSessionsCount }) {
  const cards = [
    {
      label: "Active Sessions",
      value: activeSessionsCount,
      icon: ActivityIcon,
      status: "Live",
    },
    {
      label: "Total Sessions",
      value: recentSessionsCount,
      icon: TrophyIcon,
      status: "All time",
    },
  ];

  return (
    <div className="flex flex-col gap-4 h-full">
      {cards.map((card) => (
        <div
          key={card.label}
          className="group relative p-3 sm:p-4 rounded-xl border border-base-300/50 bg-base-100/80 backdrop-blur-sm hover:shadow-[0_2px_12px_rgba(0,0,0,0.03)] dark:hover:shadow-[0_2px_12px_rgba(255,255,255,0.03)] hover:-translate-y-0.5 transition-all duration-200 will-change-transform flex-1"
        >
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" />
          </div>
          <div className="relative space-y-2">
            <div className="flex items-center justify-between">
              <div className="w-7 h-7 rounded-lg flex items-center justify-center bg-black/5 dark:bg-white/10">
                <card.icon className="w-3.5 h-3.5 text-base-content/60" />
              </div>
              <span className="text-[10px] font-medium px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/10 text-base-content/40">
                {card.status}
              </span>
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-semibold tracking-tight">
                <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
                  {card.value}
                </span>
              </div>
              <p className="text-xs text-base-content/50 mt-0.5">{card.label}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StatsCards;
