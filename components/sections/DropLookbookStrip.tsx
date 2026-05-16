import { ParallaxImage } from "@/components/primitives/ParallaxImage";
import drops from "@/data/drops.json";

export function DropLookbookStrip() {
  const lookbook = drops[0].lookbook.slice(0, 3);
  if (lookbook.length < 3) return null;

  return (
    <section className="relative bg-bg py-2">
      <div className="grid grid-cols-12 gap-2 px-2">
        <ParallaxImage
          src={lookbook[0]}
          alt="Lookbook image 1"
          className="col-span-12 md:col-span-5 aspect-[4/5]"
          sizes="(min-width: 768px) 42vw, 100vw"
          intensity={0.18}
          scale={1.2}
        />
        <div className="col-span-12 md:col-span-7 grid grid-cols-12 gap-2">
          <ParallaxImage
            src={lookbook[1]}
            alt="Lookbook image 2"
            className="col-span-12 aspect-[16/9]"
            sizes="(min-width: 768px) 58vw, 100vw"
            intensity={0.25}
            scale={1.2}
          />
          <ParallaxImage
            src={lookbook[2]}
            alt="Lookbook image 3"
            className="col-span-12 aspect-[16/9]"
            sizes="(min-width: 768px) 58vw, 100vw"
            intensity={0.12}
            scale={1.2}
          />
        </div>
      </div>
    </section>
  );
}
