"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger, registerMotion, prefersReducedMotion } from "@/lib/motion";
import { cn } from "@/lib/cn";

type Props = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  sizes?: string;
  priority?: boolean;
  intensity?: number;
  scale?: number;
};

export function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  sizes = "100vw",
  priority,
  intensity = 0.2,
  scale = 1.15,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrap = ref.current;
    const inner = imgRef.current;
    if (!wrap || !inner) return;

    registerMotion();
    if (prefersReducedMotion()) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        inner,
        { yPercent: -intensity * 100 * 0.5 },
        {
          yPercent: intensity * 100 * 0.5,
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.8,
          },
        }
      );
    }, wrap);

    return () => ctx.revert();
  }, [intensity]);

  return (
    <div ref={ref} className={cn("relative overflow-hidden", className)}>
      <div
        ref={imgRef}
        className="absolute inset-0 will-change-transform"
        style={{ scale }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className={cn("object-cover", imgClassName)}
        />
      </div>
    </div>
  );
}
