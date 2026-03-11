import Image from "next/image";
import chivalry from "../../../public/image/chivalry.png";

export default function Discover() {
    return (
    <section className="max-w-7xl mt-10 mx-auto px-8">
        <div className="flex justify-between items-start gap-12">
            <div className="w-1/2">
                <Image
                    src={chivalry}
                    alt="Warriors riding horses"
                    className="rounded-xl hover:scale-105 transition-transform duration-300"
                />
            </div>
            <div className="w-1/2 text-right mt-10 flex flex-col gap-4">
                <span className="text-[#E2B714] text-xs font-black uppercase tracking-[0.3em]">
                    Discover Mvndicraft
                </span>
                <h2 className="text-white text-4xl font-black uppercase tracking-tighter leading-[0.9]">
                    A world forged <br />
                    <span className="text-[#E2B714]">in conflict</span>
                </h2>
                <p className="text-gray-300 text-base leading-relaxed">
                    Explore a realm where the rise and fall of nations intertwine. Build grand citadels,
                    forge iron alliances, and wage epic wars for the conquest of the known world.
                    Prepare for a limitless journey on MvndiCraft —{" "}
                    <span className="text-white font-semibold">the birthplace of your legend.</span>
                </p>

                <div className="flex flex-wrap justify-end gap-2 mt-2">
                    {["Custom Plugins", "Active Community", "Regular Events", "No Pay-to-Win"].map((tag) => (
                        <span key={tag} className="bg-[#111115] border border-[#2a2a2e] text-gray-400 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    </section>
    )
}