<template>
    <div class="w-1/2 px-6 py-6 border-r border-gray-100">
        <div class="flex flex-col items-stretch mb-8">
            <label for="budget" class="text-xs text-gray-400 font-bold uppercase mb-2 tracking-wider">Budget</label>
            <div class="flex flex-row items-stretch">
                <input id="budget" type="text" class="flex-auto h-[50px] px-4 border rounded border-gray-100" v-model="budget">
                <div class="hidden w-[160px] flex flex-row items-center bg-gray-100 rounded-r">
                    <select name="" id="" class="w-full h-full bg-gray-100 rounded-r appearance-none px-4">
                        <option value="$">USD</option>
                        <option value="£">GBP</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-stretch mb-8">
            <label for="buyPrice" class="text-xs text-gray-400 font-bold uppercase mb-2 tracking-wider">Buy Price</label>
            <div class="flex flex-row items-stretch">
                <input id="buyPrice" type="text" class="flex-auto h-[50px] px-4 border rounded border-gray-100" v-model="buyPrice">
                <div class="hidden w-[160px] flex flex-row items-center bg-gray-100 rounded-r">
                    <select name="" id="" class="w-full h-full bg-gray-100 rounded-r appearance-none px-4">
                        <option value="$">USD</option>
                        <option value="£">GBP</option>
                    </select>
                </div>
            </div>
        </div>

        <div class="flex flex-col items-stretch">
            <label for="sellPrice" class="text-xs text-gray-400 font-bold uppercase mb-2 tracking-wider">Sell Price</label>
            <div class="flex flex-row items-stretch">
                <input id="sellPrice" type="text" class="flex-auto p-4 border rounded border-gray-100" v-model="sellPrice">
                <div class="hidden w-[160px] flex flex-row items-center bg-gray-100 rounded-r">
                    <select name="" id="" class="w-full h-full bg-gray-100 rounded-r appearance-none px-4">
                        <option value="$">USD</option>
                        <option value="£">GBP</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            budget: {
                get() {
                    return this.$store.state.budget;
                },

                set(value) {
                    this.$store.commit('setBudget', value);
                }
            },

            buyPrice: {
                get() {
                    return this.$store.state.buyPrice;
                },

                set(value) {
                    this.$store.commit('setBuyPrice', value);
                }
            },

            sellPrice: {
                get() {
                    return this.$store.state.sellPrice;
                },

                set(value) {
                    this.$store.commit('setSellPrice', value);
                }
            }

        }
    }
</script>
