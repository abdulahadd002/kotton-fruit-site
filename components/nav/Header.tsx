"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { cn } from "@/lib/cn";

const nav = [
  { href: "/drops/drop-003", label: "Drop 003" },
  { href: "/drops", label: "Archive" },
  { href: "/the-movement", label: "Movement" },
  { href: "/journal", label: "Journal" },
];

export function Header() {
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    let last = 0;
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 8);
      if (y > 80 && y > last) setHidden(true);
      else setHidden(false);
      last = y;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-transform duration-700 ease-out-expo bg-bg",
        hidden && "-translate-y-full",
        scrolled && "backdrop-blur-md bg-bg/70 border-b border-line"
      )}
    >
      <div className="container-fluid flex h-16 items-center justify-between">
        <Link
          href="/"
          className="font-display text-lg font-black tracking-tightest text-ink hover:text-accent transition-colors"
        >
          KOTTON FRUIT
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((n) => (
            <Link
              key={n.href}
              href={n.href}
              className="mono-label text-ink-dim hover:text-ink transition-colors"
            >
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <Link
            href="/account"
            className="mono-label hidden md:inline text-ink-dim hover:text-ink transition-colors"
          >
            Account
          </Link>
          <Link
            href="#cart"
            className="mono-label text-ink hover:text-accent transition-colors"
          >
            Cart (0)
          </Link>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            className="md:hidden text-ink"
            onClick={() => setOpen((v) => !v)}
          >
            <Burger open={open} />
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-line bg-bg">
          <nav className="container-fluid flex flex-col py-6 gap-4">
            {nav.map((n) => (
              <Link
                key={n.href}
                href={n.href}
                className="font-display text-3xl text-ink"
                onClick={() => setOpen(false)}
              >
                {n.label}
              </Link>
            ))}
            <Link
              href="/account"
              className="font-display text-3xl text-ink"
              onClick={() => setOpen(false)}
            >
              Account
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}

function Burger({ open }: { open: boolean }) {
  return (
    <span className="relative block h-4 w-6">
      <span
        className={cn(
          "absolute left-0 right-0 top-0 h-px bg-current transition-all duration-300 ease-out-expo",
          open && "top-1/2 -translate-y-1/2 rotate-45"
        )}
      />
      <span
        className={cn(
          "absolute left-0 right-0 bottom-0 h-px bg-current transition-all duration-300 ease-out-expo",
          open && "bottom-1/2 translate-y-1/2 -rotate-45"
        )}
      />
    </span>
  );
}
