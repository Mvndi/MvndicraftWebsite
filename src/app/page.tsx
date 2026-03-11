"use client";

import News from "@/app/components/News/News";
import Heading from "@/app/components/Heading";
import Discover from "@/app/components/Discover";
import BentoGallery from "@/app/components/BentoGallery";
import ForgeKingdom from "@/app/components/ForgeKingdom";
import CTA from "@/app/components/Globals/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Heading />
      <Discover/>
      <BentoGallery/>
      <News />
      <ForgeKingdom/>
      <CTA/>
    </main>
  );
}
