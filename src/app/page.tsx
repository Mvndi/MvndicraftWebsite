"use client";

import Heading from "@/app/components/Heading";
import Discover from "@/app/components/Discover";
import BentoGallery from "@/app/components/BentoGallery";
import ForgeKingdom from "@/app/components/ForgeKingdom";
import Playlist from "@/app/components/Playlist";
import CTA from "@/app/components/Globals/CTA";

export default function Home() {
  return (
    <main className="relative min-h-screen" role="main" aria-label="Mvndicraft Home Page">
      <Heading />
      <Discover/>
      <Playlist/>
      <BentoGallery aria-label="Game Features Gallery"/>
      <ForgeKingdom/>
      <CTA/>
    </main>
  );
}
