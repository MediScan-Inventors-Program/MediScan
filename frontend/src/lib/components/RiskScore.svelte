<script lang="ts">
    import Icon from "@iconify/svelte";

    export let riskScore: number = 50;
    export let riskPercentageUpdate: number = 0;

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

<div class="rounded-lg border-2 border-secondary p-5 bg-white mt-2">
    <div class="flex flex-col justify-between h-full items-center">
        <div class="gauge w-4/5 mt-6 mb-12"></div>

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
        border-radius: 10rem 10rem 0 0;
        background: linear-gradient(160deg, transparent 50%, #fff 0) top/100% 200%, radial-gradient(farthest-side at bottom, #fff calc(100% - 25px), transparent 0), linear-gradient(to right, theme('colors.primary.600'), theme('colors.accent.300'));

    }

    .gauge::before {
        content: "";
        display: block;
        padding-top: 50%;
    }
</style>