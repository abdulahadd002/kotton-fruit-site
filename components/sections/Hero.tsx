import Link from "next/link";
import { Pill } from "@/components/primitives/Pill";
import { SplitReveal } from "@/components/primitives/SplitReveal";
import { ParallaxImage } from "@/components/primitives/ParallaxImage";
import drops from "@/data/drops.json";

export function Hero() {
  const current = drops[0];

  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden">
      <ParallaxImage
        src={current.cover}
        alt=""
        className="absolute inset-0"
        sizes="100vw"
        priority
        intensity={0.3}
        scale={1.25}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-bg/40 via-bg/20 to-bg pointer-events-none" />

      <div className="container-fluid relative z-10 flex min-h-[100svh] flex-col justify-end pb-16 md:pb-24 pt-32">
        <div className="flex items-center gap-3 mb-6">
          <Pill variant="accent">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
            </span>
            Drop {current.number} — Live
          </Pill>
          <Pill>{current.shotIn}</Pill>
        </div>

        <SplitReveal
          as="h1"
          className="display text-[clamp(3.5rem,11vw,11rem)] text-ink"
        >
          {"WORN\nBY THOSE\nWHO DO."}
        </SplitReveal>

        <div className="mt-10 flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-8">
          <p className="max-w-md text-ink-dim text-base md:text-lg leading-relaxed">
            {current.statement}
          </p>
          <Link
            href={`/drops/${current.handle}`}
            data-cursor="ENTER"
            className="btn-brutal btn-brutal--solid w-fit"
          >
            Enter the drop
          </Link>
        </div>
      </div>
    </section>
  );
}
