import Link from "next/link";

const FAQ = [
  {
    q: "When does Drop 003 ship?",
    a: "Drop 003 ships within 48 hours of order. COD orders ship after WhatsApp OTP verification. Outside Karachi: 3–5 business days.",
  },
  {
    q: "What's your returns policy?",
    a: "7-day exchanges on unworn pieces with tags intact. We don't refund — we exchange for size or a different SKU from the same drop.",
  },
  {
    q: "Sizing — should I size up?",
    a: "Our fits run oversized. If you're between sizes, size down. Each PDP has the model's height and the size they're wearing.",
  },
  {
    q: "Why don't past drops restock?",
    a: "Because once it's gone, it's gone. The point of a drop is scarcity. Get on The List so you don't miss the next one.",
  },
  {
    q: "Do you ship internationally?",
    a: "Not yet. Pakistan only for now. UAE and UK are next.",
  },
  {
    q: "COD or card?",
    a: "Both. COD over PKR 3,000 needs WhatsApp OTP verification.",
  },
];

export default function HelpPage() {
  return (
    <section className="section bg-bg">
      <div className="container-fluid">
        <p className="mono-label text-ink-dim mb-6">// HELP</p>
        <h1 className="display text-[clamp(3rem,9vw,9rem)] leading-[0.85] mb-16">
          ANSWERS.
        </h1>

        <div className="max-w-3xl">
          {FAQ.map((item) => (
            <details
              key={item.q}
              className="group border-t border-line py-6 last:border-b"
            >
              <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                <span className="font-display text-xl md:text-2xl text-ink group-hover:text-accent transition-colors">
                  {item.q}
                </span>
                <span className="mono-label text-accent transition-transform group-open:rotate-45 mt-1">
                  +
                </span>
              </summary>
              <p className="mt-4 text-ink-dim leading-relaxed max-w-2xl">
                {item.a}
              </p>
            </details>
          ))}
        </div>

        <div className="mt-20">
          <p className="mono-label text-ink-dim mb-3">// STILL STUCK</p>
          <p className="font-display text-3xl text-ink mb-6">
            Reach us where we live.
          </p>
          <Link
            href="/contact"
            className="btn-brutal btn-brutal--solid"
          >
            Contact us
          </Link>
        </div>
      </div>
    </section>
  );
}
