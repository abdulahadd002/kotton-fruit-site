import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { Pill } from "@/components/primitives/Pill";
import { ProductBlock } from "@/components/primitives/ProductBlock";
import { ProductPair3D } from "@/components/primitives/ProductPair3D";
import { SizeSelector } from "@/components/product/SizeSelector";
import products from "@/data/products.json";
import drops from "@/data/drops.json";
import ugc from "@/data/ugc.json";

export function generateStaticParams() {
  return products.map((p) => ({ handle: p.handle }));
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ handle: string }>;
}) {
  const { handle } = await params;
  const product = products.find((p) => p.handle === handle);
  if (!product) notFound();

  const drop = drops.find((d) => d.handle === product.drop);
  const wornUgc = ugc.filter((u) => u.product === product.handle).slice(0, 4);
  const wornWithProducts = products.filter((p) =>
    product.wornWith.includes(p.handle)
  );

  const hasPair = product.images.length >= 2;

  return (
    <>
      <section className="bg-bg">
        <div className="container-fluid grid grid-cols-1 lg:grid-cols-12 gap-8 pt-8">
          {/* Left: product gallery — 3D pair when multi-image */}
          <div className="lg:col-span-7">
            {hasPair ? (
              <div className="pl-4 md:pl-12 pr-4 md:pr-12 py-8 md:py-16">
                <ProductPair3D
                  front={product.images[0]}
                  back={product.images[1]}
                  alt={product.title}
                  sku={product.sku}
                />
              </div>
            ) : (
              <div className="aspect-[4/5] relative overflow-hidden bg-surface border border-line">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  fill
                  priority
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="mono-label text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
                    {product.sku}
                  </span>
                </div>
              </div>
            )}

            {product.images.length > 2 && (
              <div className="grid grid-cols-2 gap-4 mt-12">
                {product.images.slice(2, 4).map((src, i) => (
                  <div
                    key={i}
                    className="aspect-[4/5] relative overflow-hidden bg-surface border border-line"
                  >
                    <Image
                      src={src}
                      alt={`${product.title} — detail ${i + 1}`}
                      fill
                      sizes="(min-width: 1024px) 29vw, 50vw"
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right: sticky info panel */}
          <div className="lg:col-span-5">
            <div className="lg:sticky lg:top-28">
              <div className="flex items-center gap-2 mb-4">
                {drop && (
                  <Link href={`/drops/${drop.handle}`}>
                    <Pill variant="accent">
                      Drop {drop.number} — {drop.title}
                    </Pill>
                  </Link>
                )}
              </div>

              <h1 className="display text-[clamp(2rem,4vw,3.5rem)] text-ink leading-[0.95] mb-6">
                {product.title.toUpperCase()}
              </h1>

              <div className="flex items-baseline gap-3 mb-8">
                <p className="font-mono text-xl text-ink">
                  PKR {product.price.toLocaleString()}
                </p>
                {product.compareAt && (
                  <p className="font-mono text-base text-ink-dim line-through">
                    PKR {product.compareAt.toLocaleString()}
                  </p>
                )}
              </div>

              <SizeSelector sizes={product.sizes} />

              <button
                data-cursor="ADD"
                className="btn-brutal btn-brutal--solid w-full justify-center mt-6 py-5"
              >
                Add to cart
              </button>

              <p className="mono-label text-ink-dim mt-4">
                Free shipping over PKR 6,000 — members PKR 4,500
              </p>

              <div className="mt-12 space-y-6">
                <Detail label="Fabric" value={product.fabric} />
                <Detail label="Fit" value={product.fit} />
                <Detail label="On the model" value={product.modelNote} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Garment story */}
      <section className="section bg-bg">
        <div className="container-fluid grid md:grid-cols-12 gap-12">
          <div className="md:col-span-3">
            <p className="mono-label text-ink-dim">// THE STORY</p>
          </div>
          <p className="md:col-span-9 display text-[clamp(1.5rem,3vw,2.5rem)] text-ink max-w-3xl leading-[1.1]">
            {product.story}
          </p>
        </div>
      </section>

      {/* In the wild */}
      {wornUgc.length > 0 && (
        <section className="section bg-bg">
          <div className="container-fluid">
            <p className="mono-label text-ink-dim mb-3">// IN THE WILD</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] mb-10">
              MEMBERS WEARING IT.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
              {wornUgc.map((u, i) => (
                <div
                  key={i}
                  className="relative aspect-[3/4] overflow-hidden bg-surface"
                >
                  <Image
                    src={u.image}
                    alt={`${u.handle} wearing ${product.title}`}
                    fill
                    sizes="(min-width: 768px) 25vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute bottom-3 left-3 mono-label text-white drop-shadow">
                    {u.handle}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Worn with */}
      {wornWithProducts.length > 0 && (
        <section className="section bg-bg border-t border-line">
          <div className="container-fluid">
            <p className="mono-label text-ink-dim mb-3">// WORN WITH</p>
            <h2 className="display text-[clamp(2rem,5vw,4rem)] mb-10">
              COMPLETE THE FIT.
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {wornWithProducts.map((p) => (
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
    </>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-line pt-4">
      <p className="mono-label text-ink-dim">{label}</p>
      <p className="text-ink mt-2 leading-relaxed">{value}</p>
    </div>
  );
}
