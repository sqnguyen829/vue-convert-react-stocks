export default {
    fetchStocks: ({commit}) => {
        fetch('http://localhost:3000/stocks', {
            method:'GET'
        })
        .then(res => res.json())
        .then(data => {
            commit('setStocks', data)
        })
    },
    addStock: ({commit}, stock) => {
        commit('addMyStock', stock)
    },
    removeStock: ({commit}, stock) => {
        commit('removeMyStock', stock)
    },
    filterStock: ({commit}, filterType) => {
        commit('handleFilter', filterType)
    },
    sortStock: ({commit}, sortValue) => {
        commit('handleSortBy', sortValue)
    },
}

//Actions will call on the mutation needed for changing the state, as well as handle asynchronous operations