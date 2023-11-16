export interface Device {
    id: string;
    name: string;
    manufacturer: string;
    riskScore: number;
    mac: string;
    ip: string;
    deviceType: string;
    lastSeen: Date;
}