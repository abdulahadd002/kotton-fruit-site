"use client";

import { useEffect, useRef } from "react";
import { SplitReveal } from "@/components/primitives/SplitReveal";
import { gsap, registerMotion, prefersReducedMotion } from "@/lib/motion";

export function Manifesto() {
  const sectionRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const progress = progressRef.current;
    if (!section || !progress) return;

    registerMotion();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        progress,
        { scaleX: 0 },
        {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 60%",
            end: "bottom 40%",
            scrub: 0.5,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative bg-bg overflow-hidden"
    >
      <div
        ref={progressRef}
        className="absolute top-0 left-0 right-0 h-px bg-accent origin-left"
        style={{ transform: "scaleX(0)" }}
        aria-hidden
      />
      <div className="container-fluid">
        <p className="mono-label text-accent mb-12">// MANIFESTO</p>
        <SplitReveal
          as="p"
          className="display text-[clamp(2.5rem,8vw,8rem)] text-ink"
        >
          {"WORN IN KARACHI.\nSWEATED IN LAHORE.\nSTOLEN IN DUBAI."}
        </SplitReveal>
        <div
          data-reveal-group
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl"
        >
          <Rule num="01" body="We don't beg." />
          <Rule num="02" body="We don't discount the drops." />
          <Rule num="03" body="We ship from home." />
        </div>
      </div>
    </section>
  );
}

function Rule({ num, body }: { num: string; body: string }) {
  return (
    <div className="border-t border-line pt-6">
      <p className="font-mono text-accent text-sm">{num}</p>
      <p className="mt-2 text-ink text-lg">{body}</p>
    </div>
  );
}
