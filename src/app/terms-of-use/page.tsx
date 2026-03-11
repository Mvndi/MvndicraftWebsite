import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Terms of Use | Mvndicraft",
    description: "Terms of Use for Mvndicraft - Rules and conditions for using our website.",
};

export default function TermsOfUsePage() {
    return (
        <main className="relative min-h-screen" role="main">
            <article className="relative max-w-4xl mx-auto py-20 px-5">
                <div className="bg-[#1E1E24]/90 backdrop-blur-sm rounded-xl border border-[#2a2a2e] p-8 shadow-2xl">
                    <header className="mb-10">
                        <span className="text-xs font-bold uppercase tracking-widest text-white bg-[#0266c4] px-4 py-2 rounded-full shadow-lg">
                            Legal
                        </span>
                        <h1 className="text-5xl md:text-6xl font-black text-white mt-6 mb-3 leading-tight">
                            Terms of Use
                        </h1>
                        <time className="text-sm text-[#888] font-mono bg-[#1E1E24] px-3 py-1 rounded-full border border-[#2a2a2e]">
                            Last updated: March 2026
                        </time>
                    </header>

                    <div className="space-y-8 text-gray-300 leading-relaxed text-lg">
                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">1. Acceptance</h2>
                            <p>
                                By accessing and using <strong className="text-white">Mvndicraft</strong>, you agree to be bound by these Terms of Use. If you do not agree, please refrain from using the site.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">2. Intellectual Property</h2>
                            <p>
                                All content on this website — including texts, images, logos, and graphics — is the exclusive property of Mvndicraft and is protected by applicable copyright laws. Any reproduction or distribution without prior written consent is strictly prohibited.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">3. Acceptable Use</h2>
                            <p>You agree not to:</p>
                            <ul className="list-disc list-inside mt-2 space-y-1 text-gray-400">
                                <li>Use the site for any unlawful purpose</li>
                                <li>Attempt to gain unauthorized access to any part of the site</li>
                                <li>Transmit harmful, offensive, or disruptive content</li>
                                <li>Scrape or harvest data without explicit permission</li>
                            </ul>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">4. Disclaimer</h2>
                            <p>
                                Mvndicraft is provided "as is" without any warranties of any kind. We do not guarantee the accuracy, completeness, or availability of the content at all times. We reserve the right to modify or discontinue any part of the site without notice.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">5. Limitation of Liability</h2>
                            <p>
                                To the fullest extent permitted by law, Mvndicraft shall not be liable for any indirect, incidental, or consequential damages arising from your use of the website or its content.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">6. Changes to Terms</h2>
                            <p>
                                We reserve the right to update these Terms of Use at any time. Continued use of the site after any changes constitutes your acceptance of the new terms.
                            </p>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold text-white mb-3">7. Contact</h2>
                            <p>
                                Questions about these terms? Reach us at:{" "}
                                <a href="mailto:contact@mvndicraft.com" className="text-[#0266c4] hover:underline">
                                    contact@mvndicraft.com
                                </a>
                            </p>
                        </section>
                    </div>
                </div>
            </article>
        </main>
    );
}
