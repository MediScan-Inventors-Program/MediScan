<script lang="ts">
    import Icon from "@iconify/svelte";
    export let riskScore: number = 0;

    let showPercentage: boolean = false;

    const getLetterGrade = (score: number): string => {
        if (score >= 90) {
            if (score >= 97) {
                return 'A+';
            }
            return 'A';
        } else if (score >= 80) {
            if (score >= 87) {
                return 'B+';
            }
            return 'B';
        } else if (score >= 70) {
            if (score >= 77) {
                return 'C+';
            }
            return 'C';
        } else if (score >= 60) {
            if (score >= 67) {
                return 'D+';
            }
            return 'D';
        } else {
            return 'F';
        }
    }

    const scale = (value: number): number => {
        return (value / 100) * 180;
    }

</script>

<div class="rounded-lg border-2 border-secondary p-5 bg-white mt-3">
    <div class="flex flex-col justify-between h-full items-center">
        <div class="flex justify-end items-center w-full">
            <button class="tooltip" data-tip="Embed this widget" on:click={() => window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ')}>
                <Icon icon="icomoon-free:embed" class="h-min cursor-pointer mr-2 text-secondary-600 w-6"></Icon>
            </button>
        </div>
        <div class="gauge w-4/5 mt-2 mb-8 relative" style="background: linear-gradient({scale(riskScore)}deg, transparent 50%, #fff 0) top/100% 200%, radial-gradient(farthest-side at bottom, #fff calc(100% - 25px), transparent 0), linear-gradient(to right, #883ECD, #FF00FA80);">
            <button class="mt-5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 tooltip" data-tip="Toggle percentage" on:click={() => showPercentage = !showPercentage}>
                <span class="text-2xl lg:text-3xl text-text font-bold text-center block w-full">
                    {showPercentage ? riskScore.toFixed(2) + '%' : getLetterGrade(riskScore)}
                </span>
                <sub class="text-secondary-400 font-light text-center mt-0">
                    {showPercentage ? 'Risk Score' : 'Risk Grade'}
                </sub>
            </button>
        </div>
        <div class="flex justify-center">
            <a href="/risk">
                <button class="flex items-center justify-between bg-primary-100 hover:bg-primary-200 duration-300 border-primary-900 border-2 text-white rounded-lg px-4 py-2">
                    <Icon icon="fluent:open-16-filled" class="w-6 text-primary-900"></Icon>
                    <span class="text-primary-900 text-sm font-medium">See Risk Breakdown</span>
                </button>
            </a>
        </div>
    </div>
</div>

<style>
    .gauge {
        border-radius: 100rem 100rem 0 0;
    }

    .gauge::before {
        content: "";
        display: block;
        padding-top: 50%;
    }

    span {
        line-height: 1 !important;
    }
</style>