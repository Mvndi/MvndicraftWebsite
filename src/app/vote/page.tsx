import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Voting Links | Mvndicraft",
    description: "Support our Minecraft server by voting on different platforms and earn in-game rewards.",
};

export default function VotePage() {
    const votingLinks = [
        { id: 1, name: "PlanetMinecraft", url: "https://www.planetminecraft.com/server/mvndicraft-medieval-geopol/vote/" },
        { id: 2, name: "MinecraftServers", url: "https://minecraftservers.org/vote/691161" },
        { id: 3, name: "MCSL", url: "https://minecraft-server-list.com/server/520778/vote/" },
        { id: 4, name: "Minecraft-MP", url: "https://minecraft-mp.com/server/362030/vote" },
        { id: 5, name: "VoxelRank", url: "https://voxelrank.com/vote/2553-mvndicraft" },
        { id: 6, name: "MinecraftServers-List", url: "https://minecraftservers-list.com/server/mvndicraft-medieval-geopol/vote" },        
    ];

    return (
        <main className="relative pt-42 px-6 md:px-12 pb-24" role="main" id="main-content">
            <div className="max-w-4xl mx-auto">
                <header className="mb-10 text-center md:text-left">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                        Vote for <span className="text-[#ffd700]">Mvndicraft</span>
                    </h1>
                    <p className="text-gray-300 mt-2 text-sm md:text-base">
                        Support the server by voting daily and unlock exclusive in-game rewards!
                    </p>
                </header>
                
                <section aria-label="Voting platforms">
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-5 role-list">
                        {votingLinks.map((link) => (
                            <li key={link.id} className="list-none">
                                <article className="group relative bg-[#1e1e21] border border-zinc-700/70 backdrop-blur-md rounded-2xl p-6 flex flex-col justify-between shadow-xl hover:border-[#ffd700]/50 hover:shadow-[0_0_20px_rgba(255,215,0,0.1)] transition-all duration-300">
                                    <div className="mb-6">
                                        <h2 className="text-xl font-bold text-white group-hover:text-[#ffd700] transition-colors">
                                            {link.name}
                                        </h2>
                                    </div>
                                    
                                    <a 
                                        href={link.url} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        aria-label={`Vote for Mvndicraft on ${link.name} (opens in a new tab)`}
                                        className="w-full text-center bg-[#d46b33] hover:bg-[#9c4e25] text-white font-semibold py-2.5 px-4 rounded-xl shadow-md transition-all duration-200 transform active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-[#ffd700] focus:ring-offset-2 focus:ring-offset-[#1e1e21]"
                                    >
                                        Vote Now <span aria-hidden="true">→</span>
                                    </a>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>
            </div>
        </main>
    );
}