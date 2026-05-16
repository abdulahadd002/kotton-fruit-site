import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SplitReveal } from "@/components/primitives/SplitReveal";
import journal from "@/data/journal.json";

export function generateStaticParams() {
  return journal.map((j) => ({ handle: j.handle }));
}

export default async function JournalArticlePage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const article = journal.find((j) => j.handle === handle);
  if (!article) notFound();

  const others = journal.filter((j) => j.handle !== handle).slice(0, 2);

  return (
    <>
      <article>
        {/* Header */}
        <section className="section bg-bg">
          <div className="container-fluid max-w-5xl">
            <p className="mono-label text-ink-dim mb-6">
              {new Date(article.publishedAt)
                .toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })
                .toUpperCase()}{" "}
              · {article.readMins} MIN READ · BY {article.author.toUpperCase()}
            </p>
            <SplitReveal
              as="h1"
              className="display text-[clamp(2.5rem,7vw,6rem)] text-ink leading-[0.95]"
            >
              {article.title}
            </SplitReveal>
            <p className="mt-8 text-xl text-ink-dim max-w-3xl leading-relaxed">
              {article.excerpt}
            </p>
          </div>
        </section>

        {/* Cover */}
        <section className="bg-bg">
          <div className="relative w-full aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-surface">
            <Image
              src={article.cover}
              alt=""
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
        </section>

        {/* Body */}
        <section className="section bg-bg">
          <div className="container-fluid max-w-2xl">
            {article.body.map((para, i) => (
              <p
                key={i}
                className="text-lg md:text-xl text-ink leading-relaxed mb-6 last:mb-0"
              >
                {para}
              </p>
            ))}
          </div>
        </section>
      </article>

      {/* More reading */}
      {others.length > 0 && (
        <section className="section bg-bg border-t border-line">
          <div className="container-fluid">
            <p className="mono-label text-ink-dim mb-3">// KEEP READING</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] mb-10">
              MORE NOTES.
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {others.map((o) => (
                <Link
                  key={o.handle}
                  href={`/journal/${o.handle}`}
                  className="group block"
                >
                  <div className="relative aspect-[4/3] overflow-hidden bg-surface mb-4">
                    <Image
                      src={o.cover}
                      alt=""
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
                    />
                  </div>
                  <p className="mono-label text-ink-dim mb-2">
                    {new Date(o.publishedAt).toLocaleDateString("en-US", {
                      month: "short",
                      year: "numeric",
                    })}
                  </p>
                  <h3 className="display text-2xl text-ink group-hover:text-accent transition-colors leading-tight">
                    {o.title}
                  </h3>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
