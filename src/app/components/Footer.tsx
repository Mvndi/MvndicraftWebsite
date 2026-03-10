import Link from "next/link";
import { DiscordIcon, TwitterIcon, YoutubeIcon } from "@/app/components/Icons";

const socialLinks = [
    { icon: DiscordIcon, href: "https://discord.mvndicraft.net/" },
    { icon: TwitterIcon, href: "https://x.com/mvndicraft" },
    { icon: YoutubeIcon, href: "https://www.youtube.com/@mvndicraft4233" },
];

const footerLinks = {
    platform: [
        { label: "Vote", href: "/vote" },
        { label: "Forums", href: "/forums" },
        { label: "Wiki", href: "/wiki" },
        { label: "Store", href: "/store" },
    ],
    legal: [
        { label: "Terms of Use", href: "/terms" },
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Contact", href: "/contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="w-full bg-[#080808] border-t border-[#1a1a1f] pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-4 gap-12">

                <div className="col-span-1 md:col-span-2">
                    <h3 className="text-xl font-black uppercase tracking-wider text-white mb-6">MvndiCraft</h3>
                    <p className="text-[#666] text-sm max-w-sm mb-8 leading-relaxed">
                        Gaming for Charity. Every year, we unite the community to build a better world while creating unforgettable legends.
                    </p>
                    <div className="flex gap-3">
                        {socialLinks.map((social, i) => (
                            <a key={i} href={social.href} className="w-10 h-10 bg-[#111] flex items-center justify-center hover:bg-[#E2B714] hover:text-black transition-all duration-300">
                                <social.icon className="w-4 h-4" />
                            </a>
                        ))}
                    </div>
                </div>

                {(Object.keys(footerLinks) as Array<keyof typeof footerLinks>).map((section) => (
                    <div key={section}>
                        <h4 className="text-xs font-bold uppercase text-[#E2B714] tracking-[0.2em] mb-6">
                            {section}
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks[section].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className="text-sm text-[#888] hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>

            <div className="max-w-7xl mx-auto px-8 mt-20 pt-8 border-t border-[#1a1a1f] text-center text-[#444] text-xs">
                <p>© 2026 MvndiCraft. All rights reserved.</p>
                <p className="mt-2">
                    Created by{" "}
                    <Link href="https://matthieuclaessens.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-[#E2B714] transition-colors underline underline-offset-4">
                        Matthieu CLAESSENS
                    </Link>
                </p>
            </div>
        </footer>
    );
}