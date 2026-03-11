import { NextResponse } from "next/server";
import mc from 'minecraftstatuspinger';

export const dynamic = 'force-dynamic'; // ✅ désactive le cache

export async function GET() {
    try {
        const result = await mc.lookup({
            host: 'mc.mvndicraft.net',
            port: 25565,
            timeout: 5000
        });

        return NextResponse.json({
            online: true,
            players: result.status?.players?.online ?? 0
        });
    } catch {
        return NextResponse.json({ online: false, players: 0 });
    }
}
