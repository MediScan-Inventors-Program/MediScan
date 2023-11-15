import { BroadcastAddr, addr, compareAddr, getUDP, toMacStr } from "."

const CarescapeDiscoveryPacketLen = 88;
const CarescapeDiscoveryPort = 7000;

export function filter(packet: any): FilterResults | void {
    const udpHeader = getUDP(packet);

    if (udpHeader && compareAddr(udpHeader.daddr, BroadcastAddr)
                  && udpHeader.payload.dport === CarescapeDiscoveryPort
                  && udpHeader.payload.data.length === CarescapeDiscoveryPacketLen
                  && compareAddr(udpHeader.saddr, addr([...udpHeader.payload.data.slice(4, 8)]))
       ) {
        return {
            detectionEvent: {
                event_type: "DeviceDetection",
                certainty: "UnknownMedicalDevice",
                ip: udpHeader.saddr.addr,
                mac: toMacStr(packet.payload.shost.addr),
                timestamp: new Date(Date.now())
            },
            deviceInfo: {
                certainty: "UnknownMedicalDevice",
                lastScan: null,
                mac: toMacStr(packet.payload.shost.addr),
                scanStatus: "ToQueue",
                riskScore: 0,
                metadata: {
                    name: "Unknown Carescape Device",
                    manufacturer: "GE"
                }
            }
        }
    }
}
