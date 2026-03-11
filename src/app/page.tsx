"use client";

import { useState } from "react"
import Link from "next/link";
import Image from "next/image";
import News from "@/app/components/News/News";
import army from "../../public/image/army.png";
import chivalry from "../../public/image/chivalry.png";
import Heading from "../app/components/Heading";

export default function Home() {

  return (
    <div className="relative min-h-screen">
      <Heading />
      <section className="max-w-7xl mt-10 mx-auto px-8">
        <div className="flex justify-between items-start gap-12">
          <div className="w-1/2">
            <Image src={chivalry} alt={"Warriors riding horses"} className="rounded-xl hover:scale-105 transition-transform duration-300" />
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

              <Link
                href="https://map.mvndicraft.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3 bg-[#E2B714] text-[#111114] font-black uppercase tracking-widest text-sm text-center rounded hover:bg-yellow-500 transition-all shadow-[0_0_15px_rgba(226,183,20,0.3)]"
              >
                OPEN THE MAP
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};