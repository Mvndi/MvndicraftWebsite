import Link from "next/link";

export default function Footer() {
    return (
        <footer className="w-full bg-[#080808] border-t border-[#333] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">

                {/* Column 1 : Branding */}
                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-black uppercase text-white mb-6">MvndiCraft</h3>
                    <p className="text-[#666] text-sm max-w-sm mb-8">
                        Gaming for Charity. Every year, we unite the community to build a better world while creating unforgettable legends.
                    </p>
                    <div className="flex gap-4">
                        {/* Social media icons could be added here */}
                        <div className="w-10 h-10 bg-[#1a1a1f] flex items-center justify-center hover:bg-[#E2B714] hover:text-black transition-colors cursor-pointer">
                            <span className="text-xs font-bold">X</span>
                        </div>
                        <div className="w-10 h-10 bg-[#1a1a1f] flex items-center justify-center hover:bg-[#E2B714] hover:text-black transition-colors cursor-pointer">
                            <span className="text-xs font-bold">DC</span>
                        </div>
                    </div>
                </div>

                {/* Column 2 : Quick links */}
                <div>
                    <h4 className="text-xs font-bold uppercase text-[#E2B714] tracking-widest mb-6">Platform</h4>
                    <ul className="space-y-4 text-sm text-[#888]">
                        <li><a href="#" className="hover:text-white transition-colors">Servers</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Wiki</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Forums</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Store</a></li>
                    </ul>
                </div>

                {/* Column 3 : Legal */}
                <div>
                    <h4 className="text-xs font-bold uppercase text-[#E2B714] tracking-widest mb-6">Legal</h4>
                    <ul className="space-y-4 text-sm text-[#888]">
                        <li><a href="#" className="hover:text-white transition-colors">Terms of Use</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
                        <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                    </ul>
                </div>
            </div>

            {/* Copyright */}
            <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-[#1a1a1f] text-center text-[#444] text-xs">
                © 2026 MvndiCraft. All rights reserved. Created by <Link href="https://matthieuclaessens.vercel.app/" target="_blank">Matthieu CLAESSENS</Link>
            </div>
        </footer>
    );
}