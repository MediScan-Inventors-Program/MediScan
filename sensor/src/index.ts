import pcap from "pcap";
import getFilters from "./filters";

function main(): void {
    const pcapInterface = process.env.NET_CAPTURE_INTERFACE;

    if (!pcapInterface) {
        console.error("No capture interface specified.")
        return;
    }

    const pcapSession = pcap.createSession(pcapInterface);

    pcapSession.on('packet', (rawPacket) => {
        const packet = pcap.decode.packet(rawPacket);

        for (const filter of getFilters()) {
            const filterResults = filter(packet);
            if (filterResults) {
                // TODO: hook up to elastic
                console.log("HIT");
            }
        }
    })
}

main();
