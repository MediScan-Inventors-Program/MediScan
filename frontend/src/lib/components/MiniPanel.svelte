<script lang="ts">
    import Icon from "@iconify/svelte";

    export let icon = 'fa fa-ellipsis-v';
    export let panelName = '';
    export let panelValue = '';
    export let percentage = 0;
</script>

<div class="rounded-lg border-2 border-secondary p-5 bg-white flex-grow w-40">
    <div class="rounded-xl bg-primary-100 flex items-center p-2 w-min">
        <Icon icon="{icon}" class="h-min text-text w-6"/>
    </div>
    <h3 class="text-2xl font-bold mt-5 text-text">{panelValue}</h3>
    <div class="flex justify-between align-middle">
        <p class="text-secondary-500">{panelName}</p>
        <p class="{percentage>0 ? 'text-success' : 'text-danger'} whitespace-nowrap">
            {percentage > 0 ? '+' : ''}{percentage} {percentage > 0 ? '↑' : '↓'}
        </p>
    </div>
</div>