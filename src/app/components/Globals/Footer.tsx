"use client";

import Link from "next/link";
import { DiscordIcon, TwitterIcon, YoutubeIcon } from "@/app/components/Util/Icons";

const socialLinks = [
    { icon: DiscordIcon, href: "https://discord.mvndicraft.net/", label: "Join Discord server" },
    { icon: TwitterIcon, href: "https://x.com/mvndicraft", label: "Follow on Twitter" },
    { icon: YoutubeIcon, href: "https://www.youtube.com/@mvndicraft4233", label: "Follow on YouTube" },
];

const footerLinks = {
    platform: [
        { label: "Vote", href: "/https://www.planetminecraft.com/server/mvndicraft-medieval-geopol/" },
        { label: "Rules", href: "https://wiki.mvndicraft.net/rules.html" },
        { label: "Wiki", href: "https://wiki.mvndicraft.net" },        
        { label: "Store", href: "https://www.patreon.com/Mvndicraft" },
    ],
    legal: [
        { label: "Terms of Use", href: "/terms-of-use" },
        { label: "Privacy Policy", href: "/privacy-policy" },
        { label: "Contact", href: "/contact" },
    ],
};

export default function Footer() {
    return (
        <footer className="w-full bg-[#080808] border-t border-[#1a1a1f] pt-16 md:pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 md:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">

                <div className="col-span-2">
                    <h3 className="text-xl font-black uppercase tracking-wider text-white mb-6">Mvndicraft</h3>

                    <p className="text-[#FFD700] text-sm italic mb-2 font-serif">
                        "Non nobis solum, sed omnibus."
                    </p>
                    <p className="text-[#666] text-xs mb-6 border-l-2 border-[#FFD700] pl-3">
                        Not for ourselves alone, but for everyone.
                    </p>

                    <p className="text-[#666] text-sm max-w-sm mb-8 leading-relaxed">
                        United under one banner, we rise — to build, to give, to become legend.
                    </p>

                    <div className="flex gap-3">
                        {socialLinks.map((social, i) => (
                            <Link key={i} href={social.href} target="_blank" rel="noreferrer" className="w-10 h-10 bg-[#111] flex items-center justify-center hover:bg-[#4d4d4d] transition-all duration-300" aria-label={social.label}>
                                <social.icon className="w-4 h-4 fill-white" />
                            </Link>
                        ))}
                    </div>
                </div>

                {(Object.keys(footerLinks) as Array<keyof typeof footerLinks>).map((section) => (
                    <div key={section} className="col-span-1">
                        <h4 className="text-xs font-bold uppercase text-[#FFD700] tracking-[0.2em] mb-6">
                            {section}
                        </h4>
                        <ul className="space-y-4">
                            {footerLinks[section].map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} target="_blank" rel="noreferrer" className="text-sm text-[#888] hover:text-white transition-colors">
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}

            </div>

            <div className="max-w-7xl mx-auto px-4 md:px-8 mt-16 md:mt-20 pt-8 border-t border-[#1a1a1f] text-center text-[#666] text-xs">
                <p>© 2026 Mvndicraft. All rights reserved.</p>
                <p className="mt-2">
                    Created by{" "}
                    <Link href="https://matthieuclaessens.vercel.app/" target="_blank" rel="noopener noreferrer" className="text-[#888] hover:text-[#FFD700] transition-colors underline underline-offset-4">
                        Matthieu CLAESSENS
                    </Link> (Nenfal)
                </p>
                <p className="mt-5 text-[#666] px-4 md:px-0">
                    This site is not affiliated with Mojang or Microsoft Studios. For inquiries:{" "}
                    <a href="mailto:admin@mvndicraft.net" className="hover:text-[#FFD700] transition-colors underline underline-offset-4">
                        admin@mvndicraft.net
                    </a>
                </p>
            </div>
        </footer>
    );
}
