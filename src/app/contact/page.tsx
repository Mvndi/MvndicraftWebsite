import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Contact | Mvndicraft",
    description: "Get in touch with the Mvndicraft team.",
};

export default function ContactPage() {
    return (
        <main className="relative min-h-screen" role="main">
            <article className="relative max-w-4xl mx-auto py-20 px-5">
                <div className="bg-[#1E1E24]/90 backdrop-blur-sm rounded-xl border border-[#2a2a2e] p-8 shadow-2xl">
                    <header className="mb-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0266c4] px-4 py-2 rounded-full shadow-lg">
                            Contact
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-white mt-6 mb-3 leading-tight">
                            Get in Touch
                        </h1>
                        <p className="text-gray-400 text-lg mt-4">
                            Have a question or want to reach out? Here's how to find us.
                        </p>
                    </header>

                    <div className="space-y-6">

                        <div className="flex items-start gap-5 p-6 rounded-xl border border-[#2a2a2e] bg-[#14141B]/60 hover:border-[#0266c4]/50 transition-colors duration-300">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0266c4]/10 border border-[#0266c4]/30 flex items-center justify-center text-2xl">
                                🌐
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">Contact Form</h2>
                                <p className="text-gray-400 mb-3">
                                    Use our website's contact section to send us a message directly.
                                </p>
                                <a
                                    href="https://mvndicraft.net/#contact"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-[#0266c4] hover:text-white transition-colors duration-200 font-medium"
                                >
                                    mvndicraft.net/#contact
                                    <span className="text-sm">↗</span>
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 p-6 rounded-xl border border-[#2a2a2e] bg-[#14141B]/60 hover:border-[#0266c4]/50 transition-colors duration-300">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#0266c4]/10 border border-[#0266c4]/30 flex items-center justify-center text-2xl">
                                ✉️
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">Email</h2>
                                <p className="text-gray-400 mb-3">
                                    For general inquiries, reach out to our admin team directly.
                                </p>
                                <a
                                    href="mailto:admin@mvndicraft.net"
                                    className="inline-flex items-center gap-2 text-[#0266c4] hover:text-white transition-colors duration-200 font-medium"
                                >
                                    admin@mvndicraft.net
                                </a>
                            </div>
                        </div>

                        <div className="flex items-start gap-5 p-6 rounded-xl border border-[#2a2a2e] bg-[#14141B]/60 hover:border-[#5865F2]/50 transition-colors duration-300">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#5865F2]/10 border border-[#5865F2]/30 flex items-center justify-center text-2xl">
                                🎮
                            </div>
                            <div>
                                <h2 className="text-xl font-bold text-white mb-1">Player & Bug Reporting</h2>
                                <p className="text-gray-400 mb-3">
                                    For in-game issues, player reports, or bug submissions, head to our Discord server and open a ticket.
                                </p>
                                <span className="inline-flex items-center gap-2 text-[#5865F2] font-mono font-medium text-sm bg-[#5865F2]/10 px-3 py-1.5 rounded-lg border border-[#5865F2]/20">
                                    # support-ticket
                                </span>
                            </div>
                        </div>

                    </div>

                    <footer className="mt-10 pt-8 border-t border-[#2a2a2e]">
                        <p className="text-sm text-[#888] text-center">
                            We typically respond within 24–48 hours. For urgent matters, Discord is the fastest way to reach us.
                        </p>
                    </footer>
                </div>
            </article>
        </main>
    );
}
