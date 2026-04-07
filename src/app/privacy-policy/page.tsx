import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Privacy Policy | Mvndicraft",
    description: "Privacy Policy for Mvndicraft - Learn how we handle your data.",
};

export default function PrivacyPolicyPage() {
    return (
        <main className="relative min-h-screen" role="main">
            <article className="relative max-w-4xl mx-auto py-20 px-5">
                <div className="bg-[#1E1E24]/90 backdrop-blur-sm rounded-xl border border-[#2a2a2e] p-8 shadow-2xl">
                    <header className="mb-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0266c4] px-4 py-2 rounded-full shadow-lg">
                            Legal
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-white mt-6 mb-3 leading-tight">
                            Privacy Policy
                        </h1>
                        <time className="text-sm text-[#888] font-mono bg-[#1E1E24] px-3 py-1 rounded-full border border-[#2a2a2e]">
                            Last updated: April 2026
                        </time>
                    </header>

                    <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
                            <p>
                                Welcome to <strong className="text-white">Mvndicraft</strong>. We are committed to protecting your personal information and your right to privacy. This policy describes how we collect, use, and safeguard your data when you visit our website.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">2. Data We Collect</h2>
                            <p>We may collect the following information:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                <li>Usage data (pages visited, time spent, browser type)</li>
                                <li>Technical data (IP address, device information)</li>
                                <li>Any information you voluntarily provide (e.g. contact forms)</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Your Data</h2>
                            <p>Your data is used solely to:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                <li>Improve the website experience</li>
                                <li>Analyze traffic and usage patterns</li>
                                <li>Respond to your inquiries</li>
                            </ul>
                            <p className="mt-2">We do not sell, trade, or rent your personal data to third parties.</p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">4. Cookies</h2>
                            <p>
                                Mvndicraft may use cookies to enhance your browsing experience. You can disable cookies through your browser settings at any time without affecting your access to the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">5. Third-Party Services</h2>
                            <p>
                                We may use third-party tools (e.g. analytics providers) that collect anonymized data. These services have their own privacy policies and we encourage you to review them.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">6. Your Rights</h2>
                            <p>You have the right to:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                <li>Access the personal data we hold about you</li>
                                <li>Request correction or deletion of your data</li>
                                <li>Withdraw consent at any time</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">7. Contact</h2>
                            <p>
                                For any privacy-related questions, contact us at:{" "}
                                <a href="mailto:admin@mvndicraft.net" className="text-[#0266c4] hover:underline">
                                    admin@mvndicraft.net
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </article>
        </main>
    );
}
