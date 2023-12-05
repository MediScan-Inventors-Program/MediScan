import pcap from "pcap";
import getFilters from "./filters";
import { Client } from '@elastic/elasticsearch';
import { randomUUID } from "crypto";

export const client = new Client({
    node: "https://localhost:9200",
    auth: {
        username: 'elastic',
        password: 'mediscan'
    },
    tls: {
        rejectUnauthorized: false
    }
});

async function createIndexIfNeeded(index: string) {
    if (!(await client.indices.exists({ index }))) {
        await client.indices.create({ index });
    }
}

async function main(): Promise<void> {
    await createIndexIfNeeded("mediscan_devices");
    await createIndexIfNeeded("mediscan_events");

    const pcapInterface = process.env.NET_CAPTURE_INTERFACE;

    if (!pcapInterface) {
        console.error("No capture interface specified.")
        return;
    }

    const pcapSession = pcap.createSession(pcapInterface);

    pcapSession.on('packet', async (rawPacket) => {
        const packet = pcap.decode.packet(rawPacket);

        for (const filter of getFilters()) {
            const filterResults = filter(packet);
            if (filterResults) {
                const deviceRecord = await client.search({
                    index: "mediscan_devices",
                    query: {
                        match_phrase: {
                            mac: filterResults.deviceInfo.mac,
                        }
                    },
                    track_total_hits: true,
                    rest_total_hits_as_int: true,
                });

                if (deviceRecord.hits.hits.length === 0) {
                    await client.index({
                        index: "mediscan_devices",
                        id: randomUUID(),
                        document: filterResults.deviceInfo
                    });
                }

                await client.index({
                    index: "mediscan_events",
                    id: randomUUID(),
                    document: filterResults.detectionEvent
                });
            }
        }
    })
}

main();
