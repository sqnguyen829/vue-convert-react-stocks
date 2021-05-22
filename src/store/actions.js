export default {
    fetchStocks: ({commit}) => {
        fetch('http://localhost:3000/stocks', {
            method:'GET'
        })
        .then(res => res.json())
        .then(data => {
            commit('setStocks', data)
        })
    }
}

//Actions will call on the mutation needed for changing the state, as well as handle asynchronous operations