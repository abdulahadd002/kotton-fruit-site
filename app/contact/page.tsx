export default function ContactPage() {
  return (
    <section className="section bg-bg">
      <div className="container-fluid">
        <p className="mono-label text-ink-dim mb-6">// CONTACT</p>
        <h1 className="display text-[clamp(3rem,9vw,9rem)] leading-[0.85] mb-16">
          REACH US.
        </h1>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl">
          <Block
            label="DMs"
            value="@kottonfruit"
            note="Fastest. We reply within 12 hours, usually."
            href="https://instagram.com/kottonfruit"
          />
          <Block
            label="WhatsApp"
            value="+92 300 0000000"
            note="For order issues + COD verification."
            href="https://wa.me/923000000000"
          />
          <Block
            label="Email"
            value="hi@kottonfruit.com"
            note="Wholesale, press, collabs."
            href="mailto:hi@kottonfruit.com"
          />
          <Block
            label="Studio"
            value="House 4F-8/1, Nazimabad 4"
            note="By appointment only. No walk-ins."
          />
        </div>
      </div>
    </section>
  );
}

function Block({
  label,
  value,
  note,
  href,
}: {
  label: string;
  value: string;
  note: string;
  href?: string;
}) {
  const inner = (
    <>
      <p className="mono-label text-accent mb-3">{label}</p>
      <p className="font-display text-2xl md:text-3xl text-ink leading-tight">
        {value}
      </p>
      <p className="mt-3 text-ink-dim text-sm">{note}</p>
    </>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block border-t border-line pt-6 group hover:text-accent transition-colors"
      >
        {inner}
      </a>
    );
  }
  return <div className="border-t border-line pt-6">{inner}</div>;
}
