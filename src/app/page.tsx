"use client";

import Image from "next/image";
import mvndilogo from "../../public/image/mvndilogo.png"
import Link from "next/link";
import { ShoppingCart } from "lucide-react";
import News from "@/app/components/News";
import Footer from "@/app/components/Footer";

export default function Home() {
  return (
<div className="bg-black h-[35px]">
  <div className="max-w-7xl mx-auto px-8 flex justify-between items-center h-full">
    <div className="flex gap-4 text-white">
      <p>test</p>
    </div>
    <div className="flex gap-4 text-white">
      <p className="text-sm">Discord</p>
      <p className="text-sm">Map</p>
    </div>
  </div>
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1f2937_0%,#080808_100%)]" />
      <nav className="relative z-10 border-b border-[#333] bg-[#101015]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

          <div className="flex items-center text-2xl">
            <Image src={mvndilogo} alt={"logo"} />
            <span className="text-[#00FF85] mt-3 ml-3 px-2">●</span> <p className="text-xs mt-3">342<span className="text-xs"> Online players</span></p>
          </div>

          <div className="flex gap-6 text-xs uppercase items-center font-bold tracking-widest">
            <Link href="#" className="hover:text-[#E2B714] transition-colors">Home</Link>
            <Link href="#" className="hover:text-[#E2B714] transition-colors">Vote</Link>
            <Link href="#" className="hover:text-[#E2B714] bg-[#26262a] px-4 py-2 rounded-md transition-colors">Forums</Link>
            <Link href="#" className="hover:text-[#E2B714] transition-colors">Wiki</Link>
            <Link href="#" className="border border-[#E2B714] flex px-4 hover:bg-[#E2B714] hover:text-black transition-all">
              <ShoppingCart width={16} />
              <p className="mt-1 ml-2">Store</p>
            </Link>
          </div>
        </div>
      </nav>
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
            <p className="text-white text-2xl">test</p>
          </div>
          <div className="w-1/2 text-right text-md">
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
    <h2 className="text-center text-5xl font-bold text-white mb-12">Discover MvndiCraft</h2>
    <div className="grid grid-cols-2 gap-12">
      <div>
      </div>
      <div className="text-right">
        <p className="text-gray-300">test</p>
      </div>
    </div>
  </div>
</section>
<Footer/>
    </div>
  );
};