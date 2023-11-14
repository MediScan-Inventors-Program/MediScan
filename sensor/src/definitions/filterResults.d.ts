type MedicalDeviceCertianty = "KnownMedicalDevice" | "UnknownMedicalDevice" | "UnknownDevice" | "NotMedicalDevice";

interface FilterResults {
    medicalDevice: MedicalDeviceCertianty;
    name: string
}
