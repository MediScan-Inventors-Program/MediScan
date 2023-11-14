<script lang="ts">
    import "../app.css";

    import Navbar from "$lib/components/Navbar.svelte";
</script>

<svelte:head>
    <title>MediScan</title>
    <meta name="description" content="MediScan - Building trust through medical transparency"/>
    <meta name="author" content="MediScan"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta property="og:title" content="MediScan"/>
    <meta property="og:description" content="MediScan - Building trust through medical transparency"/>
    <meta property="og:image" content="https://ibb.co/qFZMgxT"/>
    <meta property="og:locale" content="en_US"/>
    <meta property="og:type" content="website"/>
    <meta property="og:site_name" content="MediScan"/>
</svelte:head>

<div class="flex flex-col min-h-screen bg-background">
    <Navbar/>
    <main class="flex-grow px-6 sm:px-14 md:px-24 lg:px-30 xl:px-36 pt-8">
        <slot/>
    </main>
</div>