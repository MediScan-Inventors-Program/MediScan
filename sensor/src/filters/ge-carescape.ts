import { BroadcastAddr, addr, compareAddr, getUDP } from "."

const CarescapeDiscoveryPacketLen = 88;
const CarescapeDiscoveryPort = 7000;

export function filter(packet: any): FilterResults | void {
    const udpHeader = getUDP(packet);
    if (udpHeader && compareAddr(udpHeader.daddr, BroadcastAddr)
                  && udpHeader.payload.dport === CarescapeDiscoveryPort
                  && udpHeader.payload.length === CarescapeDiscoveryPacketLen
       ) {
        // TODO: verify that this works
        console.log(compareAddr(udpHeader.saddr, addr(udpHeader.payload.data.slice(5, 9))))
        return {
            name: "Unknown GE Carescape Device",
            medicalDevice: "UnknownMedicalDevice"
        }
    }
}
