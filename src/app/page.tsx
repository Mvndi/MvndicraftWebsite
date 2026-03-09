import Image from "next/image";
import mvndilogo from "../../public/image/mvndilogo.png"
import Link from "next/link";
import { ShoppingCart } from "lucide-react";

export default function Home() {
  return (
    <div className="relative min-h-screen">
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
      <main className="relative z-10 max-w-7xl min-h-[60vh] mx-auto px-8 py-24 flex flex-col justify-center items-center gap-12">
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
          className="absolute inset-0 w-full h-full object-cover -z-10"
        >
          <source src="/video/mvndi.mp4" type="video/mp4" />
        </video>

        <div className="relative z-10 flex flex-col items-center gap-12">
          <h1 className="text-4xl md:text-6xl text-center font-black leading-[0.85] tracking-tighter uppercase max-w-4xl">
            <span className="text-white">Join us for an unparalleled journey</span>
          </h1>

          <div className="flex flex-col items-center gap-8">
            <div className="flex flex-wrap justify-center gap-4">
              <button className="bg-[#26262a] text-white px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-transform duration-300">
                Discover the game
              </button>
              <button className="bg-[#E2B714] text-black px-12 py-5 font-black uppercase tracking-widest hover:scale-105 transition-transform duration-300">
                Play for free
              </button>
            </div>
          </div>
        </div>
      </main>

      <section className="max-w-7xl mx-auto px-8 py-20 ">
        <h2 className="text-xs uppercase font-bold tracking-[0.3em] text-[#E2B714] mb-12">// The Events</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Battle Royale', 'Redstone', 'Speed-Build', 'PvP Event'].map((name, i) => (
            <div key={name} className="h-64 border border-[#333] p-6 flex flex-col justify-end hover:border-[#E2B714] transition-all group cursor-pointer">
              <span className="text-[10px] text-[#666] mb-2 font-mono">0{i + 1}</span>
              <h4 className="text-xl font-black uppercase">{name}</h4>
            </div>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto">
        <h2 className="text-center text-5xl font-bold text-white">OUR MISSION</h2>
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