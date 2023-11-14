<script lang="ts">
    import Icon from "@iconify/svelte";
    import {page} from '$app/stores';
</script>

<nav class="bg-primary px-6 sm:px-14 md:px-24 lg:px-30 xl:px-36">
    <div class="container flex flex-wrap justify-between items-center mx-auto">
        <div class="flex flex-start gap-x-3">
            <a href="/" class="flex mr-2 py-3">
                <img src="/imgs/logo.png" alt="MediScan Logo" class="h-12">
                <span class="self-center text-2xl font-medium whitespace-nowrap px-6 text-white tracking-wide hidden sm:flex">MediScan</span>
            </a>

            <div class:active-nav={$page.url.pathname === '/dashboard'}
                 class="nav-link flex items-center justify-center mt-3 px-5">
                <a class:active-nav={$page.url.pathname === '/dashboard'} href="/dashboard" class="text-center text-white font-medium">
                    Dashboard
                </a>
            </div>

            <div class:active-nav={$page.url.pathname === '/devices'}
                 class="nav-link flex items-center justify-center mt-3 px-5">
                <a class:active-nav={$page.url.pathname === '/devices'} href="/devices" class="text-center text-white font-medium">
                    Devices
                </a>
            </div>

            <div class:active-nav={$page.url.pathname === '/alerts'}
                 class="nav-link flex items-center justify-center mt-3 px-5">
                <a class:active-nav={$page.url.pathname === '/alerts'} href="/alerts" class="text-center text-white font-medium ">
                    Alerts
                </a>
            </div>

            <div class:active-nav={$page.url.pathname === '/risk'}
                 class="nav-link flex items-center justify-center mt-3 px-5">
                <a class:active-nav={$page.url.pathname === '/risk'} href="/risk" class="text-center text-white font-medium">
                    Risk
                </a>
            </div>

        </div>
        <div class="flex justify-end gap-x-3 items-center py-3">
            <Icon icon="solar:settings-line-duotone" color="white" width="28px" class="h-min cursor-pointer"/>
            <Icon icon="solar:bell-line-duotone" color="white" width="28px" class="h-min cursor-pointer mr-2"/>
            <div class="flex justify-between items-center gap-x-3">
                <div class="flex flex-col self-start items-end gap-y-1 h-full">
                    <h3 class="text-white text-base font-medium">Nathan Lu</h3>
                    <sub class="text-secondary-200 font-light">Admin</sub>
                </div>
                <div class="rounded-md self-start bg-primary-600 text-white text-xl font-medium w-10 h-10 flex justify-center items-center cursor-pointer">
                    N
                </div>
            </div>
        </div>
    </div>
</nav>

<style>
    div.active-nav {
        background: theme('colors.background');
        border-radius: 12px 12px 0 0;
    }

    a.active-nav {
        color: theme('colors.text.DEFAULT') !important;
    }
</style>