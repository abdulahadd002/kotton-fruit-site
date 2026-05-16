import { cn } from "@/lib/cn";

export function Marquee({
  items,
  className,
  speed = "normal",
}: {
  items: string[];
  className?: string;
  speed?: "normal" | "slow";
}) {
  const repeated = [...items, ...items, ...items, ...items];
  return (
    <div
      className={cn(
        "relative overflow-hidden border-y border-line bg-bg",
        className
      )}
      role="marquee"
      aria-label="Site announcements"
    >
      <div
        className={cn(
          "flex whitespace-nowrap py-3",
          speed === "slow" ? "animate-marquee-slow" : "animate-marquee"
        )}
      >
        {repeated.map((item, i) => (
          <span
            key={i}
            className="mono-label mx-8 inline-flex items-center gap-3 text-ink"
          >
            {item}
            <span className="text-accent" aria-hidden>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}
