import {client} from "$lib/server/elastic";
import type {Device} from "$lib/models/Device";

export async function GET() {

    const devices = await client.search<Device[]>({
        index: "mediscan_devices",
        body: {
            query: {
                match_all: {}
            }
        }
    })


    return new Response(JSON.stringify(devices.hits.hits));
}