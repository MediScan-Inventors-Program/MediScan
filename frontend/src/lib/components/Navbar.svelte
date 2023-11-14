<script lang="ts">
    import Icon from "@iconify/svelte";
</script>

<nav class="bg-primary px-6 sm:px-14 md:px-24 lg:px-30 xl:px-36 py-3">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="">
            <a href="/" class="flex">
                <img src="/imgs/logo.png" alt="MediScan Logo" class="h-12">
                <span class="self-center text-2xl font-medium whitespace-nowrap px-6 text-white tracking-wide hidden sm:flex">MediScan</span>
            </a>
        </div>
        <div class="flex justify-end gap-x-3 items-center">
            <Icon icon="solar:settings-line-duotone" color="white" width="28px" class="h-min cursor-pointer"/>
            <Icon icon="solar:bell-line-duotone" color="white" width="28px" class="h-min cursor-pointer mr-2"/>
            <div class="flex justify-between items-center gap-x-3">
                <div class="flex flex-col self-start items-end gap-y-1 h-full">
                    <h3 class="text-white text-base font-medium">Nathan Lu</h3>
                    <sub class="text-secondary-200 font-light">Admin</sub>
                </div>
                <div class="rounded-md self-start bg-primary-600 text-white text-2xl font-medium w-10 h-10 flex justify-center items-center cursor-pointer">
                    N
                </div>
            </div>
        </div>
    </div>
</nav>