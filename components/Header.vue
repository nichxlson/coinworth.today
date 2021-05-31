<template>
    <header class="w-full h-[60px] flex flex-row items-center justify-between px-6 border-b border-gray-100">
        <Logo/>

        <div class="flex flex-row items-center">
            <div class="border border-gray-200 rounded relative">
                <div class="absolute top-1/2 left-2 transform -translate-y-1/2 -rotate-90 pointer-events-none">
                    <img width="15" height="15" :src="'https://s2.coinmarketcap.com/static/img/coins/64x64/' + selectedCoinObject.id + '.png'" :alt="selectedCoinObject.name">
                </div>

                <select name="" id="" class="pl-8 pr-5 py-1 appearance-none w-full h-full text-sm bg-transparent" v-model="selectedCoin">
                    <option v-for="coin in coins" :value="coin.symbol" v-text="coin.name"></option>
                </select>

                <div class="absolute top-1/2 right-2 transform -translate-y-1/2 -rotate-90 pointer-events-none">
                    &lsaquo;
                </div>
            </div>

            <span class="ml-2">&longrightarrow;</span>

            <div class="border border-gray-200 rounded relative ml-2">
                <select name="" id="" class="pl-2 pr-5 py-1 appearance-none w-full h-full text-sm bg-transparent" v-model="selectedCurrency">
                    <option v-for="currency in currencies" :value="currency.symbol" v-text="currency.name"></option>
                </select>

                <div class="absolute top-1/2 right-2 transform -translate-y-1/2 -rotate-90 pointer-events-none">
                    &lsaquo;
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        computed: {
            selectedCoin: {
                get() {
                    return this.$store.state.selectedCoin;
                },

                set(value) {
                    this.$store.commit('setSelectedCoin', value);
                }
            },

            selectedCurrency: {
                get() {
                    return this.$store.state.selectedCurrency;
                },

                set(value) {
                    this.$store.commit('changeSelectedCurrency', value);
                }
            },

            selectedCoinObject() {
                let coins = this.coins,
                    selectedCoin = this.selectedCoin;

                return coins.find(coin => coin.symbol === selectedCoin);
            },

            coins() {
                return this.$store.state.coins.coins;
            },

            currencies() {
                return this.$store.state.currencies.currencies;
            }
        },
    }
</script>
