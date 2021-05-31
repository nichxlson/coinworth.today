<template>
    <div class="w-full flex-auto p-6 border-t border-gray-100">
        <span>Coins: {{ coins }}</span>
        <span>Cash: {{ cash }}</span>
    </div>
</template>

<script>
    export default {
        computed: {
            budget() {
                return this.$store.state.budget;
            },

            buyPrice() {
                return this.$store.state.buyPrice;
            },

            sellPrice() {
                return this.$store.state.sellPrice;
            },

            coins() {
                return this.budget / this.buyPrice;
            },

            cash() {
                return this.coins * this.sellPrice;
            }
        }
    }
</script>
