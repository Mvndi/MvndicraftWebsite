"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { DiscordIcon, TwitterIcon, YoutubeIcon } from "@/app/components/Util/Icons";
import { ShoppingCart, Map, Menu, X, Music } from "lucide-react";
import mvndilogo from "../../../../public/image/mvndilogo.png";
import ServerStatus from "../Util/ServerStatus";

export default function Heading() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="sticky top-0 z-50">

            <div className="hidden md:block bg-black h-8.75">
                <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
                    <div className="flex text-white items-center ml-5">
                        <Link href="https://x.com/mvndicraft" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors" aria-label="Follow on Twitter">
                            <TwitterIcon className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.youtube.com/@mvndicraft4233" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors" aria-label="Follow on YouTube">
                            <YoutubeIcon className="w-4 h-4" />
                        </Link>
                        <Link href="https://mvndi.ffm.to/symphoniaemvndi" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors" aria-label="Listen to Symphoniae Mvndi playlist">
                            <Music className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="flex text-white items-center">
                        <Link href="https://discord.com/invite/2BP6h8Ssta" target="_blank" rel="noreferrer" className="text-sm flex items-center gap-1 hover:bg-[#4d4d4d] h-8.75 w-24 transition-colors justify-center">
                            <DiscordIcon className="w-4 fill-white" /> Discord
                        </Link>
                        <Link href="https://map.mvndicraft.net/#minecraft_overworld;flat;108608,64,29328;1" target="_blank" rel="noreferrer" className="text-sm flex items-center gap-1 hover:bg-[#4d4d4d] h-8.75 px-4 transition-colors justify-center">
                            <Map className="w-4" /> Map
                        </Link>
                    </div>
                </div>
            </div>

            <div className="md:hidden bg-black h-8.75">
                <div className="flex justify-center items-center h-full gap-4 text-white text-xs font-bold uppercase tracking-wider">
                    <Link href="https://mvndi.ffm.to/symphoniaemvndi" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors" aria-label="Listen to Symphoniae Mvndi playlist">
                        <Music className="w-4 h-4" />
                    </Link>
                    <Link href="https://discord.com/invite/2BP6h8Ssta" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#FFD700] transition-colors px-2 h-full">
                        <DiscordIcon className="w-3.5 fill-white" /> Discord
                    </Link>
                    <span className="text-[#333]">|</span>
                    <Link href="https://map.mvndicraft.net/" target="_blank" rel="noreferrer" className="flex items-center gap-1.5 hover:text-[#FFD700] transition-colors px-2 h-full">
                        <Map className="w-3.5" /> Map
                    </Link>

                    <span className="text-[#333]">|</span>
                    <Link href="https://x.com/mvndicraft" target="_blank" rel="noreferrer" className="flex items-center hover:text-[#FFD700] transition-colors px-2 h-full" aria-label="Follow on Twitter">
                        <TwitterIcon className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[#333]">|</span>
                    <Link href="https://www.youtube.com/@mvndicraft4233" target="_blank" rel="noreferrer" className="flex items-center hover:text-[#FFD700] transition-colors px-2 h-full" aria-label="Follow on YouTube">
                        <YoutubeIcon className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>


            <div className="fixed inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1f2937_0%,#080808_100%)]" />

            <div className="relative z-10 border-b border-[#333] bg-[#101015]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">
                    <div className="flex items-center text-2xl">
                        <Link href="/">
                            <Image src={mvndilogo} alt="logo" />
                        </Link>
                        <ServerStatus />
                    </div>

                    <div className="hidden md:flex gap-6 text-xs uppercase items-center font-extrabold tracking-widest">
                        <Link href="#" className="hover:text-[#FFD700] transition-colors">Home</Link>
                        <Link href="https://www.planetminecraft.com/server/mvndicraft-medieval-geopol/" target="_blank" rel="noreferrer" className="hover:text-[#FFD700] transition-colors">Vote</Link>
                        <Link href="#" className="hover:text-[#FFD700] bg-[#26262a] px-4 py-2 rounded-md transition-colors">Wiki</Link>
                        <Link href="https://www.patreon.com/Mvndicraft" target="_blank" rel="noreferrer" className="border border-[#FFD700] flex px-4 hover:bg-[#FFD700] hover:text-black transition-all items-center">
                            <ShoppingCart width={16} className="mr-2" /> Store
                        </Link>
                    </div>

                    <button
                        className="md:hidden text-white p-2"
                        onClick={() => setMenuOpen(!menuOpen)}
                        aria-label={menuOpen ? "Close menu" : "Open menu"}
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <div className={`md:hidden absolute w-full border-t border-[#333] bg-[#101015]/95 backdrop-blur-md flex flex-col text-white text-xs uppercase font-bold tracking-widest shadow-xl transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0 border-0"}`}>
                    <Link href="#" onClick={() => setMenuOpen(false)} className="px-6 py-4 hover:bg-[#1a1a1f] hover:text-[#FFD700] transition-colors">Home</Link>
                    <Link href="https://www.planetminecraft.com/server/mvndicraft-medieval-geopol/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="px-6 py-4 hover:bg-[#1a1a1f] hover:text-[#FFD700] transition-colors">Vote</Link>
                    <Link href="#" onClick={() => setMenuOpen(false)} className="px-6 py-4 bg-[#26262a] hover:text-[#FFD700] transition-colors">Wiki</Link>
                    <Link href="https://www.patreon.com/Mvndicraft" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="px-6 py-4 border-t border-[#333] text-[#FFD700] flex items-center gap-2 hover:bg-[#1a1a1f] transition-colors">
                        <ShoppingCart width={14} /> Store
                    </Link>
                </div>
            </div>
        </nav>
    );
}
