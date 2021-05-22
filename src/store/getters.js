export default {
    getStocks: (state) => {
        return state.sorting === ''? state.stocks : state.stocks.filter(s => s.type === state.sorting)
    },
}

//the getters purpose is to get some sort of data from the state, 
//in most case its better it's to specify the exact data required.
//For instance, a filtered data or a calculation of something