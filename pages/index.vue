<template>
    <div class="container mx-auto h-full flex flex-col justify-center">
        <div class="flex flex-row items-center">
            <div class="hidden flex flex-row items-center mr-4">
                <button class="flex flex-col items-center justify-center border border-gray-200 rounded-l-sm w-[30px] h-[30px] relative group" :class="{ 'bg-gray-200': type === 'price' }" @click.prevent="type = 'price'">
                    <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs uppercase font-bold rounded-sm px-2 py-1 tracking-wide pointer-events-none opacity-0 transition-all duration-300 group-hover:mb-2 group-hover:opacity-100">Price</span>
                    <span class="text-sm">£</span>
                </button>

                <button class="flex flex-col items-center justify-center border border-l-0 border-gray-200 rounded-r-sm w-[30px] h-[30px] relative group" :class="{ 'bg-gray-200': type === 'time' }" @click.prevent="type = 'time'">
                    <span class="absolute bottom-full left-1/2 transform -translate-x-1/2 bg-black text-white text-xs uppercase font-bold rounded-sm px-2 py-1 tracking-wide pointer-events-none opacity-0 transition-all duration-300 group-hover:mb-2 group-hover:opacity-100">Time</span>
                    <span class="text-sm">T</span>
                </button>
            </div>

            <div class="flex flex-row items-center">
                <span class="mr-1">If I bought</span>
                <input type="text" placeholder="10" class="w-[80px] h-[30px] px-2 border border-gray-200 rounded-sm appearance-none mr-1" v-model="coin">
                <span class="mr-1" v-if="coin == 1">coin</span>
                <span class="mr-1" v-else>coins</span>
<!--                <select name="" id="" class="h-[30px] px-2 border border-gray-200 rounded-sm appearance-none mr-1">-->
<!--                    <option value="">bitcoin</option>-->
<!--                </select>-->
                <span class="mr-1">at</span>
                <input type="text" placeholder="10" value="1" class="w-[80px] h-[30px] px-2 border border-gray-200 rounded-sm appearance-none mr-1">
                <span class="mr-1">and now it's worth</span>
                <input type="text" placeholder="10" value="1" class="w-[80px] h-[30px] px-2 border border-gray-200 rounded-sm appearance-none mr-1">
            </div>
<!--            <span class="ml-4" v-if="type === 'price'">If I bought 100 bitcoin at $0.20 I would have</span>-->
<!--            <span class="ml-4" v-if="type === 'time'">If I bought 100 bitcoin on 20/11/2010 I would have</span>-->
        </div>

        <hr class="my-6">

        <div class="flex flex-row items-stretch relative">
            <div class="w-1/2 flex flex-col items-start">
                <span class="uppercase text-sm text-gray-400 mb-4">Coin</span>
                <span class="text-9xl" v-text="coin"></span>
            </div>

            <div class="flex flex-col items-center justify-center border-l border-grey w-px">
                <div class="flex flex-col items-center justify-center bg-white border border-grey rounded-full w-[40px] h-[40px] text-3xl pb-1.5 pl-[1px]">&thickapprox;</div>
            </div>

            <div class="w-1/2 flex flex-col items-end">
                <span class="uppercase text-sm text-gray-400 mb-4">Cash</span>
                <span class="text-9xl">$200</span>
            </div>
        </div>
    </div>
</template>

<script>
        export default {
            data() {
                return {
                    type: 'price',
                    coin: '100',
                    cash: '200',
                }
            }
        }
</script>
