<script lang="ts">
    export let riskScore: number = -1;
</script>

{#if riskScore < 0}
    <div class="inline-flex rounded-3xl px-6 py-1 w-min text-sm font-bold bg-gray-200 text-gray-700">
        N/A
    </div>
{:else}
    <div class="inline-flex rounded-3xl px-6 py-1 w-min text-sm font-bold {riskScore < 50 ? 'bg-danger-200 text-danger-700' : riskScore < 80 ? 'bg-warning-200 text-warning-700' : 'bg-success-200 text-success-700'}">
        {riskScore}
    </div>
{/if}