import Image from "next/image";

import Thumbnail from "../../../public/image/ThumbnailAchillle23s.png";
import FightingByz from "../../../public/image/FightingByz.png";
import Attack from "../../../public/image/ArabAttack_1.png";
import KinoThumbnail from "../../../public/image/KinoThumbnail.png";
import Civ from "../../../public/image/San_Giorgio.png";
import Army from "../../../public/image/army.png";


export default function BentoGallery() {
    return (
        <section className="max-w-7xl mx-auto px-8 mt-20">
            <div className="text-center mb-10">
                <span className="text-[#E2B714] text-xs font-black uppercase tracking-[0.3em]">What awaits you</span>
                <h2 className="text-white text-4xl font-black uppercase tracking-tighter leading-[0.9] mt-3">
                    Everything you need <span className="text-[#E2B714]">to dominate</span>
                </h2>
            </div>

            <div className="grid grid-cols-3 gap-4">

                <div className="col-span-2 row-span-2 relative rounded-2xl overflow-hidden group min-h-[480px]">
                    <Image src={Attack} alt="Large-Scale Warfare" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-8 flex flex-col gap-2">
                        <span className="text-[#E2B714] text-xs font-black uppercase tracking-widest">Game Mode</span>
                        <h3 className="text-white text-3xl font-black uppercase tracking-tighter leading-tight">Large-Scale<br />Warfare</h3>
                        <p className="text-gray-300 text-sm max-w-sm leading-relaxed">Lead armies into massive battles. Every decision can turn the tide of war.</p>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden group min-h-[232px]">
                    <Image src={FightingByz} alt="PvP Combat" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 flex flex-col gap-1">
                        <span className="text-[#E2B714] text-xs font-black uppercase tracking-widest">PvP</span>
                        <h3 className="text-white text-lg font-black uppercase tracking-tight leading-tight">Intense Combat</h3>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden group min-h-[232px]">
                    <Image src={Thumbnail} alt="Civilizations" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 flex flex-col gap-1">
                        <span className="text-[#E2B714] text-xs font-black uppercase tracking-widest">Lore</span>
                        <h3 className="text-white text-lg font-black uppercase tracking-tight leading-tight">Civilizations</h3>
                    </div>
                </div>

            </div>

            <div className="grid grid-cols-3 gap-4 mt-4">

                <div className="relative rounded-2xl overflow-hidden group min-h-[220px]">
                    <Image src={KinoThumbnail} alt="Factions" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 flex flex-col gap-1">
                        <span className="text-[#E2B714] text-xs font-black uppercase tracking-widest">Factions</span>
                        <h3 className="text-white text-lg font-black uppercase tracking-tight">Rise to Power</h3>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden group min-h-[220px]">
                    <Image src={Civ} alt="Build" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 flex flex-col gap-1">
                        <span className="text-[#E2B714] text-xs font-black uppercase tracking-widest">Building</span>
                        <h3 className="text-white text-lg font-black uppercase tracking-tight">Forge Your City</h3>
                    </div>
                </div>

                <div className="relative rounded-2xl overflow-hidden group min-h-[220px]">
                    <Image src={Army} alt="Join the battle" fill className="object-cover object-top group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
                    <div className="absolute bottom-0 left-0 p-5 flex flex-col gap-2">
                        <span className="text-[#E2B714] text-xs font-black uppercase tracking-widest">Ready?</span>
                        <h3 className="text-white text-lg font-black uppercase tracking-tight">Join the Battle</h3>
                        <p className="text-gray-400 text-xs">mc.mvndicraft.net</p>
                    </div>
                </div>

            </div>
        </section>
    )
}