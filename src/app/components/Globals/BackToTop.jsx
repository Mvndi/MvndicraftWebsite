"use client";

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function BackToTop() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => setVisible(window.scrollY > 400);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleClick = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    return (
        <button
            onClick={handleClick}
            aria-label="Back to top"
            className={`fixed bottom-8 right-8 z-50 w-12 h-12 bg-[#E2B714] text-black rounded-full flex items-center justify-center shadow-lg transition-all duration-300 hover:scale-110 hover:bg-white ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4 pointer-events-none"
            }`}
        >
            <ChevronUp className="w-5 h-5" />
        </button>
    );
}
