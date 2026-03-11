"use client";

import News from "@/app/components/News/News";
import Heading from "@/app/components/Heading";
import Discover from "@/app/components/Discover";
import BentoGallery from "@/app/components/BentoGallery";
import ForgeKingdom from "@/app/components/ForgeKingdom";
import CTA from "@/app/components/Globals/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen" role="main" aria-label="Mvndicraft Home Page">
      <Heading />
      <Discover/>
      <BentoGallery aria-label="Game Features Gallery"/>
      <News aria-label="Latest News and Updates"/>
      <ForgeKingdom/>
      <CTA/>
    </main>
  );
}
