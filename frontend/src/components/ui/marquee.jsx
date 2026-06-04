import { cn } from "@/lib/utils";

export function Marquee({
  children,
  pauseOnHover = false,
  direction = "left",
  speed = 30,
  className,
  ...props
}) {
  return (
    <div
      className={cn("w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn(
          "flex w-max animate-marquee gap-8",
          pauseOnHover && "hover:[animation-play-state:paused]",
          direction === "right" && "animate-marquee-reverse",
        )}
        style={{ "--duration": `${speed}s` }}
      >
        {children}
        {children}
      </div>
    </div>
  );
}
