export const runtime = 'edge';

import { NextResponse } from "next/server";

export async function GET() {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 5000);
        
        const res = await fetch('https://api.mcsrvstat.us/2/mc.mvndicraft.net', {
            signal: controller.signal
        });
        clearTimeout(timeoutId);
        
        const data = await res.json();
        return NextResponse.json({ 
            players: data.players?.online ?? 0 
        });
    } catch {
        return NextResponse.json({ players: 0 });
    }
}
