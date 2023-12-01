<script lang="ts">
    import {DeviceColumns} from "$lib/models/DeviceColumns";
    import type {Device} from "$lib/models/Device";
    import RiskScoreBadge from "$lib/components/RiskScoreBadge.svelte";
    import {onMount} from "svelte";
    import Icon from "@iconify/svelte";

    import {getDevices} from "$lib/utils/devicesUtils";

    let devices: Device[] = [];

    // -1 means no limit
    export let maxDevices = -1;

    let sortDirections: Record<string, string> = {
        "riskScore": "up",
        "lastSeen": "up"
    }


    onMount(async () => {
        devices = await getDevices();
        if (maxDevices >= 0){
            devices = devices.slice(0, maxDevices);
        }

        sortBy("lastSeen");
    });

    const sortBy = (column: string) => {
        if (sortDirections[column] == "up") {
            if (column == "riskScore") {
                devices.sort((a, b) => a.riskScore - b.riskScore);
            } else if (column == "lastSeen") {
                devices.sort((a, b) => new Date(a.lastSeen).getTime() - new Date(b.lastSeen).getTime());
            }
            sortDirections[column] = "down";
        } else {
            if (column == "riskScore") {
                devices.sort((a, b) => b.riskScore - a.riskScore);
            } else if (column == "lastSeen") {
                devices.sort((a, b) => new Date(b.lastSeen).getTime() - new Date(a.lastSeen).getTime());
            }
            sortDirections[column] = "up";
        }

        sortDirections = sortDirections;
        devices = devices;
    }

</script>

<div class="mt-2 font-inter">
    <table class="min-w-full rounded-lg border-2 border-separate border-spacing-0 border-secondary overflow-hidden bg-white table-auto table-zebra">
        <thead class="bg-white">
        <tr class="">
            {#each DeviceColumns as column}
                <th scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left border-b-2 border-secondary">
                    <span>{column.prettyName}</span>
                    {#if column.name === "riskScore" || column.name === "lastSeen"}
                        <button on:click={() => sortBy(column.name)}>
                            <Icon icon="ph:caret-{sortDirections[column.name]}-bold"
                                  class="w-5 text-gray-900 inline-block cursor-pointer"></Icon>
                        </button>
                    {/if}
                </th>
            {/each}
        </tr>
        </thead>
        <tbody>
        {#each devices as device}
            <tr>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap">
                    <a class="text-secondary-950 font-semibold underline decoration-2 duration-200"
                       href="/devices/{device.id}">{device.name}</a>
                    <div class="text-secondary-400 font-light mt-1">{device.manufacturer}</div>
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap">
                    <RiskScoreBadge riskScore={device.riskScore}></RiskScoreBadge>
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap tooltip underline underline-offset-1 cursor-pointer mt-3"
                    data-tip="Copy" on:click={() => navigator.clipboard.writeText(device.mac)}>
                    {device.mac}
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap">
                    {device.deviceType}
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap tooltip underline underline-offset-1 cursor-pointer mt-3"
                    data-tip="Copy" on:click={() => navigator.clipboard.writeText(device.ip)}>
                    {device.ip}
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap">
                    {device.lastSeen}
                </td>
            </tr>
        {/each}
        </tbody>
    </table>
</div>