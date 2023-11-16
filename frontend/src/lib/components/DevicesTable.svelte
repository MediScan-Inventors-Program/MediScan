<script lang="ts">
    import {DeviceColumns} from "$lib/models/DeviceColumns";
    import type {Device} from "$lib/models/Device";
    import RiskScoreBadge from "$lib/components/RiskScoreBadge.svelte";
    import {onMount} from "svelte";

    export let devices: Device[] = [];

    onMount(() => {
        devices = devices;
    });

</script>

<div class="mt-2 font-inter">
    <table class="min-w-full rounded-lg border-2 border-separate border-spacing-0 border-secondary overflow-hidden bg-white table-auto table-zebra">
        <thead class="bg-white">
        <tr class="">
            {#each DeviceColumns as column}
                <th scope="col"
                    class="text-sm font-medium text-gray-900 px-6 py-4 text-left border-b-2 border-secondary">
                    {column.prettyName}
                </th>
            {/each}
        </tr>
        </thead>
        <tbody>

        {#each devices as device}
            <tr>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap">
                    <a class="text-secondary-950 font-semibold underline decoration-2 duration-200" href="/devices/{device.id}">{device.name}</a>
                    <div class="text-secondary-400 font-light mt-1">{device.manufacturer}</div>
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap">
                    <RiskScoreBadge riskScore={device.riskScore}></RiskScoreBadge>
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap tooltip underline underline-offset-1 cursor-pointer mt-3" data-tip="Copy" on:click={() => navigator.clipboard.writeText(device.mac)}>
                    {device.mac}
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap">
                    {device.deviceType}
                </td>
                <td class="text-sm text-secondary-800 font-light px-6 py-3 whitespace-nowrap tooltip underline underline-offset-1 cursor-pointer mt-3" data-tip="Copy" on:click={() => navigator.clipboard.writeText(device.ip)}>
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


<style>


</style>