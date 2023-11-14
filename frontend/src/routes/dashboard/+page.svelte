<script lang="ts">
    import Icon from "@iconify/svelte";

    async function storeDocument() {
        await fetch('/api/storeDocument', {
            method: 'POST',
            body: JSON.stringify({"do": "things"}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
</script>

<h1>Hello world!</h1>
<h1 class="font-poppins">Hello world!</h1>
<h1 class="font-inter">Hello worlds!</h1>
<Icon icon="solar:moon-bold-duotone" />


<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
    <button on:click={storeDocument}>Send doc to elasticsearch</button>

    <button class="inline-block cursor-pointer rounded-md bg-gray-800 px-4 py-3 text-center text-sm font-semibold uppercase text-white transition duration-200 ease-in-out hover:bg-gray-900">
        Button
    </button>
</div>