import { json } from '@sveltejs/kit'
import { client } from '$lib/server/elastic'

const test_data = [{ "_index": "mediscan_events", "_id": "bd5015fe-2fe6-45b7-ac7f-84f02036c973", "_version": 1, "_score": 1, "fields": { "event_type": "DeviceDetection", "ip": [192, 168, 1, 75], "certainty": "UnknownMedicalDevice", "mac": "00:00:a1:07:9f:87", "timestamp": "2023-11-15T05:31:16.104Z" } }, { "_index": "mediscan_events", "_id": "605cd34f-5798-4fd1-a3ef-35d2dfb44fac", "_version": 1, "_score": 1, "fields": { "event_type": "DeviceDetection", "ip": [192, 168, 1, 75], "certainty": "UnknownMedicalDevice", "mac": "00:00:a1:07:9f:87", "timestamp": "2023-11-15T05:31:26.342Z" } }, { "_index": "mediscan_events", "_id": "2815c00a-ea3e-4c1f-b392-401b4fc1565f", "_version": 1, "_score": 1, "fields": { "event_type": "DeviceDetection", "ip": [192, 168, 1, 75], "certainty": "UnknownMedicalDevice", "mac": "00:00:a1:07:9f:87", "timestamp": "2023-11-15T05:31:36.582Z" } }, { "_index": "mediscan_events", "_id": "fe59b3eb-35c0-49b6-b1d1-11865d359c66", "_version": 1, "_score": 1, "fields": { "event_type": "DeviceDetection", "ip": [192, 168, 1, 75], "certainty": "UnknownMedicalDevice", "mac": "00:00:a1:07:9f:87", "timestamp": "2023-11-15T05:31:45.798Z" } }, { "_index": "mediscan_events", "_id": "3f3ffe16-be81-411d-8634-729c2b2e54d3", "_version": 1, "_score": 1, "fields": { "event_type": "DeviceDetection", "ip": [192, 168, 1, 75], "certainty": "UnknownMedicalDevice", "mac": "00:00:a1:07:9f:87", "timestamp": "2023-11-15T05:31:56.038Z" } }, { "_index": "mediscan_events", "_id": "81d0cc60-1bb1-4044-b74a-830e84648539", "_version": 1, "_score": 1, "fields": { "event_type": "DeviceDetection", "ip": [192, 168, 1, 75], "certainty": "UnknownMedicalDevice", "mac": "00:00:a1:07:9f:87", "timestamp": "2023-11-15T05:32:06.278Z" } }, { "_index": "mediscan_events", "_id": "0392f336-dbe4-401d-b022-ccb3af2e0c15", "_version": 1, "_score": 1, "fields": { "event_type": "DeviceDetection", "ip": [192, 168, 1, 75], "certainty": "UnknownMedicalDevice", "mac": "00:00:a1:07:9f:87", "timestamp": "2023-11-15T05:32:16.518Z" } }, { "_index": "mediscan_events", "_id": "8e00f601-08db-4194-8440-8621b8dd883c", "_version": 1, "_score": 1, "fields": { "event_type": "DeviceDetection", "ip": [192, 168, 1, 75], "certainty": "UnknownMedicalDevice", "mac": "00:00:a1:07:9f:87", "timestamp": "2023-11-15T05:32:25.734Z" } }, { "_index": "mediscan_devices", "_id": "2c1702fb-6bf3-4d66-b5e7-f19935a563ac", "_version": 1, "_score": 1, "fields": { "metadata.manufacturer": "GE", "certainty": "UnknownMedicalDevice", "scanStatus": "ToQueue", "riskScore": 0, "metadata.name": "Unknown Carescape Device", "mac": "00:00:a1:07:9f:87" } }];

export async function POST() {
    for (const record of test_data) {
        await client.index({
            index: record._index,
            id: record._id,
            document: record.fields
        });
    }

    return json({ success: true });
}
