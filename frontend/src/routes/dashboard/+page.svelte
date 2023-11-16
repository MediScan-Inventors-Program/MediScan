<script lang="ts">
    import type {PageData} from './$types';
    import {onMount} from "svelte";

    import MiniPanel from "$lib/components/MiniPanel.svelte";
    import DevicesTable from "$lib/components/DevicesTable.svelte";
    import RiskScore from "$lib/components/RiskScore.svelte";

    import type {Device} from "$lib/models/Device";
    import Icon from "@iconify/svelte";

    export let data: PageData;
    let devices: Device[] = [];

    onMount(async () => {
        // console.log(data);
        for (let device of data.devices.hits.hits) {
            devices.push({
                id: device._id,
                name: device?._source?.metadataName,
                manufacturer: device?._source?.metadataManufacturer,
                riskScore: device?._source?.riskScore,
                mac: device?._source?.mac,
                ip: device?._source?.ip,
                deviceType: device?._source?.certainty,
                lastSeen: device?._source?.lastSeen
            });
        }
        // console.log(devices);
    });
</script>

<div class="pt-10">
    <h1 class="text-3xl font-semibold">Dashboard</h1>
    <div class="mt-5 flex justify-between align-middle gap-x-8 gap-y-5 flex-wrap">
        <MiniPanel
                icon="uil:heart-rate"
                panelName="Medical Devices"
                panelValue="17"
                percentage={2}>
        </MiniPanel>
        <MiniPanel
                icon="solar:shield-cross-outline"
                panelName="CVEs"
                panelValue="12"
                percentage={-1}>
        </MiniPanel>
        <MiniPanel
                icon="material-symbols:exclamation"
                panelName="Recalls"
                panelValue="5"
                percentage={3}>
        </MiniPanel>
        <MiniPanel
                icon="mingcute:game-2-line"
                panelName="Non-Medical Devices"
                panelValue="2"
                percentage={1}>
        </MiniPanel>
        <MiniPanel
                icon="fluent:question-24-filled"
                panelName="Unknown Devices"
                panelValue="5"
                percentage={-8}>
        </MiniPanel>
    </div>
    <div class="grid grid-cols-12 gap-8 mt-12">
        <div class="col-span-full xl:col-span-3">
            <h2 class="text-2xl font-medium">Risk Score</h2>
            <RiskScore devices={devices}></RiskScore>
        </div>
        <div class="col-span-full xl:col-span-9">
            <div class="flex justify-between items-center">
                <h2 class="text-2xl font-medium">Devices</h2>

                <a href="/devices">
                    <button class="flex items-center justify-between bg-primary-100 hover:bg-primary-200 duration-300 border-primary-900 border-2 text-white rounded-lg px-4 py-2">
                        <Icon icon="fluent:open-16-filled" class="w-6 text-primary-900"></Icon>
                        <span class="text-primary-900 text-sm font-medium">See All Devices</span>
                    </button>
                </a>

            </div>
            <DevicesTable devices={devices}></DevicesTable>
        </div>
    </div>
</div>