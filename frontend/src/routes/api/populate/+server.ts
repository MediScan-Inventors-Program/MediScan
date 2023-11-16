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
                "lastSeen": "2021-05-01",
            }
        },
        {
            "_index": "mediscan_devices",
            "_id": "2c1702fb-6bf8-4d66-b5e7-f19935u564ao",
            "_version": 1,
            "_score": 1,
            "fields": {
                "metadataManufacturer": "General Electric",
                "certainty": "KnownMedicalDevice",
                "scanStatus": "Scanned",
                "riskScore": 99.81,
                "metadataName": "Case V6.7 ECG System",
                "mac": "2a:6b:7c:8d:9e:af",
                "ip": "192.0.2.10",
                "lastSeen": "2023-06-11",
            }
        },
        {
            "_index": "mediscan_devices",
            "_id": "2c1702fb-6bf8-4d66-b5e7-f19935u503ao",
            "_version": 1,
            "_score": 1,
            "fields": {
                "metadataManufacturer": "EagleView",
                "certainty": "KnownMedicalDevice",
                "scanStatus": "Scanned",
                "riskScore": 68.62,
                "metadataName": "Wireless Probe Ultrasound Scanner",
                "mac": "4f:5e:6d:7c:8b:9a",
                "ip": "172.16.0.50",
                "lastSeen": "2022-09-01",
            }
        },
        {
            "_index": "mediscan_devices",
            "_id": "2c1702fb-6bf8-4d66-b5e7-fu9935u563a0",
            "_version": 1,
            "_score": 1,
            "fields": {
                "metadataManufacturer": "PODRay",
                "certainty": "KnownMedicalDevice",
                "scanStatus": "Scanned",
                "riskScore": 81.90,
                "metadataName": "LB Podiatry Digital X-Ray System",
                "mac": "b3:c4:d5:e6:f7:08",
                "ip": "10.0.0.1",
                "lastSeen": "2023-09-08",
            }
        },
        {
            "_index": "mediscan_devices",
            "_id": "2c1702fb-6gf8-4d66-b5e7-fu9935u563a0",
            "_version": 1,
            "_score": 1,
            "fields": {
                "metadataManufacturer": "General Electric",
                "certainty": "KnownMedicalDevice",
                "scanStatus": "Scanned",
                "riskScore": 84.10,
                "metadataName": "Discovery MI Gen 2 Digital PET",
                "mac": "f2:a1:0b:9c:8d:7e",
                "ip": "192.168.1.100",
                "lastSeen": "2022-10-24",
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