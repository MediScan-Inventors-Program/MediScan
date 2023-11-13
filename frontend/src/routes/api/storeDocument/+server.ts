import { json } from '@sveltejs/kit'
import { client } from '$lib/server/elastic'

export async function POST() {
    const now = new Date(Date.now());
    await client.index({
        index: 'mediscan_events',
        id: crypto.randomUUID(),
        document: {
            test: true,
            number: 50.123,
            timestamp: now.toISOString()
        }
    });

    return json({ success: true });
}
