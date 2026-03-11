'use client';
import { useEffect, useState } from 'react';

export default function ServerStatus() {
    const [players, setPlayers] = useState<number | null>(null);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const fetchStatus = async () => {
            try {
                const res = await fetch('/api/mc-status');
                const data = await res.json();
                setPlayers(data.players);
            } catch {
                setPlayers(0);
            }
        };
        fetchStatus();
        const interval = setInterval(fetchStatus, 60000);
        return () => clearInterval(interval);
    }, []);

    if (!mounted) return null;

    return (
        <div className="flex items-center">
            <span className={`mt-2 ml-3 px-2 ${players !== null && players > 0 ? 'text-[#00FF85] animate-pulse' : 'text-red-500'}`}>●</span>
            <p className="text-xs mt-3">
                {players !== null ? players : '...'}
                <span className="text-xs ml-1">Online players</span>
            </p>
        </div>
    );
}
