<script lang="ts">
    import DevicesTable from "$lib/components/DevicesTable.svelte";
    import {onMount} from "svelte";
    import type {Device} from "$lib/models/Device";
    import {getDevices} from "$lib/utils/devicesUtils";
    import Icon from "@iconify/svelte";

    let devices: Device[] = [];
    let filteredDevices: Device[] = [];
    let filterString: string = "";

    onMount(async () => {
        devices = await getDevices();
        filteredDevices = devices;
    });

    const filterDevices = () => {
        // filter name, manufacturer, ip, mac
        // use filterString
        // code here:
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

    const scanNewDevice = () => {
        // scan new device
        // code here:
    }

</script>

<div class="pt-10">
    <div class="flex justify-between align-top mb-3">
        <h1 class="text-3xl font-semibold my-1">Devices</h1>
        <div class="flex justify-end align-middle w-max gap-x-2">
            <button class="border border-secondary-200 rounded-md bg-white p-1.5 flex align-middle justify-center cursor-pointer tooltip"
                    on:click={scanNewDevice} data-tip="Manually scan device">
                <Icon icon="ph:scan-bold" class="w-min h-7 text-secondary-200 hover:text-secondary-300 duration-150 text-center self-center"/>
            </button>
            <div class="tooltip h-max" data-tip="Filter by name, manufacturer, IP or MAC">
                <input type="text" placeholder="Filter" class="border border-secondary-200 rounded-md px-4 py-2.5 w-60 text-start"
                       bind:value={filterString} on:input={filterDevices} />
            </div>

        </div>


    </div>
    <DevicesTable devices={filteredDevices}></DevicesTable>

    <p>table with NO pagination for each device
        Columns:
        Name
        Manufacturer
        Risk Score
        Likelihood of medical device
        IP address (easy copy button)
        MAC address (easy copy button)
        Show human readable
        no UDI
        Add new device button
        Camera (scan)
        Active scan for discovery
        each device in table will have button for additional scan
        scan the ports in the device
        Either a refresh button to update the table or a passive load using sockets
        search/filter by IP/mac Filter everything
        Risk score above a number</p>
</div>