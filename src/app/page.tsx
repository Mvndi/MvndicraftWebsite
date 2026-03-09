import Image from "next/image";
import mvndilogo from "../../public/image/mvndilogo.png"
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      <div className="bg-black h-[35px]">
        <div className="max-w-7xl mx-auto px-8 flex justify-end gap-4 text-white h-full items-center">
          <p className="text-sm">Discord</p>
          <p className="text-sm">Map</p>
        </div>
      </div>
      <div className="fixed inset-0 opacity-20 pointer-events-none bg-[radial-gradient(circle_at_50%_50%,#1f2937_0%,#080808_100%)]" />
      <nav className="relative z-10 border-b border-[#333] bg-[#101015]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-8 flex justify-between items-center">

          <div className="flex items-center text-2xl">
            <Image src={mvndilogo} alt={"logo"} />
            <span className="text-[#00FF85] mt-3 ml-3 px-2">●</span> <p className="text-xs mt-3">342<span className="text-xs"> Online players</span></p>
          </div>

          <div className="flex gap-6 text-xs uppercase items-center font-bold tracking-widest">
            <Link href="#" className="hover:text-[#E2B714] transition-colors">Home</Link>
            <Link href="#" className="hover:text-[#E2B714] transition-colors">Vote</Link>
            <Link href="#" className="hover:text-[#E2B714] bg-[#26262a] px-4 py-2 rounded-md transition-colors">Forums</Link>
            <Link href="#" className="hover:text-[#E2B714] transition-colors">Wiki</Link>
            <Link href="#" className="border border-[#E2B714] flex px-4 hover:bg-[#E2B714] hover:text-black transition-all">
              <ShoppingCart width={16} />
              <p className="mt-1 ml-2">Store</p>
            </Link>
          </div>
        </div>
      </nav>
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

          <div className="flex flex-col items-center gap-4">
            <div className="flex flex-wrap justify-center gap-4">
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105">
                <button className="bg-[#26262a] text-white px-12 py-5 font-black uppercase tracking-widest duration-300 rounded-md">
                  Discover the game
                </button>
              </div>
              <div className="bg-white/10 backdrop-blur-sm p-2 rounded-2xl transition-transform duration-300 hover:scale-105">
                <button className="bg-[#E2B714] text-black px-12 p-5 font-black uppercase tracking-widest rounded-md">
                  Play for free
                </button>
              </div>
            </div>
            <p className="font-light text-gray-300">Java edition only</p>
          </div>
        </div>
      </main>
<section className="max-w-7xl mt-10 mx-auto px-8">
  <div className="flex justify-between items-start gap-12">
    <div className="w-1/2">
      <p className="text-white text-2xl">test</p>
    </div>
    <div className="w-1/2 text-right text-md">
      <p className="text-white text-2xl font-bold">Discover MvndiCraft</p>
      <div className="my-3">
        <p>Explore a realm where the rise and fall of nations intertwine. Build grand citadels, forge iron alliances, and wage epic wars for the conquest of the known world.</p>
        <br />
        <p>Prepare for a limitless journey on MvndiCraft—the birthplace of your legend.</p>
      </div>
    </div>
  </div>
</section>

      <section className="max-w-7xl mx-auto px-8 py-20">
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
      </section>
      <section className="max-w-7xl mx-auto bg-[#14141B] w-full rounded-md">
        <h2 className="text-center text-5xl font-bold text-white">Discover MvndiCraft</h2>
        <div className="grid grid-cols-2 mx-auto">
          <div>
            <p className="text-2xl">Founder Porkstridebust</p>
          </div>
          <div>
            <p>test</p>
          </div>
        </div>
      </section>
    </div>
  );
};