"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger, registerMotion, prefersReducedMotion } from "@/lib/motion";

export function SmoothScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (prefersReducedMotion()) return;

    registerMotion();

    const lenis = new Lenis({
      lerp: 0.085,
      wheelMultiplier: 1,
      smoothWheel: true,
    });

    lenis.on("scroll", ScrollTrigger.update);

    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);

    const refreshTimer = window.setTimeout(() => {
      ScrollTrigger.refresh();
    }, 200);

    return () => {
      window.clearTimeout(refreshTimer);
      gsap.ticker.remove(tick);
      lenis.destroy();
    };
  }, []);

  return null;
}
