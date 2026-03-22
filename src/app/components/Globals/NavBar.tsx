"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { DiscordIcon, TwitterIcon, YoutubeIcon } from "@/app/components/Util/Icons";
import { ShoppingCart, Map, Menu, X, Music } from "lucide-react";
import ServerStatus from "../Util/ServerStatus";

export default function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            zIndex: 9999,
            width: '100%'
        }}>
            <div className="hidden md:block bg-black h-9">
                <div className="max-w-7xl mx-auto flex justify-between items-center h-full px-4">
                    <div className="flex text-white items-center">
                        <Link href="https://x.com/mvndicraft" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors rounded" aria-label="Follow on Twitter">
                            <TwitterIcon className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.youtube.com/@mvndicraft4233" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors rounded" aria-label="Follow on YouTube">
                            <YoutubeIcon className="w-4 h-4" />
                        </Link>
                        <Link href="https://mvndi.ffm.to/symphoniaemvndi" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors rounded" aria-label="Listen to Symphoniae Mvndi playlist">
                            <Music className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="flex text-white items-center">
                        <Link href="https://discord.com/invite/2BP6h8Ssta" target="_blank" rel="noreferrer" className="text-sm flex items-center gap-1 hover:bg-[#4d4d4d] px-4 py-2 transition-colors rounded-md">
                            <DiscordIcon className="w-4 fill-white" /> Discord
                        </Link>
                        <Link href="https://map.mvndicraft.net/#minecraft_overworld;flat;108608,64,29328;1" target="_blank" rel="noreferrer" className="text-sm flex items-center gap-1 hover:bg-[#4d4d4d] px-4 py-2 transition-colors rounded-md">
                            <Map className="w-4" /> Map
                        </Link>
                    </div>
                </div>
            </div>

            <div className="md:hidden bg-black h-9 border-b border-[#333]">
                <div className="flex justify-center items-center h-full gap-3 text-white text-xs font-bold uppercase tracking-wider px-2">
                    <Link href="https://mvndi.ffm.to/symphoniaemvndi" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-1.5 transition-colors rounded" aria-label="Listen to Symphoniae Mvndi">
                        <Music className="w-4 h-4" />
                    </Link>
                    <Link href="https://discord.com/invite/2BP6h8Ssta" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#FFD700] transition-colors px-2">
                        <DiscordIcon className="w-3.5 fill-white" /> Discord
                    </Link>
                    <span className="text-[#333] mx-1">|</span>
                    <Link href="https://map.mvndicraft.net/" target="_blank" rel="noreferrer" className="flex items-center gap-1 hover:text-[#FFD700] transition-colors px-2">
                        <Map className="w-3.5" /> Map
                    </Link>
                    <span className="text-[#333] mx-1">|</span>
                    <Link href="https://x.com/mvndicraft" target="_blank" rel="noreferrer" className="p-1.5 hover:bg-[#4d4d4d] transition-colors rounded" aria-label="Twitter">
                        <TwitterIcon className="w-3.5 h-3.5" />
                    </Link>
                    <span className="text-[#333] mx-1">|</span>
                    <Link href="https://www.youtube.com/@mvndicraft4233" target="_blank" rel="noreferrer" className="p-1.5 hover:bg-[#4d4d4d] transition-colors rounded" aria-label="YouTube">
                        <YoutubeIcon className="w-3.5 h-3.5" />
                    </Link>
                </div>
            </div>

            <nav className="border-b border-[#333] bg-[#101015]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-4 md:px-8 flex justify-between items-center py-3">
                    <div className="flex items-center gap-3 text-xl md:text-2xl">
                        <Link href="/" className="flex-shrink-0">
                            <Image 
                                src="/image/mvndilogo.png" 
                                alt="Mvndicraft logo" 
                                width={9999} 
                                height={9999}
                                className="w-28 sm:w-36 md:w-44 h-10 sm:h-12 md:h-14 object-contain"
                            />
                        </Link>
                        <ServerStatus />
                    </div>
                    
                    <div className="hidden md:flex gap-6 text-xs uppercase items-center font-black tracking-widest">
                        <Link href="/" className="hover:text-[#FFD700] transition-colors px-2 py-1 rounded">Home</Link>
                        <Link href="https://www.planetminecraft.com/server/mvndicraft-medieval-geopol/" target="_blank" rel="noreferrer" className="hover:text-[#FFD700] transition-colors px-2 py-1 rounded">Vote</Link>
                        <Link href="https://wiki.mvndicraft.net/rules.html" target="_blank" rel="noreferrer" className="hover:text-[#FFD700] transition-colors px-2 py-1 rounded">Rules</Link>
                        <Link href="https://wiki.mvndicraft.net/" target="_blank" rel="noreferrer" className="hover:text-[#FFD700] bg-[#26262a] px-6 py-2 rounded-md transition-all">Wiki</Link>
                        <Link href="https://www.patreon.com/Mvndicraft" target="_blank" rel="noreferrer" className="border border-[#FFD700] flex px-6 py-2 hover:bg-[#FFD700] hover:text-black transition-all items-center rounded-md">
                            <ShoppingCart width={16} className="mr-2" /> Store
                        </Link>
                    </div>

                    <button 
                        className="md:hidden text-white p-2 hover:bg-[#26262a] rounded-md transition-colors" 
                        onClick={() => setMenuOpen(!menuOpen)} 
                        aria-label={menuOpen ? "Close menu" : "Open menu"} 
                        aria-expanded={menuOpen}
                    >
                        {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>

                <div className={`md:hidden absolute top-full left-0 w-full border-t border-[#333] bg-[#101015]/95 backdrop-blur-md flex flex-col text-white text-xs uppercase font-black tracking-widest shadow-2xl transition-all duration-300 ease-in-out overflow-hidden ${
                    menuOpen 
                        ? "max-h-72 opacity-100 visible" 
                        : "max-h-0 opacity-0 invisible"
                }`}>
                    <Link href="/" onClick={() => setMenuOpen(false)} className="px-6 py-4 hover:bg-[#1a1a1f] hover:text-[#FFD700] transition-colors border-b border-[#333]">
                        Home
                    </Link>
                    <Link href="https://www.planetminecraft.com/server/mvndicraft-medieval-geopol/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="px-6 py-4 hover:bg-[#1a1a1f] hover:text-[#FFD700] transition-colors border-b border-[#333]">
                        Vote
                    </Link>
                    <Link href="https://wiki.mvndicraft.net/rules.html" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="px-6 py-4 hover:bg-[#1a1a1f] hover:text-[#FFD700] transition-colors border-b border-[#333]">
                        Rules
                    </Link>                    
                    <Link href="https://wiki.mvndicraft.net/" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="px-6 py-4 bg-[#26262a] hover:text-[#FFD700] transition-colors border-b border-[#333]">
                        Wiki
                    </Link>
                    <Link href="https://www.patreon.com/Mvndicraft" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)} className="px-6 py-4 border-t border-[#333] text-[#FFD700] flex items-center gap-2 hover:bg-[#1a1a1f] transition-colors">
                        <ShoppingCart width={16} className="ml-1" /> Store
                    </Link>
                </div>
            </nav>
        </div>
    );
}