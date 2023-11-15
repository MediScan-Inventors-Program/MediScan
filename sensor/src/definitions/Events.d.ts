interface BasicEvent {
    timestamp: Date,
    event_type: EventType
}

interface EventDeviceDetection extends BasicEvent {
    event_type: "DeviceDetection",
    mac: MAC,
    ip: number[],
    certainty: MedicalDeviceCertainty
}
