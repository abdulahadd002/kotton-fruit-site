"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { gsap, ScrollTrigger, registerMotion, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  front: string;
  back: string;
  alt: string;
  href?: string;
  className?: string;
  reverse?: boolean;
  caption?: string;
  sku?: string;
  aspectClassName?: string;
};

export function ProductPair3D({
  front,
  back,
  alt,
  href,
  className,
  reverse = false,
  caption,
  sku,
  aspectClassName = "aspect-[3/4]",
}: Props) {
  const wrapRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const inner = innerRef.current;
    if (!wrap || !inner) return;

    registerMotion();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        {
          rotateY: reverse ? 12 : -12,
          rotateX: 6,
        },
        {
          rotateY: reverse ? -12 : 12,
          rotateX: -6,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [reverse]);

  const content = (
    <div
      ref={wrapRef}
      className={cn(
        "group relative w-full",
        aspectClassName,
        className
      )}
      style={{ perspective: "1400px" }}
    >
      <div
        ref={innerRef}
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Back image — offset behind */}
        <div
          className={cn(
            "absolute inset-0 overflow-hidden bg-surface border border-line transition-transform duration-700 ease-out-expo",
            reverse
              ? "translate-x-[8%] -translate-y-[5%] group-hover:translate-x-[14%] group-hover:-translate-y-[9%]"
              : "-translate-x-[8%] -translate-y-[5%] group-hover:-translate-x-[14%] group-hover:-translate-y-[9%]"
          )}
          style={{ transform: "translateZ(-40px)" }}
        >
          <Image
            src={back}
            alt=""
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover opacity-80"
          />
        </div>

        {/* Front image */}
        <div
          className="absolute inset-0 overflow-hidden bg-surface border border-line shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          style={{ transform: "translateZ(40px)" }}
        >
          <Image
            src={front}
            alt={alt}
            fill
            sizes="(min-width: 1024px) 33vw, 90vw"
            className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
          />
          {sku && (
            <span className="absolute top-4 left-4 mono-label text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.7)]">
              {sku}
            </span>
          )}
        </div>
      </div>

      {caption && (
        <div className="absolute -bottom-10 left-0 right-0 flex items-center justify-between">
          <span className="mono-label text-ink">{caption}</span>
          <span className="mono-label text-ink-dim">→</span>
        </div>
      )}
    </div>
  );

  if (href) {
    return (
      <Link href={href} className="block focus:outline-none">
        {content}
      </Link>
    );
  }
  return content;
}
