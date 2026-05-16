import { SplitReveal } from "@/components/primitives/SplitReveal";
import { Button } from "@/components/primitives/Button";

export default function MovementPage() {
  return (
    <>
      <section className="section bg-bg">
        <div className="container-fluid">
          <p className="mono-label text-accent mb-6">// THE MOVEMENT</p>
          <SplitReveal
            as="h1"
            className="display text-[clamp(3rem,10vw,10rem)] text-ink"
          >
            {"NOT FOR\nEVERYONE.\nBY DESIGN."}
          </SplitReveal>
        </div>
      </section>

      <section className="section bg-bg">
        <div className="container-fluid grid md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <p className="mono-label text-ink-dim">// ORIGIN</p>
          </div>
          <div className="md:col-span-8 space-y-6 text-lg text-ink leading-relaxed max-w-2xl">
            <p>
              Kotton Fruit started in a 4F-8/1 flat in Nazimabad. One sewing
              machine, two bolts of cotton, a name we picked because no one
              else would.
            </p>
            <p>
              We were tired. Of bands we&apos;d never seen printed on tees we
              didn&apos;t make. Of brands telling us what home looked like
              when we&apos;d lived here our whole lives. Of clothes designed
              somewhere cold for weather we don&apos;t have.
            </p>
            <p>
              So we made our own. Slowly. Badly, at first. The first drop sold
              42 pieces. The second sold out in nine days. The third — the one
              you&apos;re looking at — is why you&apos;re here.
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-bg border-t border-line">
        <div className="container-fluid">
          <p className="mono-label text-ink-dim mb-6">// THE RULES</p>
          <h2 className="display text-[clamp(2.5rem,7vw,6rem)] mb-16">
            HOW WE OPERATE.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {RULES.map((r) => (
              <div
                key={r.num}
                className="border border-line p-8 md:p-12 group hover:border-accent transition-colors"
              >
                <p className="font-mono text-accent text-sm mb-4">{r.num}</p>
                <h3 className="display text-3xl md:text-4xl mb-4">
                  {r.title}
                </h3>
                <p className="text-ink-dim leading-relaxed">{r.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-tight bg-bg border-t border-line">
        <div className="container-fluid flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <p className="display text-3xl md:text-5xl">
            BUY ONCE. YOU&apos;RE IN.
          </p>
          <Button href="/drops/drop-003" variant="solid">
            Enter Drop 003
          </Button>
        </div>
      </section>
    </>
  );
}

const RULES = [
  {
    num: "01",
    title: "We don't beg.",
    body: "No spam, no DM blasts, no influencer trades that aren't earned. If you wear it, it's because you want to.",
  },
  {
    num: "02",
    title: "We don't discount the drops.",
    body: "Drop pieces ship at full price, sell out, and never restock. Basics can move on price. The drops can't.",
  },
  {
    num: "03",
    title: "We ship from home.",
    body: "Studio in Nazimabad. Stitched in-country. The bolt number is on the care label.",
  },
  {
    num: "04",
    title: "Members come first.",
    body: "Buy once and you get every drop 24 hours early. No tiers, no points, no membership fee. The fit is the card.",
  },
];
