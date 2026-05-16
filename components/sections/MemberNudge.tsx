import { Button } from "@/components/primitives/Button";

export function MemberNudge() {
  return (
    <section className="section-tight relative bg-bg overflow-hidden">
      <div className="container-fluid">
        <div
          data-reveal
          className="border border-line p-8 md:p-16 relative overflow-hidden"
        >
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background:
                "radial-gradient(circle at 80% 50%, rgba(255,61,0,0.25) 0%, transparent 60%)",
            }}
            aria-hidden
          />
          <div className="relative grid md:grid-cols-2 gap-8 items-center">
            <div>
              <p className="mono-label text-accent mb-3">// MEMBERS</p>
              <h2 className="display text-[clamp(2rem,5vw,4rem)] mb-4">
                BUY ONCE. <br />
                YOU&apos;RE IN.
              </h2>
              <p className="text-ink-dim max-w-md">
                No tiers, no points, no fees. Make a purchase, get early access
                to every drop, member-only colorways, and surprise drop
                passwords.
              </p>
            </div>
            <div className="md:justify-self-end">
              <ul data-reveal-group className="space-y-3">
                <Bullet>24h early access on every drop</Bullet>
                <Bullet>Member-only colorways</Bullet>
                <Bullet>Free shipping over PKR 4,500 (vs 6,000)</Bullet>
                <Bullet>First look on lookbooks</Bullet>
              </ul>
              <div className="mt-6">
                <Button href="/the-movement" variant="solid">
                  Read the rules
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-3">
      <span className="font-mono text-accent text-sm mt-1">+</span>
      <span className="text-ink">{children}</span>
    </li>
  );
}
