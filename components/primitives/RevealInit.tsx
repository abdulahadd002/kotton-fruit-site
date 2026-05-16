"use client";

import { useEffect } from "react";

export function RevealInit() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const targets = document.querySelectorAll<HTMLElement>(
      "[data-reveal], [data-reveal-group]"
    );

    if (reduced) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-revealed");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    targets.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // If already in or above viewport on mount, reveal immediately
      if (rect.top < window.innerHeight * 0.9) {
        el.classList.add("is-revealed");
      } else {
        io.observe(el);
      }
    });

    // Catch dynamically-added elements (Lenis init, etc.)
    const mo = new MutationObserver(() => {
      document
        .querySelectorAll<HTMLElement>(
          "[data-reveal]:not(.is-revealed), [data-reveal-group]:not(.is-revealed)"
        )
        .forEach((el) => {
          const rect = el.getBoundingClientRect();
          if (rect.top < window.innerHeight * 0.9) {
            el.classList.add("is-revealed");
          } else {
            io.observe(el);
          }
        });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      io.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
