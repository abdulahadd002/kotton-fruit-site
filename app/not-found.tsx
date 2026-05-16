import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-[70svh] flex items-center bg-bg">
      <div className="container-fluid">
        <p className="mono-label text-accent mb-4">// 404</p>
        <h1 className="display text-[clamp(3rem,12vw,12rem)] text-ink leading-[0.85]">
          NOT
          <br />
          ON THE
          <br />
          LIST.
        </h1>
        <div className="mt-12 flex flex-wrap gap-3">
          <Link href="/" className="btn-brutal btn-brutal--solid">
            Back home
          </Link>
          <Link href="/drops/drop-003" className="btn-brutal">
            Current drop
          </Link>
        </div>
      </div>
    </section>
  );
}
