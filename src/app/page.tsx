"use client";

import { useState } from "react"
import Image from "next/image";
import News from "@/app/components/News/News";
import Footer from "@/app/components/Footer";
import army from "../../public/image/army.png";
import chivalry from "../../public/image/chivalry.png";
import Heading from "./components/Globals/Heading";

export default function Home() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("mc.mvndicraft.net");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <div className="relative min-h-screen">
      <Heading/>
      <main className="relative z-10 max-w-full min-h-[95vh] mx-auto px-8 py-24 flex flex-col justify-center items-center gap-12">
        <div className="absolute inset-0 bg-[#FF813D] opacity-45 z-0" />

        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(11,11,15,0.7) 38%, rgba(11,11,15,1) 100%)'
          }}
        />

        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-[95vh] object-cover -z-10"
        >
          <source src="/video/mvndi.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center gap-12">
          <h1 className="text-4xl md:text-6xl text-center font-black leading-[0.85] tracking-tighter uppercase max-w-4xl">
            <span className="text-white">Join us for an unparalleled journey</span>
          </h1>
          <div className="relative flex flex-col items-center">
            <div onClick={handleCopy} className="group flex items-center gap-3 bg-[#080808]/60 border border-[#333] px-8 py-4 rounded-full backdrop-blur-md hover:border-[#E2B714] cursor-pointer transition-all">
              <span className="text-gray-400 text-sm uppercase tracking-widest">IP:</span>
              <code className="text-white font-mono font-bold">mc.mvndicraft.net</code>
            </div>
            {copied && (
              <span className="absolute -bottom-8 text-[#E2B714] text-xs font-bold uppercase">Copied!</span>
            )}
          </div>
          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105">
                <button className="bg-[#26262a] text-white px-12 py-5 font-black uppercase tracking-widest duration-300 rounded-md cursor-pointer">
                  Discover the game
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105">
                <button className="bg-[#E2B714] text-black px-12 p-5 font-black uppercase tracking-widest rounded-md cursor-pointer">
                  Play for free
                </button>
              </div>
            </div>
            <p className="font-light text-gray-300">Java edition only</p>
          </div>
        </div>
      </main>
      <section className="max-w-7xl mt-10 mx-auto px-8">
        <div className="flex justify-between items-start gap-12">
          <div className="w-1/2">
            <Image src={chivalry} alt={"Warriors riding horses"} className="rounded-xl hover:scale-105 transition-transform duration-300"/>
          </div>
          <div className="w-1/2 text-right text-md mt-10">
            <p className="text-white text-2xl font-bold">Discover MvndiCraft</p>
            <div className="my-3">
              <p>Explore a realm where the rise and fall of nations intertwine. Build grand citadels, forge iron alliances, and wage epic wars for the conquest of the known world.</p>
              <br />
              <p>Prepare for a limitless journey on MvndiCraft—the birthplace of your legend.</p>
            </div>
          </div>
        </div>
      </section>

      <News />
<section className="w-full bg-[#14141B] py-16 mt-10">
  <div className="max-w-7xl mx-auto px-8">
    <h2 className="text-center text-5xl font-bold text-white mb-5">Forge your own kingdom!</h2>
    <p className="mx-auto text-center max-w-4xl mb-10 text-gray-400">From the first stone of your stronghold to the command of vast armies, every decision shapes the realm. Rise above the chaos, secure your borders, and dominate a world where only the cunning and the bold survive.</p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      
      <div className="md:col-span-2 w-full">
        <Image
          src={army}
          alt="Mvndicraft warriors"
          className="w-full h-auto rounded-lg shadow-xl"
          priority
        />
      </div>

      <div className="md:col-span-1 flex flex-col gap-4">
        <div className="w-full h-[400px] overflow-hidden rounded-xl border border-[#2a2a2e]">
          <iframe
            src="https://map.mvndicraft.net/#minecraft_overworld;flat;108608,64,29328;1"
            width="100%"
            height="100%"
            className="border-0"
            title="Carte du serveur Minecraft"
            allowFullScreen
          />
        </div>
        
        <a 
          href="https://map.mvndicraft.net/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="w-full py-3 bg-[#E2B714] text-[#111114] font-black uppercase tracking-widest text-sm text-center rounded hover:bg-yellow-500 transition-all shadow-[0_0_15px_rgba(226,183,20,0.3)]"
        >
          OPEN THE MAP
        </a>
      </div>
      
    </div>
  </div>
</section>
      <Footer />
    </div>
  );
};