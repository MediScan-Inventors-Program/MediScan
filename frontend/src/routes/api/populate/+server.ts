import {json} from "@sveltejs/kit";
import {client} from "$lib/server/elastic";

export async function POST() {
    const testData = [
        {
            "_index": "mediscan_devices",
            "_id": "2c1702fb-6bf8-4d66-b5e7-f19935u563ao",
            "_version": 1,
            "_score": 1,
            "fields": {
                "metadataManufacturer": "Nonin",
                "certainty": "KnownMedicalDevice",
                "scanStatus": "Scanned",
                "riskScore": 23.57,
                "metadataName": "LifeSense II Pulse Oximeter",
                "mac": "00:1a:2b:3c:4d:5e",
                "ip": "198.51.100.15",
                "lastSeen": "2021-05-01T12:00:00.000Z",
            }
        }
    ]

    for (const record of testData) {
        await client.index({
            index: record._index,
            id: record._id,
            document: record.fields
        });
    }

    return json({success: true});
}