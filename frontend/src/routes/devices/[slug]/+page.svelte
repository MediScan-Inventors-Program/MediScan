<script lang="ts">
    import {onMount} from "svelte";
    import {getDevices} from "$lib/utils/devicesUtils";

    import type {Device} from "$lib/models/Device";
    import type {Event} from "$lib/models/Events";

    import Icon from "@iconify/svelte";
    import {scan} from "$lib/utils/barcodeUtils";
    import RiskScoreBadge from "$lib/components/RiskScoreBadge.svelte";

    export let data;
    let device: Device;
    let events: Event[] = [];
    let issues = [
        {
            description: "FDA recall Z-0218-2024 issued for device",
            url: "https://www.accessdata.fda.gov/scripts/cdrh/cfdocs/cfres/res.cfm?id=203531",
            resolved: false,
            date: new Date("2023-11-03")
        },
        {
            description: "Vulnerability CVE-2011-3386 issued",
            url: "https://cve.mitre.org/cgi-bin/cvename.cgi?name=CVE-2011-3386",
            resolved: true,
            date: new Date("2011-09-02")
        }
    ]

    onMount(async () => {
        await getDevices().then((devices) => {
            let temp = devices.find((device) => device.id === data.props.slug);

            if (temp) {
                device = temp;
                console.log(device);

            }
        });

        eventDummyData();
    });

    const eventDummyData = () => {
        const getRandomBaselineDate = () => {
            const start = new Date(2021, 0, 1); // January 1, 2021
            const end = new Date(); // Current date
            const randomBaselineDate = new Date(
                start.getTime() + Math.random() * (end.getTime() - start.getTime())
            );
            return randomBaselineDate;
        };

        const baselineDate = getRandomBaselineDate();

        events = [
            {
                description: "Device connected to network",
                // date: 1-2 days before the baseline day (random)
                date: new Date(baselineDate.getTime() - Math.random() * 86400000 * 2),
                important: true,
            },
            {
                description: "IP Changed to " + device.ip.slice(0, -2) + "54",
                date: new Date(
                    baselineDate.getTime() -
                    Math.random() * 86400000 * 2 +
                    Math.random() * 3600000 * 5
                ),
                important: true,
            },
            {
                description: "Security update installed",
                date: new Date(
                    baselineDate.getTime() -
                    Math.random() * 86400000 * 2 +
                    Math.random() * 3600000 * 5
                ),
                important: false,
            },
            {
                description: "Software patch deployed",
                date: new Date(
                    baselineDate.getTime() -
                    Math.random() * 86400000 * 2 +
                    Math.random() * 3600000 * 5
                ),
                important: true,
            },
            {
                description: "Critical alert received",
                date: new Date(
                    baselineDate.getTime() -
                    Math.random() * 86400000 * 2 +
                    Math.random() * 3600000 * 5
                ),

                important: true,

            },
            {
                description: "System rebooted",
                date: new Date(
                    baselineDate.getTime() -
                    Math.random() * 86400000 * 2 +
                    Math.random() * 3600000 * 5
                ),
                important: true,
            },
            {
                description: "Server maintenance scheduled",
                date: new Date(
                    baselineDate.getTime() -
                    Math.random() * 86400000 * 2 +
                    Math.random() * 3600000 * 5
                ),
                important: false,
            },
            {
                description: "Backup completed",
                date: new Date(
                    baselineDate.getTime() -
                    Math.random() * 86400000 * 2 +
                    Math.random() * 3600000 * 5
                ),
                important: true,
            },
        ];

        // sort events by date
        events.sort((a, b) => b.date.getTime() - a.date.getTime());
    };

    const scanTest = async () => {
        try {
            const result = await scan();

            if (result.length > 0) {
                // TODO: Load additional metadata


            }


        } catch (error) {
            console.error("Scan error:", error);
        }
    };

</script>

