"use client";

import Image from "next/image";
import Link from "next/link";
import { DiscordIcon } from "@/app/components/Util/Icons";

export default function CTA() {
    return (
        <section className="relative w-full py-20 md:py-32 overflow-hidden">
            <Image
                src="/image/KinoThumbnail.png"
                alt="Join Mvndicraft"
                fill
                className="w-full h-full object-cover object-center"
            />

            <div className="absolute inset-0 bg-black/80" />
            <div className="relative z-10 flex flex-col items-center gap-6 text-center px-4 md:px-8">
                <span className="text-[#FFD700] text-xs font-black uppercase tracking-[0.3em]">
                    The realm is waiting
                </span>
                <h2 className="text-white text-4xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] max-w-3xl">
                    Your adventure <br />
                    <span className="text-[#FFD700]">starts now</span>
                </h2>
                <p className="text-white text-base md:text-xl max-w-xl font-semibold leading-relaxed tracking-wide px-2 md:px-0">
                    Thousands of players are already building empires, forging alliances and waging war.
                    The only question is <span className="text-[#FFD700]">which side are you on?</span>
                </p>

                <div className="flex flex-col sm:flex-row justify-center gap-4 mt-4 w-full px-4 sm:px-0">
                    <button
                        onClick={() => navigator.clipboard.writeText("mc.mvndicraft.net")}
                        className="w-full sm:w-auto bg-[#FFD700] text-[#111114] px-8 md:px-12 py-4 font-black uppercase tracking-widest text-sm rounded cursor-pointer hover:bg-yellow-500 transition-all shadow-[0_0_30px_rgba(226,183,20,0.4)]"
                    >
                        mc.mvndicraft.net
                    </button>
                    <Link
                        href="https://discord.com/invite/2BP6h8Ssta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full sm:w-auto flex items-center justify-center gap-3 border border-white/20 text-white px-8 md:px-12 py-4 font-black uppercase tracking-widest text-sm rounded hover:border-[#FFD700]/60 transition-all"
                    >
                        <DiscordIcon className="fill-white w-5 h-5 shrink-0" /> Join Discord
                    </Link>
                </div>
            </div>
        </section>
    )
}
