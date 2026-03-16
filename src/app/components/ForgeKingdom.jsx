"use client";
import Image from "next/image";
import Link from "next/link";

export default function ForgeKingdom() {
    return (
        <section className="w-full bg-[#14141B] py-16 mt-10 overflow-hidden" aria-labelledby="kingdom-heading">
            <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
                <header>
                    <h2 id="kingdom-heading" className="text-center text-3xl md:text-5xl font-bold text-white mb-5">Forge your own kingdom!</h2>
                    <p className="mx-auto text-center max-w-3xl mb-10 text-gray-300 text-sm md:text-base leading-relaxed px-4 md:px-0">
                        From the first stone of your stronghold to the command of vast armies, every decision
                        shapes the realm. Rise above the chaos, secure your borders, and dominate a world where
                        only the cunning and the bold survive.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
                    <figure className="md:col-span-2 w-full">
                        <Image 
                            src="/image/army.png" 
                            alt="Medieval army formation with soldiers in armor and banners on Mvndicraft server" 
                            width={9999} 
                            height={9999}
                            className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-xl object-cover" 
                            priority 
                        />
                        <figcaption className="sr-only">Medieval warfare and kingdom building on Mvndicraft</figcaption>
                    </figure>
                    <div className="md:col-span-1 flex flex-col gap-4 w-full">
                        <div className="w-full h-64 md:h-80 lg:h-96 overflow-hidden rounded-xl border border-[#2a2a2e]">
                            <iframe
                                src="https://map.mvndicraft.net/#minecraft_overworld;flat;108608,64,29328;1"
                                width="100%"
                                height="100%"
                                className="border-0 w-full h-full"
                                title="Interactive map of Mvndicraft medieval Minecraft server showing kingdoms, cities, and territories"
                                allowFullScreen
                                loading="lazy"
                            />
                        </div>
                        <Link
                            href="https://map.mvndicraft.net/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-3 bg-[#FFD700] text-[#111114] font-black uppercase tracking-widest text-sm text-center rounded hover:bg-yellow-500 transition-all shadow-[0_0_15px_rgba(226,183,20,0.3)]"
                            aria-label="Open interactive server map"
                        >
                            OPEN THE MAP
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
