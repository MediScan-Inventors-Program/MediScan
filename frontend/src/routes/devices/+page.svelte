<script lang="ts">
    import DevicesTable from "$lib/components/DevicesTable.svelte";
    import {onMount} from "svelte";
    import type {Device} from "$lib/models/Device";
    import {addDeviceManually, getDevices} from "$lib/utils/devicesUtils";
    import Icon from "@iconify/svelte";
    import {scan} from "$lib/utils/barcodeUtils";

    let devices: Device[] = [];
    let filteredDevices: Device[] = [];
    let filterString: string = "";

    onMount(async () => {
        devices = await getDevices();
        filteredDevices = devices;
    });

    const filterDevices = () => {
        if (filterString !== "") {
            filteredDevices = devices.filter(device => {
                return device.name.toLowerCase().includes(filterString.toLowerCase()) ||
                    device.manufacturer.toLowerCase().includes(filterString.toLowerCase()) ||
                    device.ip.toLowerCase().includes(filterString.toLowerCase()) ||
                    device.mac.toLowerCase().includes(filterString.toLowerCase());
            });
        } else {
            filteredDevices = devices;
        }
    }

    const scanTest = async () => {
        try {
            const result = await scan();

            if (result.length > 0) {
                await addDeviceManually(result);

                devices = await getDevices();
                filteredDevices = devices;
            }


        } catch (error) {
            console.error("Scan error:", error);
        }
    };

</script>

<div class="my-10">
    <div class="flex justify-between align-top mb-3">
        <h1 class="text-3xl font-semibold my-1">Devices</h1>
        <div class="flex justify-end align-middle w-max gap-x-2">
            <button class="border border-secondary-200 rounded-md bg-white p-1.5 flex align-middle justify-center cursor-pointer tooltip"
                    on:click={scanTest} data-tip="Manually scan device">
                <Icon icon="ph:scan-bold" class="w-min h-7 text-secondary-200 hover:text-secondary-300 duration-150 text-center self-center"/>
            </button>
            <div class="tooltip h-max" data-tip="Filter by name, manufacturer, IP or MAC">
                <input type="text" placeholder="Filter" class="border border-secondary-200 rounded-md px-4 py-2.5 w-60 text-start"
                       bind:value={filterString} on:input={filterDevices} />
            </div>
        </div>
    </div>
    <DevicesTable devices={filteredDevices}></DevicesTable>
</div>