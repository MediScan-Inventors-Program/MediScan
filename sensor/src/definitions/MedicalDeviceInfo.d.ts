interface MedicalDeviceInfo {
    mac: MAC,
    lastScan: Date | null,
    scanStatus: ScanStatus,
    certainty: MedicalDeviceCertainty,
    riskScore: number,
    metadataName?: string,
    metadataManufacturer?: string,
    metadataUDI?: string
}