<div class="my-10">
    {#if device}
        <div class="flex justify-between align-bottom">
            <div>
                <h1 class="text-3xl font-semibold">{device.name}</h1>
                <p class="text-secondary-400">{device.manufacturer}</p>
            </div>

            <button class="border border-secondary-200 rounded-md bg-white h-min p-1.5 flex align-middle justify-center cursor-pointer tooltip"
                    on:click={scanTest} data-tip="Manually scan device">
                <Icon icon="ph:scan-bold"
                      class="w-min h-7 text-secondary-200 hover:text-secondary-300 duration-150 text-center self-center"/>
            </button>
        </div>

        <div class="flex justify align-top mt-4 pb-6 border-b-2 border-secondary-200">
            <div class="rounded-lg border-2 border-secondary p-5 bg-white w-96">
                <div class="flex justify-between">
                    <p class="text-secondary-400">IP Address</p>
                    <button class="text-secondary-400 tooltip underline underline-offset-1 cursor-pointer"
                            data-tip="Copy"
                            on:click={() => navigator.clipboard.writeText(device.ip)}>{device.ip}</button>
                </div>
                <div class="flex justify-between my-1.5">
                    <p class="text-secondary-400">MAC Address</p>
                    <button class="text-secondary-400 tooltip underline underline-offset-1 cursor-pointer"
                            data-tip="Copy"
                            on:click={() => navigator.clipboard.writeText(device.mac)}>{device.mac}</button>
                </div>
                <div class="flex justify-between">
                    <p class="text-secondary-400">Risk Score</p>
                    <RiskScoreBadge riskScore={device.riskScore}></RiskScoreBadge>
                </div>
            </div>

            <!--            <div class="rounded-lg border-2 border-secondary p-5 bg-white w-96">-->
            <!--                &lt;!&ndash;                issues&ndash;&gt;-->
            <!--                <h2 class="text-lg font-semibold">-->
            <!--                    Issues-->
            <!--                </h2>-->

            <!--            </div>-->
        </div>
        <div class="mt-4 flex justify-between align-top gap-x-5">
            <div class="flex-grow">
                <h2 class="text-lg font-semibold">
                    Events
                </h2>
                <div class="rounded-lg border-2 border-secondary p-5 bg-white mt-2">
                    {#if events.length > 0}
                        {#each events as event}
                            <div class="flex justify-between mb-4">
                                {#if event.link}
                                    <a href={event.link} class="cursor-pointer underline-offset-1 underline">
                                        <p class="text-secondary-400">{event.description}</p>
                                    </a>
                                {:else}
                                    <p class="text-secondary-400">{event.description}</p>
                                {/if}
                                <p class="text-secondary-400">{event.date.toLocaleString()}</p>
                            </div>
                        {/each}
                    {:else}
                        <p class="text-secondary-400">No events</p>
                    {/if}
                </div>
            </div>
            <div class="flex-grow">
                <h2 class="text-lg font-semibold">
                    Issues
                </h2>
                <div class="rounded-lg border-2 border-secondary p-5 bg-white mt-2">
                    {#if issues.length > 0}
                        {#each issues as issue}
                            <div class="flex justify-between mb-4">
                                {#if issue.resolved}
                                    <a href={issue.url}
                                       class="cursor-pointer underline-offset-1 decoration-secondary-400 underline"
                                       target="_blank">
                                        <p class="text-secondary-400">{issue.description}</p>
                                    </a>
                                {:else}
                                    <a href={issue.url}
                                       class="cursor-pointer underline-offset-1 decoration-danger-400 underline"
                                       target="_blank">
                                        <p class="text-danger-400">{issue.description}</p>
                                    </a>
                                {/if}

                                <p class="text-secondary-400">{issue.date.toLocaleString()}</p>
                            </div>
                        {/each}
                    {:else}
                        <p class="text-secondary-400">No issues</p>
                    {/if}
                </div>
            </div>
        </div>


    {:else}
        <h1 class="text-3xl font-semibold">Loading...</h1>
    {/if}
</div>
