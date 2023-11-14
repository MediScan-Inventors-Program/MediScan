import * as carescape from './ge-carescape';

const filters: ((packet: any) => FilterResults | void)[] = [
    carescape.filter
];

export default function getFilters(): ((packet: any) => FilterResults | void)[] {
    return filters;
}

export function isUDP(packet: any): boolean {
    return packet?.payload?.payload?.protocol == 17
           && packet?.payload?.payload?.payload?.data?.type == "Buffer";
}

export function getUDP(packet: any): any {
    if (isUDP(packet)) {
        return packet.payload.payload;
    }
}

export function compareAddr(addr1: { addr: number[]}, addr2: { addr: number[]}) {
    const a = addr1.addr;
    const b = addr2.addr;
    if (a === b) return true;
    if (a == null || b == null) return false;
    if (a.length !== b.length) return false;

    for (var i = 0; i < a.length; ++i) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

export function addr(addr: number[]): { addr: number[] } {
    return { addr };
}

export const BroadcastAddr = { addr: [255,255,255,255] }
