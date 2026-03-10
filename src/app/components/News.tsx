import React from 'react';

export default function News() {
    return (
        <section className="w-full py-20">

            <div className="max-w-7xl mx-auto px-8">

                <h2 className="text-center text-5xl font-bold text-white mb-12">Latest news</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

                    <div className="bg-[#1a1a1f] border border-[#333] rounded-lg p-6 hover:border-[#E2B714] transition-all group cursor-pointer">
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <span className="text-xs font-bold text-[#E2B714] uppercase tracking-wider">ACTUALITÉS</span>
                                <h3 className="text-2xl font-black text-white mt-1">KEY FEATURES <span className="text-[#E2B714]">VOLUME 2</span></h3>
                            </div>
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-xs font-mono text-[#666]">UPDATE:</span>
                                <span className="text-xs font-bold text-white bg-[#333] px-2 py-1 rounded">JAVA</span>
                            </div>
                            <p className="text-sm text-[#E2B714] font-bold mb-1">KEYFEATURES - VOLUME 2</p>
                            <p className="text-xs text-[#888] mb-2">05 mars 2026</p>
                            <p className="text-sm text-gray-400 line-clamp-2">
                                De nombreux patchs, une meilleure lisibilité, et des fonctionnalités...
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#1a1a1f] border border-[#333] rounded-lg p-6 hover:border-[#E2B714] transition-all group cursor-pointer">
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <span className="text-xs font-bold text-[#E2B714] uppercase tracking-wider">EVENT</span>
                                <h3 className="text-2xl font-black text-white mt-1">BEDROCK</h3>
                            </div>
                            <p className="text-sm text-[#E2B714] font-bold mb-1">ÉVÈNEMENT SANCTUM</p>
                            <p className="text-xs text-[#888] mb-2">05 mars 2026</p>
                            <p className="text-sm text-gray-400 line-clamp-2 mb-4">
                                Sanctum Bedrock Un événement temporaire, nerveux et ultime...
                            </p>
                            <div className="mt-auto flex justify-end">
                                <span className="text-xs text-[#E2B714] hover:underline">Tout afficher →</span>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#1a1a1f] border border-[#333] rounded-lg p-6 hover:border-[#E2B714] transition-all group cursor-pointer">
                        <div className="flex flex-col h-full">
                            <div className="mb-4">
                                <span className="text-xs font-bold text-[#E2B714] uppercase tracking-wider">EVENT</span>
                                <h3 className="text-2xl font-black text-white mt-1">JAVA BEDROCK</h3>
                            </div>
                            <p className="text-sm text-[#E2B714] font-bold mb-1">LE NOUVEL AN LUNAIRE</p>
                            <p className="text-xs text-[#888] mb-2">16 février 2026</p>
                            <p className="text-sm text-gray-400 line-clamp-2">
                                L'événement Nouvel An Lunaire arrive ! Affrontements et récompenses...
                            </p>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}