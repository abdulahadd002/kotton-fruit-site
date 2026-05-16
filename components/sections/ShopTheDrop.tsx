import Link from "next/link";
import { ProductBlock } from "@/components/primitives/ProductBlock";
import drops from "@/data/drops.json";
import products from "@/data/products.json";

export function ShopTheDrop() {
  const current = drops[0];
  const dropProducts = products.filter((p) =>
    current.productHandles.includes(p.handle)
  );

  return (
    <section className="section bg-bg">
      <div className="container-fluid">
        <div
          data-reveal-group
          className="flex items-end justify-between mb-10"
        >
          <div>
            <p className="mono-label text-ink-dim">DROP {current.number}</p>
            <h2 className="display text-[clamp(2.5rem,6vw,5rem)] mt-2">
              SHOP IT.
            </h2>
          </div>
          <Link
            href={`/drops/${current.handle}`}
            data-cursor="VIEW ALL"
            className="mono-label text-ink hover:text-accent transition-colors hidden md:inline-flex items-center gap-2"
          >
            View all →
          </Link>
        </div>
      </div>

      <div className="container-fluid">
        <div
          data-reveal-group
          className="flex gap-4 overflow-x-auto no-scrollbar -mx-[clamp(1.25rem,4vw,3.5rem)] px-[clamp(1.25rem,4vw,3.5rem)] snap-x"
          role="region"
          aria-label="Drop products"
        >
          {dropProducts.map((p) => (
            <div
              key={p.handle}
              data-cursor="VIEW"
              className="min-w-[75vw] sm:min-w-[40vw] md:min-w-[28vw] lg:min-w-[22vw] snap-start"
            >
              <ProductBlock
                handle={p.handle}
                title={p.title}
                sku={p.sku}
                price={p.price}
                compareAt={p.compareAt}
                image={p.images[0]}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
