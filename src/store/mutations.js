export default {
    setStocks: (state, data) => {
        state.stocks = data
    }
}

// The only way to actually change state in a Vuex store is by committing 
// a mutation. Vuex mutations are very similar to events: each mutation has 
// a string type and a handler. The handler function is where we perform actual 
// state modifications, and it will receive the state as the first argument