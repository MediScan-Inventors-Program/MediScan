<script lang="ts">
    import {onMount} from "svelte";

    import MiniPanel from "$lib/components/MiniPanel.svelte";
    import DevicesTable from "$lib/components/DevicesTable.svelte";
    import RiskScore from "$lib/components/RiskScore.svelte";

    import type {Device} from "$lib/models/Device";
    import Icon from "@iconify/svelte";
    import {getDevices} from "$lib/utils/devicesUtils";

    let devices: Device[] = [];
    let riskScoreTemp: number = 0;

    onMount(async () => {
        // TODO: Replace with actual risk score calculation
        devices = await getDevices();
        for (let device of devices) {
            riskScoreTemp += device.riskScore;
        }
        riskScoreTemp = riskScoreTemp / devices.length;
    });

</script>

<div class="my-10">
    <h1 class="text-3xl font-semibold">Dashboard</h1>
    <div class="mt-5 flex justify-between align-middle gap-x-8 gap-y-5 flex-wrap">
        <MiniPanel
                icon="uil:heart-rate"
                panelName="Medical Devices"
                panelValue={(devices.length - 1).toString()}
                percentage={devices.length - 5}>
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
                panelValue="2"
                percentage={1}>
        </MiniPanel>
    </div>
    <div class="mt-8">
        <div class="flex justify-between items-center">
            <h2 class="text-2xl font-medium">Devices</h2>

            <a href="/devices">
                <button class="flex items-center justify-between bg-primary-100 hover:bg-primary-200 duration-300 border-primary-900 border-2 text-white rounded-lg px-4 py-2">
                    <Icon icon="fluent:open-16-filled" class="w-6 text-primary-900"></Icon>
                    <span class="text-primary-900 text-sm font-medium">See All Devices</span>
                </button>
            </a>
        </div>
        <DevicesTable devices={devices} maxDevices={5}></DevicesTable>
    </div>
    <div class="grid grid-cols-12 gap-8 mt-8">
        <div class="col-span-3">
            <h2 class="text-2xl font-medium">Risk Score</h2>
            <RiskScore riskScore={riskScoreTemp}></RiskScore>
        </div>
        <div class="col-span-9">

        </div>
    </div>
</div>