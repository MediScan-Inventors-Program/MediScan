import type {PageServerLoad} from './$types';

import {client} from '$lib/server/elastic'

export const load: PageServerLoad = async () => {
    return {
        devices: await client.search({
            index: "mediscan_devices",
            body: {
                query: {
                    match_all: {}
                }
            }
        })
    }
}