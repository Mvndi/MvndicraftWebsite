import Link from "next/link";

import { DiscordIcon } from "@/app/components/Icons";
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
                        <span className="text-gray-400 text-sm uppercase tracking-widest">Server IP:</span>
                        <code className="text-white font-mono font-bold">mc.mvndicraft.net</code>
                    </div>
                    {copied && (
                        <span className="absolute -bottom-8 text-[#E2B714] text-xs font-bold uppercase">Copied!</span>
                    )}
                </div>

                <div className="flex flex-col items-center gap-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105">
                            <button className="bg-[#26262a] text-white px-12 py-5 font-black uppercase tracking-widest duration-300 rounded-md cursor-pointer h-[72px] flex items-center gap-3">
                                <Crown />Discover the game
                            </button>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105">
                            <Link href="https://discord.com/invite/2BP6h8Ssta" target="_blank" rel="noreferrer" className="bg-[#E2B714] text-black px-12 py-5 font-black uppercase tracking-widest rounded-md cursor-pointer h-[72px] flex items-center gap-3">
                                <DiscordIcon className="fill-black w-6 h-6" />
                                JOIN DISCORD
                            </Link>
                        </div>
                    </div>
                    <p className="font-light text-gray-300">Java edition only</p>
                </div>
            </div>
        </main>
    )
}