import Link from "next/link";
import Image from "next/image";
import { DiscordIcon, TwitterIcon, YoutubeIcon } from "@/app/components/Icons";
import { ShoppingCart, Map } from "lucide-react";
import mvndilogo from "../../../../public/image/mvndilogo.png"


export default function Heading() {
    return (
        <>
        <nav className="sticky top-0 z-50">
            <div className="bg-black h-[35px]">
                <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
                    <div className="flex text-white items-center ml-5">
                        <Link href="https://x.com/mvndicraft" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors">
                            <TwitterIcon className="w-4 h-4" />
                        </Link>
                        <Link href="https://www.youtube.com/@mvndicraft4233" target="_blank" rel="noreferrer" className="hover:bg-[#4d4d4d] p-2 transition-colors">
                            <YoutubeIcon className="w-4 h-4" />
                        </Link>
                    </div>
                    <div className="flex text-white justify-between items-center">

                        <Link href="https://discord.com/invite/2BP6h8Ssta" target="_blank" rel="noreferrer" className="text-sm flex items-center gap-1 hover:bg-[#4d4d4d] h-24 w-24 transition-transform justify-center duration-300">
                            <DiscordIcon className="w-4" />  Discord</Link>
                        <Link href="https://map.mvndicraft.net/#minecraft_overworld;flat;108608,64,29328;1" target="_blank" rel="noreferrer" className="text-sm flex items-center gap-1 hover:bg-[#4d4d4d] h-15 w-15 transition-transform justify-center duration-300">
                            <Map className="w-4" /> Map</Link>
                    </div>
                </div>
            </div>
            <div className="fixed inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1f2937_0%,#080808_100%)]" />
            <div className="relative z-10 border-b border-[#333] bg-[#101015]/80 backdrop-blur-md">
                <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

                    <div className="flex items-center text-2xl">
                        <Image src={mvndilogo} alt={"logo"} />
                        <span className="text-[#00FF85] mt-3 ml-3 px-2">●</span> <p className="text-xs mt-3">342<span className="text-xs"> Online players</span></p>
                    </div>

                    <div className="flex gap-6 text-xs uppercase items-center font-bold tracking-widest">
                        <Link href="#" className="hover:text-[#E2B714] transition-colors">Home</Link>
                        <Link href="https://www.planetminecraft.com/server/mvndicraft-medieval-geopol/" target="_blank" rel="noreferrer" className="hover:text-[#E2B714] transition-colors">Vote</Link>
                        <Link href="#" className="hover:text-[#E2B714] bg-[#26262a] px-4 py-2 rounded-md transition-colors">Forums</Link>
                        <Link href="#" className="hover:text-[#E2B714] transition-colors">Wiki</Link>
                        <Link href="https://www.patreon.com/Mvndicraft" target="_blank" rel="noreferrer" className="border border-[#E2B714] flex px-4 hover:bg-[#E2B714] hover:text-black transition-all items-center">
                            <ShoppingCart width={16} className="mr-2"/> Store</Link>
                    </div>
                </div>
            </div>
            </nav>
        </>
    );
}