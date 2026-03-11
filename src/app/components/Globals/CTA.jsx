import Image from "next/image";
import Link from "next/link";
import KinoThumbnail from "../../../../public/image/KinoThumbnail.png";
import { DiscordIcon } from "@/app/components/Icons"


export default function CTA() {
    return (
        <section className="relative w-full py-32 overflow-hidden">
            <Image
                src={KinoThumbnail}
                alt="Join Mvndicraft"
                fill
                className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/80" />
            <div className="relative z-10 flex flex-col items-center gap-6 text-center px-8">
                <span className="text-[#E2B714] text-xs font-black uppercase tracking-[0.3em]">
                    The realm is waiting
                </span>
                <h2 className="text-white text-5xl md:text-7xl font-black uppercase tracking-tighter leading-[0.9] max-w-3xl">
                    Your legend <br />
                    <span className="text-[#E2B714]">starts now</span>
                </h2>
                <p className="text-white text-lg md:text-xl max-w-xl font-semibold leading-relaxed tracking-wide">
                    Thousands of players are already building empires, forging alliances and waging war.
                    The only question is <span className="text-[#E2B714]">which side are you on?</span>
                </p>

                <div className="flex flex-wrap justify-center gap-4 mt-4">
                    <button
                        onClick={() => navigator.clipboard.writeText("mc.mvndicraft.net")}
                        className="bg-[#E2B714] text-[#111114] px-12 py-4 font-black uppercase tracking-widest text-sm rounded cursor-pointer hover:bg-yellow-500 transition-all shadow-[0_0_30px_rgba(226,183,20,0.4)]"
                    >
                        mc.mvndicraft.net
                    </button>
                    <Link
                        href="https://discord.com/invite/2BP6h8Ssta"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 border border-white/20 text-white px-12 py-4 font-black uppercase tracking-widest text-sm rounded hover:border-[#E2B714]/60 transition-all"
                    >
                        <DiscordIcon className="fill-white w-5 h-5 shrink-0" /> Join Discord
                    </Link>

                </div>
            </div>
        </section>
    )
}