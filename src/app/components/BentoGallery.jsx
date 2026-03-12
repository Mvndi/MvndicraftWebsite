"use client";

import Image from "next/image";

export default function BentoGallery() {
    return (
        <section className="max-w-7xl mx-auto px-4 md:px-8 mt-20" aria-labelledby="gallery-heading">
            <header className="text-center mb-10">
                <span className="text-[#FFD700] text-xs font-black uppercase tracking-[0.3em]">What awaits you</span>
                <h2 id="gallery-heading" className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9] mt-3">
                    Everything you need <span className="text-[#FFD700]">to dominate</span>
                </h2>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4" role="list" aria-label="Game features gallery">

                <article className="md:col-span-2 relative rounded-2xl overflow-hidden group min-h-75 md:min-h-120" role="listitem">
                    <Image src="/image/ArabAttack_1.png" alt="Massive medieval army battle with siege engines and cavalry on Mvndicraft server" width={800} height={600} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 p-6 md:p-8 flex flex-col gap-2">
                        <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest">Game Mode</span>
                        <h3 className="text-white text-2xl md:text-3xl font-black uppercase tracking-tighter leading-tight">Large-Scale<br />Warfare</h3>
                        <p className="text-gray-300 text-sm max-w-sm leading-relaxed">Lead armies into massive battles. Every decision can turn the tide of war.</p>
                    </div>
                </article>

                <div className="grid grid-cols-2 md:grid-cols-1 gap-4">
                    <article className="relative rounded-2xl overflow-hidden group min-h-45 md:min-h-58" role="listitem">
                        <Image src="/image/FightingByz.png" alt="Intense PvP combat between Byzantine warriors in medieval armor on Mvndicraft" width={400} height={300} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" aria-hidden="true" />
                        <div className="absolute bottom-0 left-0 p-4 md:p-5 flex flex-col gap-1">
                            <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest">PvP</span>
                            <h3 className="text-white text-base md:text-lg font-black uppercase tracking-tight leading-tight">Intense Combat</h3>
                        </div>
                    </article>

                    <article className="relative rounded-2xl overflow-hidden group min-h-45 md:min-h-58" role="listitem">
                        <Image src="/image/ThumbnailAchillle23s.png" alt="Medieval civilization and kingdom building on Mvndicraft server" width={400} height={300} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                        <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" aria-hidden="true" />
                        <div className="absolute bottom-0 left-0 p-4 md:p-5 flex flex-col gap-1">
                            <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest">Lore</span>
                            <h3 className="text-white text-base md:text-lg font-black uppercase tracking-tight leading-tight">Civilizations</h3>
                        </div>
                    </article>
                </div>

            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4" role="list" aria-label="Additional game features">

                <article className="relative rounded-2xl overflow-hidden group min-h-50 md:min-h-55" role="listitem">
                    <Image src="/image/KinoThumbnail.png" alt="Medieval faction system and political gameplay on Mvndicraft" width={400} height={300} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 p-4 md:p-5 flex flex-col gap-1">
                        <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest">Factions</span>
                        <h3 className="text-white text-base md:text-lg font-black uppercase tracking-tight">Rise to Power</h3>
                    </div>
                </article>

                <article className="relative rounded-2xl overflow-hidden group min-h-50 md:min-h-55" role="listitem">
                    <Image src="/image/San_Giorgio.png" alt="Medieval city building and architecture on Mvndicraft server" width={400} height={300} className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/10 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 p-4 md:p-5 flex flex-col gap-1">
                        <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest">Building</span>
                        <h3 className="text-white text-base md:text-lg font-black uppercase tracking-tight">Forge Your City</h3>
                    </div>
                </article>

                <article className="relative rounded-2xl overflow-hidden group min-h-50 md:min-h-55" role="listitem">
                    <Image src="/image/army.png" alt="Join the medieval warfare battle on Mvndicraft server" width={400} height={300} className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-linear-to-t from-black/90 via-black/30 to-transparent" aria-hidden="true" />
                    <div className="absolute bottom-0 left-0 p-4 md:p-5 flex flex-col gap-2">
                        <span className="text-[#FFD700] text-xs font-black uppercase tracking-widest">Ready?</span>
                        <h3 className="text-white text-base md:text-lg font-black uppercase tracking-tight">Join the Battle</h3>
                        <p className="text-gray-400 text-xs">mc.mvndicraft.net</p>
                    </div>
                </article>

            </div>
        </section>
    )
}
