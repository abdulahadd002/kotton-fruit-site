import { Hero } from "@/components/sections/Hero";
import { DropLookbookStrip } from "@/components/sections/DropLookbookStrip";
import { Showcase3D } from "@/components/sections/Showcase3D";
import { ShopTheDrop } from "@/components/sections/ShopTheDrop";
import { Manifesto } from "@/components/sections/Manifesto";
import { UGCWall } from "@/components/sections/UGCWall";
import { MemberNudge } from "@/components/sections/MemberNudge";
import { ListSignup } from "@/components/sections/ListSignup";

export default function HomePage() {
  return (
    <>
      <Hero />
      <DropLookbookStrip />
      <Showcase3D />
      <ShopTheDrop />
      <Manifesto />
      <UGCWall />
      <MemberNudge />
      <ListSignup />
    </>
  );
}
