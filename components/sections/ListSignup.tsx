"use client";

import { useState } from "react";
import { SplitReveal } from "@/components/primitives/SplitReveal";

export function ListSignup() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="section bg-bg border-t border-line">
      <div className="container-fluid">
        <p data-reveal className="mono-label text-ink-dim mb-6">
          // THE LIST
        </p>
        <SplitReveal
          as="h2"
          className="display text-[clamp(2.5rem,8vw,8rem)] leading-[0.85] text-ink"
        >
          {"DON'T MISS\nTHE NEXT ONE."}
        </SplitReveal>
        <p data-reveal className="mt-8 max-w-xl text-ink-dim">
          Drops sell out in hours. The List gets a 24-hour head start, drop
          passwords, and the occasional invite to something offline.
        </p>

        {!submitted ? (
          <form
            data-reveal
            className="mt-10 flex flex-col md:flex-row gap-3 max-w-2xl"
            onSubmit={(e) => {
              e.preventDefault();
              if (email.includes("@")) setSubmitted(true);
            }}
          >
            <input
              type="email"
              required
              placeholder="YOUR EMAIL"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-transparent border-b border-ink py-4 px-2 mono-label text-ink placeholder:text-ink-dim focus:outline-none focus:border-accent transition-colors"
            />
            <button
              type="submit"
              data-cursor="SUBMIT"
              className="btn-brutal btn-brutal--solid"
            >
              Get on the list
            </button>
          </form>
        ) : (
          <p data-reveal className="mt-10 mono-label text-accent">
            // YOU&apos;RE ON. CHECK YOUR INBOX. (NOT REALLY — THIS IS A
            PROTOTYPE.)
          </p>
        )}
      </div>
    </section>
  );
}
