import Image from "next/image";
import Link from "next/link";
import journal from "@/data/journal.json";

export default function JournalPage() {
  return (
    <section className="section bg-bg">
      <div className="container-fluid">
        <p className="mono-label text-ink-dim mb-3">// JOURNAL</p>
        <h1 className="display text-[clamp(3rem,9vw,8rem)] mb-16">
          NOTES.
        </h1>

        <div className="space-y-6">
          {journal.map((j) => (
            <Link
              key={j.handle}
              href={`/journal/${j.handle}`}
              className="group grid grid-cols-12 gap-6 items-center border-t border-line py-6 hover:bg-surface/30 transition-colors"
            >
              <div className="col-span-12 md:col-span-4 relative aspect-[4/3] overflow-hidden">
                <Image
                  src={j.cover}
                  alt={j.title}
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.03]"
                />
              </div>
              <div className="col-span-12 md:col-span-8">
                <p className="mono-label text-ink-dim mb-2">
                  {new Date(j.publishedAt).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  · {j.readMins} MIN READ
                </p>
                <h2 className="display text-[clamp(1.75rem,4vw,3rem)] text-ink group-hover:text-accent transition-colors leading-[1.05]">
                  {j.title}
                </h2>
                <p className="mt-3 text-ink-dim max-w-2xl">{j.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
