import {json} from "@sveltejs/kit";
import {client} from "$lib/server/elastic";

export async function DELETE() {
    await client.deleteByQuery({
        index: "mediscan_events",
        body: {
            query: {
                match_all: {}
            }
        }
    });

    await client.deleteByQuery({
        index: "mediscan_devices",
        body: {
            query: {
                match_all: {}
            }
        }
    });

    return json({success: true});
}