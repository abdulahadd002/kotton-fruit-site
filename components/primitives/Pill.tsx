import { cn } from "@/lib/cn";

type Variant = "default" | "accent" | "ink" | "sold-out";

export function Pill({
  children,
  variant = "default",
  className,
}: {
  children: React.ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const styles: Record<Variant, string> = {
    default: "border-line text-ink-dim",
    accent: "border-accent text-accent",
    ink: "border-ink text-ink",
    "sold-out": "border-ink-dim text-ink-dim line-through",
  };

  return (
    <span
      className={cn(
        "mono-label inline-flex items-center gap-2 border px-3 py-1",
        styles[variant],
        className
      )}
    >
      {children}
    </span>
  );
}
