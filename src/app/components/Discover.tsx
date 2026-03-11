"use client";

import Image from "next/image";
import chivalry from "../../../public/image/chivalry.png";

export default function Discover() {
    return (
        <section className="max-w-7xl mt-10 mx-auto px-4 md:px-8" aria-labelledby="discover-heading">
            <div className="flex flex-col md:flex-row justify-between items-start gap-8 md:gap-12">
                <figure className="w-full md:w-1/2">
                    <Image
                        src={chivalry}
                        alt="Medieval warriors on horseback charging into battle on the Mvndicraft server"
                        className="rounded-xl hover:scale-105 transition-transform duration-300 w-full"
                    />
                    <figcaption className="sr-only">Medieval cavalry warfare on Mvndicraft server</figcaption>
                </figure>
                <article className="w-full md:w-1/2 text-left md:text-right md:mt-10 flex flex-col gap-4">
                    <header>
                        <span className="text-[#E2B714] text-xs font-black uppercase tracking-[0.3em]">
                            Discover Mvndicraft
                        </span>
                        <h2 id="discover-heading" className="text-white text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9]">
                            A world forged <br />
                            <span className="text-[#E2B714]">in conflict</span>
                        </h2>
                    </header>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        Explore a realm where the rise and fall of nations intertwine. Build grand citadels,
                        forge iron alliances, and wage epic wars for the conquest of the known world.
                        Prepare for a limitless journey on MvndiCraft —{" "}
                        <span className="text-white font-semibold">the birthplace of your legend.</span>
                    </p>

                    <ul className="flex flex-wrap justify-start md:justify-end gap-2 mt-2" aria-label="Server features">
                        {["Custom Plugins", "Active Community", "Regular Events", "No Pay-to-Win"].map((tag) => (
                            <li key={tag}>
                                <span className="bg-[#111115] border border-[#2a2a2e] text-gray-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                    {tag}
                                </span>
                            </li>
                        ))}
                    </ul>
                </article>
            </div>
        </section>
    )
}
