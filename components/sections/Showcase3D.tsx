import { ProductPair3D } from "@/components/primitives/ProductPair3D";
import drops from "@/data/drops.json";
import products from "@/data/products.json";

const PICK_HANDLES = [
  "aure-oversized-shirt",
  "arcline-oversized-t-shirt",
  "apex-utility-zipper-polo-t-shirt",
];

export function Showcase3D() {
  const current = drops[0];
  const picks = PICK_HANDLES
    .map((h) => products.find((p) => p.handle === h))
    .filter((p): p is (typeof products)[number] => !!p);

  return (
    <section className="relative bg-bg py-32 md:py-48 overflow-hidden">
      <div className="container-fluid">
        <div data-reveal-group className="mb-32">
          <p className="mono-label text-accent">// THE PIECES</p>
          <h2 className="display text-[clamp(3rem,10vw,11rem)] mt-4 leading-[0.85]">
            CUT IN
            <br />
            <span className="text-accent">KARACHI.</span>
          </h2>
          <p className="mt-6 max-w-md text-ink-dim">
            Drop {current.number}. Six pieces. Photographed on bodies that live
            in them. Click any to step closer.
          </p>
        </div>

        <div
          data-reveal-group
          className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16 px-4 md:px-12"
        >
          {picks.map((p, i) => (
            <div
              key={p.handle}
              className={i === 1 ? "md:mt-32" : i === 2 ? "md:mt-16" : ""}
            >
              <ProductPair3D
                front={p.images[0]}
                back={p.images[1] ?? p.images[0]}
                alt={p.title}
                href={`/products/${p.handle}`}
                sku={p.sku}
                reverse={i % 2 === 1}
                caption={p.title}
              />
              <div className="mt-12 flex items-baseline justify-between">
                <span className="mono-label text-ink-dim">
                  PKR {p.price.toLocaleString()}
                </span>
                {p.compareAt && (
                  <span className="mono-label text-ink-dim/60 line-through">
                    PKR {p.compareAt.toLocaleString()}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
