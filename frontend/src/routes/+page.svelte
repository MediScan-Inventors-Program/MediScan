<h1>Hello world!</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<div>
    <button on:click={storeDocument}>Send doc to elasticsearch</button>
</div>

<script lang="ts">
    async function storeDocument() {
        await fetch('/api/storeDocument', {
            method: 'POST',
            body: JSON.stringify({ "do": "thing" }),
            headers: {
                'Content-Type': 'application/json'
            }
        })
    }
</script>
