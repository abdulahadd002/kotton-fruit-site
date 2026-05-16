"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, registerMotion, prefersReducedMotion } from "@/lib/motion";
import ugc from "@/data/ugc.json";

export function UGCWall() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    registerMotion();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      // Subtle ongoing parallax within each tile
      gsap.utils.toArray<HTMLElement>("[data-ugc-img]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -8 },
          {
            yPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: img.parentElement,
              start: "top bottom",
              end: "bottom top",
              scrub: 0.8,
            },
          }
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section bg-bg">
      <div className="container-fluid">
        <div
          data-reveal-group
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="mono-label text-ink-dim">// ON THE STREETS</p>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-2">
              MEMBERS.
            </h2>
          </div>
          <a
            href="#"
            data-cursor="FOLLOW"
            className="mono-label text-ink hover:text-accent transition-colors"
          >
            @kottonfruit on IG →
          </a>
        </div>

        <div
          data-reveal-group
          className="grid grid-cols-2 md:grid-cols-4 gap-2"
        >
          {ugc.map((u, i) => (
            <a
              key={i}
              href="#"
              data-cursor="VIEW"
              className="group relative aspect-[3/4] overflow-hidden block bg-surface"
            >
              <div data-ugc-img className="absolute inset-0 scale-110">
                <Image
                  src={u.image}
                  alt={`${u.handle} wearing Kotton Fruit`}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-bg/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="mono-label text-ink">{u.handle}</span>
                <span className="mono-label text-ink-dim">{u.location}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
