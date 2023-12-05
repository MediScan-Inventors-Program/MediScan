import {client} from "$lib/server/elastic";

export const POST = async ({request}: { request: Request }) => {
    const body = await request.json();
    if (!body.device_name) {
        return new Response(
            JSON.stringify({error: "device is required"}),
            {status: 400}
        );
    }
    if (!body.manufacturer) {
        return new Response(
            JSON.stringify({error: "device manufacturer is required"}),
            {status: 400}
        );
    }
    if (!body.id) {
        return new Response(
            JSON.stringify({error: "device id is required"}),
            {status: 400}
        );
    }

    await client.update({
        index: "mediscan_devices",
        id: body.id,
        body: {
            doc: {
                metadataName: body.device_name,
                metadataManufacturer: body.manufacturer
            }
        }
    })


    return new Response(JSON.stringify({device: body}), {
        status: 200,
    });

}