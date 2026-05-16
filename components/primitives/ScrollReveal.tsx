"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger, registerMotion, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Direction = "up" | "down" | "left" | "right" | "none";

type Props = {
  children: React.ReactNode;
  className?: string;
  direction?: Direction;
  distance?: number;
  delay?: number;
  duration?: number;
  stagger?: number;
  start?: string;
  as?: "div" | "section" | "article" | "ul" | "ol" | "p" | "span";
};

export function ScrollReveal({
  children,
  className,
  direction = "up",
  distance = 48,
  delay = 0,
  duration = 1.1,
  stagger = 0.08,
  start = "top 85%",
  as = "div",
}: Props) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    registerMotion();

    if (prefersReducedMotion()) {
      gsap.set(el.children, { opacity: 1, x: 0, y: 0 });
      return;
    }

    const fromVars: gsap.TweenVars = { opacity: 0 };
    if (direction === "up") fromVars.y = distance;
    if (direction === "down") fromVars.y = -distance;
    if (direction === "left") fromVars.x = distance;
    if (direction === "right") fromVars.x = -distance;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el.children,
        fromVars,
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration,
          delay,
          stagger,
          ease: "expo.out",
          scrollTrigger: {
            trigger: el,
            start,
            toggleActions: "play none none none",
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [direction, distance, delay, duration, stagger, start]);

  const Tag = as;
  return (
    <Tag ref={ref as never} className={cn(className)}>
      {children}
    </Tag>
  );
}
