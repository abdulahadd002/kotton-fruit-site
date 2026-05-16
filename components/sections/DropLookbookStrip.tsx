import { ParallaxImage } from "@/components/primitives/ParallaxImage";
import drops from "@/data/drops.json";

export function DropLookbookStrip() {
  const lookbook = drops[0].lookbook.slice(0, 3);
  if (lookbook.length < 3) return null;

  return (
    <section className="relative bg-bg py-2">
      <div className="grid grid-cols-12 grid-rows-2 gap-2 px-2 h-[80svh] min-h-[600px]">
        <ParallaxImage
          src={lookbook[0]}
          alt="Drop lookbook, frame 1"
          className="col-span-12 md:col-span-5 md:row-span-2 h-full"
          sizes="(min-width: 768px) 42vw, 100vw"
          intensity={0.18}
          scale={1.2}
        />
        <ParallaxImage
          src={lookbook[1]}
          alt="Drop lookbook, frame 2"
          className="col-span-12 md:col-span-7 row-span-1 h-full"
          sizes="(min-width: 768px) 58vw, 100vw"
          intensity={0.25}
          scale={1.2}
        />
        <ParallaxImage
          src={lookbook[2]}
          alt="Drop lookbook, frame 3"
          className="col-span-12 md:col-span-7 row-span-1 h-full"
          sizes="(min-width: 768px) 58vw, 100vw"
          intensity={0.12}
          scale={1.2}
        />
      </div>
    </section>
  );
}
