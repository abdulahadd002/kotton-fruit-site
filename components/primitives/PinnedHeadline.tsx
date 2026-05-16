"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, registerMotion, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  children: React.ReactNode;
  className?: string;
  pinHeight?: string;
};

export function PinnedHeadline({
  children,
  className,
  pinHeight = "200vh",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = ref.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    registerMotion();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: wrap,
          start: "top top",
          end: "bottom bottom",
          scrub: 1,
        },
      });
      tl.fromTo(
        inner,
        { scale: 0.85, opacity: 0.7 },
        { scale: 1.05, opacity: 1, ease: "none" }
      ).to(inner, { scale: 1.3, opacity: 0, ease: "power2.in" });
    }, wrap);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={ref}
      className={cn("relative", className)}
      style={{ height: pinHeight }}
    >
      <div className="sticky top-0 h-screen flex items-center">
        <div ref={innerRef} className="w-full">
          {children}
        </div>
      </div>
    </div>
  );
}
