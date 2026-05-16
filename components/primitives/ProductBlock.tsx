import Link from "next/link";
import Image from "next/image";

type Props = {
  handle: string;
  title: string;
  sku: string;
  price: number;
  compareAt?: number;
  image: string;
  size?: "default" | "wide" | "tall";
};

export function ProductBlock({
  handle,
  title,
  sku,
  price,
  compareAt,
  image,
  size = "default",
}: Props) {
  const aspect =
    size === "wide"
      ? "aspect-[4/3]"
      : size === "tall"
        ? "aspect-[3/4]"
        : "aspect-[4/5]";

  return (
    <Link
      href={`/products/${handle}`}
      className="group block focus:outline-none"
    >
      <div
        className={`${aspect} relative overflow-hidden bg-surface border border-line`}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
          className="object-cover transition-transform duration-700 ease-out-expo group-hover:scale-[1.04]"
        />
        <div className="absolute top-3 left-3 z-10">
          <span className="mono-label text-white drop-shadow-[0_1px_4px_rgba(0,0,0,0.6)]">
            {sku}
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 z-10 p-3 bg-gradient-to-t from-bg/90 via-bg/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="mono-label text-ink">View →</span>
        </div>
      </div>
      <div className="mt-3 flex items-baseline justify-between gap-3">
        <span className="font-mono text-xs text-ink uppercase tracking-wider line-clamp-1">
          {title}
        </span>
        <span className="font-mono text-xs text-ink-dim whitespace-nowrap">
          {compareAt && (
            <span className="line-through mr-2 text-ink-dim/60">
              {compareAt.toLocaleString()}
            </span>
          )}
          <span className="text-ink">PKR {price.toLocaleString()}</span>
        </span>
      </div>
    </Link>
  );
}
