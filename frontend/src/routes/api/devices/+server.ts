import {client} from "$lib/server/elastic";
import type {Device} from "$lib/models/Device";

export const GET = async () => {
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

export const POST = async ({request}: { request: Request }) => {
    const body = await request.json();
    if (!body.device_name) {
        return new Response(
            JSON.stringify({error: "device is required"}),
            {status: 400}
        );
    }

    const device = {
        "metadataName": body.device_name,
        "metadataManufacturer": "MediScan Manual Scan",
        "mac": "",
        "ip": "",
        "scanStatus": "DoNotScan",
        "riskScore": 0,
        "certainty": "Unknown",
        "lastSeen": new Date().toISOString()
    }

    await client.index({
        index: "mediscan_devices",
        body: device
    })

    return new Response(JSON.stringify({device: device}), {
        status: 200,
    });
}