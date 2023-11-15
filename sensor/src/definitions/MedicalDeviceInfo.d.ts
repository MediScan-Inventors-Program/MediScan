interface MedicalDeviceInfo {
    mac: MAC,
    lastScan: Date | null,
    scanStatus: ScanStatus,
    certainty: MedicalDeviceCertainty,
    riskScore: number,
    metadata: {
        name?: string,
        manufacturer?: string,
        UDI?: string
    }
}
