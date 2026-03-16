"use client";
import { Music } from "lucide-react";

export default function Playlist() {
    return (
        <section className="w-full max-w-4xl mx-auto px-4 sm:px-5 pt-10 sm:py-12 mt-10" aria-labelledby="playlist-heading"> 
            <header className="text-center mb-4 sm:mb-6"> 
                <h2 id="playlist-heading" className="text-[#FFD700] text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black uppercase tracking-tight leading-tight mb-2"> 
                    <Music className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 inline-block mr-1.5 align-middle relative top-0.5" aria-hidden="true" />
                    Original soundtrack
                </h2>
                <p className="text-gray-400 text-xs sm:text-sm leading-relaxed max-w-md sm:max-w-lg mx-auto px-2"> 
                    Immerse yourself in the medieval atmosphere with epic orchestral music enhancing your Mvndicraft experience.
                </p>
            </header>
            <div className="relative w-full mx-auto max-w-2xl">
                <iframe
                    src="https://open.spotify.com/embed/album/6BCqWyGakRLnKDfnEVAj7y?utm_source=generator&theme=0"
                    width="100%"
                    height="280"
                    frameBorder="0"
                    allow="autoplay *; clipboard-write; encrypted-media *; fullscreen *; picture-in-picture"
                    loading="lazy"
                    className="w-full h-[260px] sm:h-[300px] md:h-[352px] rounded-xl shadow-2xl"
                    title="Mvndicraft Medieval Playlist on Spotify"
                    aria-label="Spotify player for Mvndicraft medieval music playlist"
                />
                <noscript>
                    <div className="bg-[#14141B] border border-[#2a2a2e] rounded-xl p-3 sm:p-4 text-center mt-2">
                        <p className="text-gray-400 mb-2 text-xs">Enable JavaScript for Spotify player.</p>
                        <a 
                            href="https://open.spotify.com/album/6BCqWyGakRLnKDfnEVAj7y" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-[#FFD700] text-[#111114] font-bold uppercase tracking-wide px-3 sm:px-4 py-1.5 sm:py-2 rounded text-xs hover:bg-yellow-500 transition-all"
                        >
                            Open on Spotify
                        </a>
                    </div>
                </noscript>
            </div>
        </section>
    )
}
