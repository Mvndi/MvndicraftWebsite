"use client";

import Link from "next/link";
import { DiscordIcon } from "@/app/components/Util/Icons";
import { Crown } from "lucide-react";
import { useState } from "react";

export default function Heading() {
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText("mc.mvndicraft.net");
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    }

    return (
        <main className="relative z-10 max-w-full min-h-[95vh] mx-auto px-4 md:px-8 py-24 flex flex-col justify-center items-center gap-12" role="main" aria-label="Mvndicraft - Medieval Geopolitical Minecraft Server">
            <div className="absolute inset-0 bg-[#FF813D] opacity-45 z-0" aria-hidden="true" />

            <div
                className="absolute inset-0 z-0"
                style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(11,11,15,0.7) 38%, rgba(11,11,15,1) 100%)'
                }}
                aria-hidden="true"
            />

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-[95vh] object-cover -z-10"
                aria-label="Mvndicraft gameplay video showcasing medieval warfare and kingdom building"
            >
                <source src="/video/mvndi.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <div className="relative z-10 flex flex-col items-center gap-8 md:gap-12 w-full">
                <header>
                    <h1 className="text-3xl sm:text-4xl md:text-6xl text-center font-black leading-[0.85] tracking-tighter uppercase max-w-4xl">
                        <span className="text-white">Join us for an unparalleled journey</span>
                    </h1>
                    <p className="sr-only">Mvndicraft - The ultimate medieval geopolitical Minecraft server experience</p>
                </header>

                <div className="relative flex flex-col items-center">
                    <div 
                        onClick={handleCopy} 
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') handleCopy(); }}
                        className="group flex items-center gap-3 bg-[#080808]/60 border border-[#333] px-5 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-md hover:border-[#E2B714] cursor-pointer transition-all"
                        aria-label="Copy server IP address to clipboard"
                    >
                        <span className="text-gray-400 text-xs md:text-sm uppercase tracking-widest">Server IP:</span>
                        <code className="text-white font-mono font-bold text-sm md:text-base">mc.mvndicraft.net</code>
                    </div>
                    {copied && (
                        <span className="absolute -bottom-8 text-[#E2B714] text-xs font-bold uppercase" role="status" aria-live="polite">Copied!</span>
                    )}
                </div>

                <nav className="flex flex-col items-center gap-4 w-full" aria-label="Main navigation">
                    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full px-4 sm:px-0">
                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                            <Link 
                                href="#discover"
                                className="bg-[#26262a] text-white w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest duration-300 rounded-md cursor-pointer h-[60px] md:h-[72px] flex items-center justify-center gap-3"
                                aria-label="Discover game features and gameplay"
                            >
                                <Crown className="w-5 h-5" aria-hidden="true" /> Discover the game
                            </Link>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                            <Link 
                                href="https://discord.com/invite/2BP6h8Ssta" 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="bg-[#E2B714] text-black w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest rounded-md cursor-pointer h-[60px] md:h-[72px] flex items-center justify-center gap-3"
                                aria-label="Join our Discord community"
                            >
                                <DiscordIcon className="fill-black w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                                JOIN DISCORD
                            </Link>
                        </div>
                    </div>
                    <p className="font-light text-gray-300 text-sm">Java edition only</p>
                </nav>
            </div>
        </main>
    )
}