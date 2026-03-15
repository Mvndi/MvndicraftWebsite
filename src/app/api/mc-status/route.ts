import { NextResponse } from "next/server";
import mc from 'minecraftstatuspinger';

export async function GET() {
    try {
        const result = await mc.lookup({
            host: 'mc.mvndicraft.net',
            port: 25565,
            timeout: 5000
        });
        return NextResponse.json({
            players: result.status?.players?.online ?? 0
        });
    } catch {
        return NextResponse.json({ players: 0 });
    }
}
