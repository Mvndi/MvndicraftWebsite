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

    const handleScrollTo = (id: string) => {
        const el = document.getElementById(id);
        if (el) {
            el.scrollIntoView({ behavior: "smooth" });
            window.history.replaceState(null, "", window.location.pathname);
        }
    }

    return (
        <main
            className="relative z-10 w-full min-h-[95vh] py-24 flex flex-col justify-center items-center gap-12 overflow-hidden"
            role="main"
            aria-label="Mvndicraft - Medieval Geopolitical Minecraft Server"
        >

            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
                aria-label="Mvndicraft gameplay video showcasing medieval warfare and kingdom building"
            >
                <source src="https://raw.githubusercontent.com/MatthieuClaessens/MvndicraftWebsite/refs/heads/main/public/video/mvndi.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-[#FF813D] opacity-45 z-10" aria-hidden="true" />

            <div
                className="absolute inset-0 z-10"
                style={{
                    background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(11,11,15,0.7) 38%, rgba(11,11,15,1) 100%)'
                }}
                aria-hidden="true"
            />

            <div className="relative z-20 flex flex-col items-center gap-8 md:gap-12 w-full px-4 md:px-8">
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
                        className="group flex items-center gap-3 bg-[#080808]/60 border border-[#333] px-5 md:px-8 py-3 md:py-4 rounded-full backdrop-blur-md hover:border-[#FFD700] cursor-pointer transition-all"
                        aria-label="Copy server IP address to clipboard"
                    >
                        <span className="text-gray-400 text-xs md:text-sm uppercase tracking-widest">Server IP:</span>
                        <code className="text-white font-mono font-bold text-sm md:text-base">mc.mvndicraft.net</code>
                    </div>
                    {copied && (
                        <span className="absolute -bottom-8 text-[#FFD700] text-xs font-bold uppercase" role="status" aria-live="polite">Copied!</span>
                    )}
                </div>

                <nav className="flex flex-col items-center gap-4 w-full" aria-label="Main navigation">
                    <div className="flex flex-col sm:flex-row justify-center gap-4 w-full">
                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                            <button
                                onClick={() => handleScrollTo("discover")}
                                className="bg-[#26262a] text-white w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest duration-300 rounded-md cursor-pointer h-15 md:h-18 flex items-center justify-center gap-3"
                                aria-label="Discover game features and gameplay"
                            >
                                <Crown className="w-5 h-5" aria-hidden="true" /> Discover the game
                            </button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105 w-full sm:w-auto">
                            <Link
                                href="https://discord.com/invite/2BP6h8Ssta"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="bg-[#FFD700] text-black w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 font-black uppercase tracking-widest rounded-md cursor-pointer h-15 md:h-18 flex items-center justify-center gap-3"
                                aria-label="Join our Discord community"
                            >
                                <DiscordIcon className="fill-black w-5 h-5 md:w-6 md:h-6" aria-hidden="true" />
                                JOIN DISCORD
                            </Link>
                        </div>
                    </div>
                    <p className="font-light text-gray-300 text-sm">Version <span className="font-bold">1.21.11</span> | Java edition only</p>
                </nav>
            </div>
        </main>
    )
}
