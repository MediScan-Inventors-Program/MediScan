import { json } from '@sveltejs/kit'
import { client } from '$lib/server/elastic'

export async function POST({ _request, _cookies }) {
    await client.index({
        index: 'mediscan_events',
        id: Date.now().toString(),
        document: {
            test: true,
            number: 50.123
        }
    });

    return json({ success: true });
}
