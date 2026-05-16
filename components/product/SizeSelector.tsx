"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

export function SizeSelector({ sizes }: { sizes: string[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <p className="mono-label text-ink-dim">Size</p>
        <button className="mono-label text-ink-dim hover:text-ink transition-colors">
          Size guide →
        </button>
      </div>
      <div className="flex flex-wrap gap-2">
        {sizes.map((size) => (
          <button
            key={size}
            type="button"
            onClick={() => setActive(size)}
            className={cn(
              "min-w-12 h-12 px-3 border font-mono text-sm transition-colors",
              active === size
                ? "border-accent bg-accent text-bg"
                : "border-ink/40 text-ink hover:border-ink"
            )}
          >
            {size}
          </button>
        ))}
      </div>
    </div>
  );
}
