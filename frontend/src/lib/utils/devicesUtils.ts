import type {Device} from "$lib/models/Device";

export const getDevices = async (): Promise<Device[]> => {
    const response = await fetch('/api/devices', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })

    const devices: Device[] = [];
    const res = await response.json();

    res.forEach((device: any) => {
        devices.push({
            id: device._id,
            name: device._source.metadataName,
            manufacturer: device._source.metadataManufacturer,
            riskScore: device._source.riskScore,
            mac: device._source.mac,
            ip: device._source.ip,
            deviceType: device._source.certainty,
            lastSeen: device._source.lastSeen
        })
    });

    return devices;
}