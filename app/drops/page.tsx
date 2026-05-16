import Image from "next/image";
import Link from "next/link";
import { Pill } from "@/components/primitives/Pill";
import drops from "@/data/drops.json";

export default function DropsIndexPage() {
  return (
    <section className="section bg-bg">
      <div className="container-fluid">
        <p className="mono-label text-ink-dim mb-3">// ARCHIVE</p>
        <h1 className="display text-[clamp(3rem,9vw,8rem)] mb-16">
          EVERY DROP.
        </h1>
      </div>

      <div className="container-fluid space-y-6">
        {drops.map((d, i) => (
          <Link
            key={d.handle}
            href={`/drops/${d.handle}`}
            className="group grid grid-cols-12 gap-6 items-center border-t border-line py-6 hover:bg-surface/30 transition-colors"
          >
            <div className="col-span-12 md:col-span-5 relative aspect-[16/9] overflow-hidden">
              <Image
                src={d.cover}
                alt={d.title}
                fill
                sizes="(min-width: 768px) 42vw, 100vw"
                className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
              />
            </div>
            <div className="col-span-12 md:col-span-5">
              <p className="mono-label text-ink-dim mb-2">
                DROP {d.number} —{" "}
                {new Date(d.launchedAt).toLocaleDateString("en-US", {
                  month: "short",
                  year: "numeric",
                })}
              </p>
              <h2 className="display text-[clamp(2rem,5vw,4rem)] text-ink group-hover:text-accent transition-colors">
                {d.title.toUpperCase()}
              </h2>
              <p className="mt-3 text-ink-dim max-w-md">{d.statement}</p>
            </div>
            <div className="col-span-12 md:col-span-2 flex md:justify-end">
              {d.status === "live" ? (
                <Pill variant="accent">Live</Pill>
              ) : (
                <Pill variant="sold-out">Sold out</Pill>
              )}
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
