export const state = () => ({
    selectedCoin: 'BTC',
    selectedCurrency: 'USD',
    currencyRate: 1,
    chartDateRange: '1w',
    budget: 100,
    buyPrice: 1,
    sellPrice: 2,
});

export const mutations = {
    setSelectedCoin(state, selectedCoin) {
        state.selectedCoin = selectedCoin;
    },

    setSelectedCurrency(state, selectedCurrency) {
        state.selectedCurrency = selectedCurrency;
    },

    setCurrencyRate(state, currencyRate) {
        state.currencyRate = currencyRate;
    },

    changeSelectedCurrency(state, selectedCurrency) {
        fetch(`https://api.coindesk.com/v1/bpi/currentprice/${selectedCurrency}.json`)
            .then(response => response.json())
            .then(response => {
                let currencyUSD = response.bpi['USD'].rate_float,
                    currencyNew = response.bpi[selectedCurrency].rate_float;

                let newRate = currencyNew / currencyUSD;

                this.commit('setSelectedCurrency', selectedCurrency);
                this.commit('setCurrencyRate', newRate);
            });
    },

    setChartDateRange(state, chartDateRange) {
        state.chartDateRange = chartDateRange;
    },

    setBudget(state, budget) {
        state.budget = budget;
    },

    setBuyPrice(state, buyPrice) {
        state.buyPrice = buyPrice;
    },

    setSellPrice(state, sellPrice) {
        state.sellPrice = sellPrice;
    }
}
