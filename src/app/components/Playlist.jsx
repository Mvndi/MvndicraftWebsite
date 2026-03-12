"use client";
import { Music } from "lucide-react";


export default function Playlist() {
    return (
        <section className="max-w-4xl mx-auto px-5 py-16" aria-labelledby="playlist-heading">
            <header className="text-center mb-8">
                <h2 id="playlist-heading" className="text-[#E2B714] text-3xl md:text-4xl font-black uppercase tracking-tighter leading-[0.9]">
                    <Music className="w-8 h-8 md:w-10 md:h-10 inline-block mr-2" aria-hidden="true" />
                    Original soundtrack
                </h2>
                <p className="text-gray-300 text-sm md:text-base mt-4 max-w-2xl mx-auto">
                    Immerse yourself in the medieval atmosphere with our carefully curated playlist featuring epic orchestral music and authentic medieval compositions that enhance your Mvndicraft gaming experience.
                </p>
            </header>
            <div className="relative">
                <iframe
                    src="https://open.spotify.com/embed/album/6BCqWyGakRLnKDfnEVAj7y?utm_source=generator&theme=0"
                    width="100%"
                    height="352"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    className="rounded-xl"
                    title="Mvndicraft Medieval Playlist on Spotify"
                    aria-label="Spotify player for Mvndicraft medieval music playlist"
                />
                <noscript>
                    <div className="bg-[#14141B] border border-[#2a2a2e] rounded-xl p-6 text-center">
                        <p className="text-gray-300 mb-4">Please enable JavaScript to view the Spotify playlist.</p>
                        <a 
                            href="https://open.spotify.com/album/6BCqWyGakRLnKDfnEVAj7y" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-block bg-[#E2B714] text-[#111114] font-bold uppercase tracking-wider px-6 py-3 rounded hover:bg-yellow-500 transition-all"
                        >
                            Open Playlist on Spotify
                        </a>
                    </div>
                </noscript>
            </div>
        </section>
    )
}