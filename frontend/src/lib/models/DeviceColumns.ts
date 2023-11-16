interface DeviceColumn {
    name: string;
    prettyName: string;
}

export const DeviceColumns: DeviceColumn[] = [
    {
        name: "name",
        prettyName: "Name"
    },
    {
        name: "riskScore",
        prettyName: "Risk Score"
    },
    {
        name: "mac",
        prettyName: "MAC Address"
    },
    {
        name: "deviceType",
        prettyName: "Device Type"
    },
    {
        name: "ip",
        prettyName: "IP Address"
    },
    {
        name: "lastSeen",
        prettyName: "Last Seen"
    }
];
