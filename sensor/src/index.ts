import pcap from "pcap";

function main(): void {
    const pcapInterface = process.env.NET_CAPTURE_INTERFACE;

    if (!pcapInterface) {
        console.log("No capture interface specified.")
        return;
    }

    const pcapSession = pcap.createSession(pcapInterface);

    pcapSession.on('packet', (rawPacket) => {
        const packet = pcap.decode.packet(rawPacket);

        console.log(JSON.stringify(packet));
    })
}

main();
