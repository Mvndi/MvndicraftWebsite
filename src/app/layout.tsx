import type { Metadata } from "next";
import { Metamorphous, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/Globals/NavBar";
import Footer from "./components/Footer";
import BackToTop from "./components/Globals/BackToTop";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metamorphous = Metamorphous({
  variable: "--font-metamorphous",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: {
    default: "Mvndicraft - Medieval Geopolitical Minecraft Server",
    template: "%s | Mvndicraft"
  },
  description: "Join Mvndicraft, the ultimate medieval geopolitical Minecraft server. Build your kingdom, command armies, engage in large-scale warfare, and dominate a world of politics and conquest. Join the battle today!",
  keywords: ["Minecraft server", "medieval Minecraft", "geopolitical Minecraft", "Minecraft warfare", "Minecraft factions", "Minecraft roleplay", "medieval server", "Minecraft kingdom", "Minecraft conquest", "Minecraft PvP", "Minecraft survival", "Minecraft strategy"],
  authors: [{ name: "Mvndicraft Team" }],
  creator: "Mvndicraft",
  publisher: "Mvndicraft",
  applicationName: "Mvndicraft",
  category: "Gaming",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mvndicraft.net",
    title: "Mvndicraft - Medieval Geopolitical Minecraft Server",
    description: "Join Mvndicraft, the ultimate medieval geopolitical Minecraft server. Build your kingdom, command armies, engage in large-scale warfare, and dominate a world of politics and conquest.",
    siteName: "Mvndicraft",
    images: [{
      url: "/image/MvndiPicture.png",
      width: 1200,
      height: 630,
      alt: "Mvndicraft - Medieval Geopolitical Minecraft Server"
    }]
  },
  twitter: {
    card: "summary_large_image",
    title: "Mvndicraft - Medieval Geopolitical Minecraft Server",
    description: "Join Mvndicraft, the ultimate medieval geopolitical Minecraft server. Build your kingdom, command armies, engage in large-scale warfare, and dominate a world of politics and conquest.",
    images: ["/image/MvndiPicture.png"],
    creator: "@mvndicraft",
    site: "@mvndicraft"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://mvndicraft.net",
  },
  metadataBase: new URL("https://mvndicraft.net"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark"> 
      <body
        suppressHydrationWarning
        className={`${metamorphous.variable} ${geistMono.variable} antialiased leading-relaxed bg-[#0e1012] text-[#ededed] font-sans`}
      >
        <div className="fixed inset-0 pointer-events-none -z-10 bg-[radial-gradient(circle_at_50%_50%,#0e1012_0%,#080808_100%)]" />

        <NavBar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}