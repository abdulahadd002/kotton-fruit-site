import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg">
      <div className="container-fluid py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
          <div className="col-span-2">
            <p className="font-display text-3xl md:text-5xl tracking-tightest leading-none">
              KOTTON
              <br />
              FRUIT.
            </p>
            <p className="mt-6 mono-label text-ink-dim">
              PAKISTAN — EST. 2025
            </p>
          </div>

          <div>
            <p className="mono-label text-ink mb-4">Shop</p>
            <ul className="space-y-2">
              {[
                ["Drop 003", "/drops/drop-003"],
                ["Archive", "/drops"],
                ["Essentials", "/drops"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-ink-dim hover:text-ink transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mono-label text-ink mb-4">Info</p>
            <ul className="space-y-2">
              {[
                ["Movement", "/the-movement"],
                ["Journal", "/journal"],
                ["Help", "/help"],
                ["Contact", "/contact"],
              ].map(([label, href]) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-sm text-ink-dim hover:text-ink transition-colors"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-20 flex flex-col-reverse md:flex-row md:items-end md:justify-between gap-8 border-t border-line pt-8">
          <p className="mono-label text-ink-dim">
            © 2026 KOTTON FRUIT — RULES NOTHING. WORN BY THOSE WHO DO.
          </p>
          <div className="flex gap-6">
            {["Instagram", "TikTok", "YouTube"].map((s) => (
              <a
                key={s}
                href="#"
                className="mono-label text-ink hover:text-accent transition-colors"
              >
                {s}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
