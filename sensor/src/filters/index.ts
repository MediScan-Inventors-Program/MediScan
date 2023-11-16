import * as carescape from './geCarescape';

const filters: ((packet: any) => FilterResults | void)[] = [
    carescape.filter
];

export default function getFilters(): ((packet: any) => FilterResults | void)[] {
    return filters;
}

export function isUDP(packet: any): boolean {
    return packet?.payload?.payload?.protocol == 17
           && packet?.payload?.payload?.payload?.data instanceof Buffer;
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

    for (let i = 0; i < a.length; ++i) {
        if (a[i] !== b[i] && a[i] !== -1 && b[i] !== -1) return false;
    }
    return true;
}

export function addr(addr: number[]): { addr: number[] } {
    return { addr };
}

export const BroadcastAddr = { addr: [-1,-1,-1,255] }

// convert mac from buffer into string
export function toMacStr(bytes: number[]): string {
    let mac = [];

    for (const byte of bytes) {
        let hex = byte.toString(16);

        if (hex.length === 1) {
            hex = '0' + hex;
        }

        mac.push(hex);
    }

    return mac.join(':');
}
