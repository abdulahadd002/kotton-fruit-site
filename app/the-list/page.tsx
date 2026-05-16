import { ListSignup } from "@/components/sections/ListSignup";

export default function TheListPage() {
  return (
    <>
      <section className="section bg-bg">
        <div className="container-fluid">
          <p className="mono-label text-accent mb-6">// THE LIST</p>
          <h1 className="display text-[clamp(3rem,10vw,10rem)] leading-[0.85]">
            DON&apos;T MISS
            <br />
            <span className="text-accent">THE NEXT ONE.</span>
          </h1>
          <p className="mt-10 max-w-2xl text-lg text-ink-dim leading-relaxed">
            Drops sell out in hours. The List gets a 24-hour head start, drop
            passwords, and the occasional invite to something offline. No
            spam, no resells, no apologies.
          </p>
        </div>
      </section>

      <ListSignup />
    </>
  );
}
