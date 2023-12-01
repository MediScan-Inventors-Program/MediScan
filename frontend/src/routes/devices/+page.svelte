<script lang="ts">
    import DevicesTable from "$lib/components/DevicesTable.svelte";
    import {onMount} from "svelte";
    import type {PageData} from './$types';
    import type {Device} from "$lib/models/Device";
    import {dev} from "$app/environment";


</script>

<div class="pt-10">
    <h1 class="text-3xl font-semibold mb-5">Devices</h1>
    <DevicesTable></DevicesTable>

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