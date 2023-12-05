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
            lastSeen: new Date(device._source.lastSeen)
        })
    });

    return devices;
}

export const addDeviceManually = async (deviceName: string): Promise<Device> => {
    const response = await fetch('/api/devices', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({device_name: deviceName})
    })

    return await response.json();
}

export const updateDeviceManually = async (device: Device): Promise<Device> => {
    const response = await fetch('/api/updateDevice', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            device_name: device.name,
            manufacturer: device.manufacturer,
            id: device.id
        })
    })

    return await response.json();
}