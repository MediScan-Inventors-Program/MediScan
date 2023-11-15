<script lang="ts">
    import MiniPanel from "$lib/components/MiniPanel.svelte";
    import DevicesTable from "$lib/components/DevicesTable.svelte";
    import RiskScore from "$lib/components/RiskScore.svelte";

    // async function storeDocument() {
    //     await fetch('/api/storeDocument', {
    //         method: 'POST',
    //         body: JSON.stringify({"do": "things"}),
    //         headers: {
    //             'Content-Type': 'application/json'
    //         }
    //     })
    // }
</script>

<!--<div>-->
<!--    <button on:click={storeDocument}>Send doc to elasticsearch</button>-->

<!--    <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">-->
<!--        Button-->
<!--    </button>-->
<!--</div>-->

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
        <div class="col-span-3">
            <h2 class="text-2xl font-medium">Risk Score</h2>
            <RiskScore></RiskScore>
        </div>
        <div class="col-span-9">
            <h2 class="text-2xl font-medium">Devices</h2>
            <DevicesTable></DevicesTable>
        </div>
    </div>
</div>