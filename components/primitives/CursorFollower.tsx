"use client";

import { useEffect, useRef, useState } from "react";

export function CursorFollower() {
  const dotRef = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    const hover = window.matchMedia("(hover: hover)").matches;
    if (reduced || !hover) return;

    setEnabled(true);
    document.documentElement.classList.add("cursor-none");

    const target = { x: 0, y: 0 };
    const current = { x: 0, y: 0 };
    let raf = 0;

    const onMove = (e: PointerEvent) => {
      target.x = e.clientX;
      target.y = e.clientY;
    };

    const onOver = (e: PointerEvent) => {
      const el = (e.target as HTMLElement)?.closest("[data-cursor]");
      const lbl = el?.getAttribute("data-cursor");
      setLabel(lbl ?? null);
    };

    const tick = () => {
      current.x += (target.x - current.x) * 0.18;
      current.y += (target.y - current.y) * 0.18;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${current.x}px, ${current.y}px, 0) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("cursor-none");
    };
  }, []);

  if (!enabled) return null;

  return (
    <div
      ref={dotRef}
      className="pointer-events-none fixed left-0 top-0 z-[200] mix-blend-difference"
      aria-hidden="true"
    >
      <div
        className={`flex items-center justify-center rounded-full bg-white text-bg transition-[width,height,font-size] duration-300 ease-out-expo ${
          label ? "h-20 w-20 text-[10px]" : "h-3 w-3"
        }`}
      >
        {label && (
          <span className="mono-label font-bold tracking-widest">{label}</span>
        )}
      </div>
    </div>
  );
}
