export default {
    setStocks: (state, data) => {
        state.stocks = data
    },
    addMyStock: (state, stock) => {
        if(!state.myStocks.includes(stock)){
            state.myStocks.push(stock)
        }
    },
    removeMyStock: (state, stock) => {
        state.myStocks = state.myStocks.filter(s => s.id != stock.id)
    },
    handleFilter: (state, filterType) => {
        if(filterType === 'Alphabetically'){
            state.stocks = state.stocks.sort((a,b) => a.name.localeCompare(b.name))
          }else if(filterType==='Price'){
            state.stocks = state.stocks.sort((a,b) => b.price - a.price)
          }
    },
    handleSortBy: (state, sortValue) => {
        state.sorting = sortValue
    }
}

// The only way to actually change state in a Vuex store is by committing 
// a mutation. Vuex mutations are very similar to events: each mutation has 
// a string type and a handler. The handler function is where we perform actual 
// state modifications, and it will receive the state as the first argument