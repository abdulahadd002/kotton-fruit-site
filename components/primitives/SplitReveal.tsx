"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/cn";

type Props = {
  as?: "h1" | "h2" | "h3" | "p" | "div";
  children: string;
  className?: string;
  delay?: number;
};

export function SplitReveal({
  as = "h1",
  children,
  className,
  delay = 0,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const lines = el.querySelectorAll<HTMLElement>(".split-line");

    if (reduced) {
      lines.forEach((line) => line.classList.add("is-revealed"));
      return;
    }

    const reveal = () => {
      lines.forEach((line, i) => {
        setTimeout(() => line.classList.add("is-revealed"), delay + i * 90);
      });
    };

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            reveal();
            io.disconnect();
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [delay]);

  const lines = children.split("\n");
  const Tag = as;

  return (
    <Tag ref={ref as never} className={cn(className)}>
      {lines.map((line, i) => (
        <span key={i} className="split-line">
          <span className="line-inner">{line}</span>
        </span>
      ))}
    </Tag>
  );
}
