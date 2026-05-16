import Link from "next/link";
import { Pill } from "@/components/primitives/Pill";

export default function AccountPage() {
  return (
    <section className="section bg-bg">
      <div className="container-fluid">
        <div className="flex items-center gap-3 mb-6">
          <Pill variant="accent">// MEMBERS ONLY</Pill>
        </div>

        <h1 className="display text-[clamp(3rem,9vw,9rem)] leading-[0.85] mb-12">
          THE FIT
          <br />
          <span className="text-accent">IS THE CARD.</span>
        </h1>

        <div className="grid md:grid-cols-12 gap-12 max-w-6xl">
          <div className="md:col-span-7 space-y-6 text-lg text-ink leading-relaxed">
            <p>
              We don&apos;t have logins because we don&apos;t need them. Buy
              once with any email and you&apos;re in.
            </p>
            <p>
              Members get every drop 24 hours early, member-only colorways,
              passwords for surprise drops, and free shipping over PKR 4,500
              instead of 6,000.
            </p>
            <p className="text-ink-dim">
              No tiers. No points. No subscription. The fit is the card. If
              you&apos;ve ordered before, you&apos;re already in.
            </p>
          </div>

          <div className="md:col-span-5 border border-line p-8 md:p-12 self-start">
            <p className="mono-label text-accent mb-3">// FIRST-TIMERS</p>
            <p className="font-display text-2xl text-ink leading-tight mb-6">
              Make your first order to join.
            </p>
            <Link
              href="/drops/drop-003"
              className="btn-brutal btn-brutal--solid w-full justify-center"
            >
              Enter Drop 003
            </Link>
          </div>
        </div>

        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-6">
          <Perk label="24h early" body="Drops before they go public" />
          <Perk label="Members-only" body="Colorways and sizes" />
          <Perk
            label="Lower threshold"
            body="Free shipping over PKR 4,500"
          />
          <Perk label="First look" body="Lookbooks before launch" />
        </div>
      </div>
    </section>
  );
}

function Perk({ label, body }: { label: string; body: string }) {
  return (
    <div className="border-t border-line pt-6">
      <p className="mono-label text-accent">{label}</p>
      <p className="text-ink mt-2 leading-relaxed">{body}</p>
    </div>
  );
}
