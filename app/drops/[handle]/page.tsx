import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Pill } from "@/components/primitives/Pill";
import { ProductBlock } from "@/components/primitives/ProductBlock";
import { SplitReveal } from "@/components/primitives/SplitReveal";
import drops from "@/data/drops.json";
import products from "@/data/products.json";

export function generateStaticParams() {
  return drops.map((d) => ({ handle: d.handle }));
}

export default async function DropPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const drop = drops.find((d) => d.handle === handle);
  if (!drop) notFound();

  const dropProducts = products.filter((p) =>
    drop.productHandles.includes(p.handle)
  );

  return (
    <>
      {/* Cover */}
      <section className="relative h-[80svh] min-h-[600px] overflow-hidden">
        <Image
          src={drop.cover}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg/30 via-bg/10 to-bg" />
        <div className="container-fluid relative z-10 flex h-full flex-col justify-end pb-12">
          <div className="flex items-center gap-3 mb-4">
            <Pill variant={drop.status === "live" ? "accent" : "sold-out"}>
              {drop.status === "live" ? "Live now" : "Sold out"}
            </Pill>
            <Pill>Shot in {drop.shotIn}</Pill>
          </div>
          <h1 className="display text-[clamp(3.5rem,12vw,12rem)] text-ink leading-[0.85]">
            DROP {drop.number}
            <span className="block text-accent">{drop.title.toUpperCase()}</span>
          </h1>
        </div>
      </section>

      {/* Statement */}
      <section className="section bg-bg">
        <div className="container-fluid grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="mono-label text-ink-dim">// STATEMENT</p>
          </div>
          <div className="md:col-span-9">
            <SplitReveal
              as="p"
              className="display text-[clamp(1.75rem,4vw,3.5rem)] text-ink max-w-4xl"
            >
              {drop.statement}
            </SplitReveal>
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-6">
              <Meta label="Shot by" value={drop.shotBy} />
              <Meta label="Shot in" value={drop.shotIn} />
              <Meta
                label="Launched"
                value={new Date(drop.launchedAt).toLocaleDateString("en-US", {
                  month: "long",
                  day: "numeric",
                  year: "numeric",
                })}
              />
              <Meta
                label="Pieces"
                value={String(drop.productHandles.length)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Lookbook */}
      {drop.lookbook.length > 0 && (
        <section className="bg-bg">
          <div className="grid grid-cols-12 gap-2 px-2">
            {drop.lookbook.map((src, i) => {
              const span = i % 5 === 0 ? "col-span-12" : i % 3 === 0 ? "col-span-12 md:col-span-7" : "col-span-12 md:col-span-5";
              const aspect = i % 5 === 0 ? "aspect-[21/9]" : "aspect-[4/5]";
              return (
                <div
                  key={i}
                  className={`${span} ${aspect} relative overflow-hidden`}
                >
                  <Image
                    src={src}
                    alt={`Drop ${drop.number} lookbook ${i + 1}`}
                    fill
                    sizes="(min-width: 768px) 58vw, 100vw"
                    className="object-cover"
                  />
                </div>
              );
            })}
          </div>
        </section>
      )}

      {/* Shop the drop */}
      {dropProducts.length > 0 && (
        <section className="section bg-bg">
          <div className="container-fluid">
            <div className="flex items-end justify-between mb-10">
              <div>
                <p className="mono-label text-ink-dim">// SHOP THE DROP</p>
                <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-2">
                  THE PIECES.
                </h2>
              </div>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {dropProducts.map((p) => (
                <ProductBlock
                  key={p.handle}
                  handle={p.handle}
                  title={p.title}
                  sku={p.sku}
                  price={p.price}
                  compareAt={p.compareAt}
                  image={p.images[0]}
                />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Next drop teaser */}
      <section className="section-tight bg-bg border-t border-line">
        <div className="container-fluid flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div>
            <p className="mono-label text-ink-dim mb-2">// NEXT</p>
            <p className="display text-3xl md:text-5xl">DROP 004 — TBA.</p>
          </div>
          <Link href="/the-list" className="btn-brutal btn-brutal--solid">
            Get on the list
          </Link>
        </div>
      </section>
    </>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-3">
      <p className="mono-label text-ink-dim">{label}</p>
      <p className="text-ink mt-1">{value}</p>
    </div>
  );
}
