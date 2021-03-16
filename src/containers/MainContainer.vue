<template>
    <div>
        <SearchBar v-bind:stocks="stocks" v-on:filter-stock="filterStock" v-on:sort-stock="sortStock"/>

          <div class="row">
            <div class="col-8">

              <StockContainer v-bind:stocks="stocks" v-on:add-stock="addStock"/>

            </div>
            <div class="col-4">

              <PortfolioContainer v-bind:stocks="portfolioStocks" v-on:remove-stock="removeStock"/>

            </div>
          </div>
      </div>
</template>

<script>
import SearchBar from '../components/SearchBar'
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContanier'

export default {
    name:"MainContainer",
    components:{
        SearchBar,
        StockContainer,
        PortfolioContainer
    },
    data() {
      return {
        baseStocks: [],
        stocks: [],
        portfolioStocks:[]
      }
    },
    created() {
      fetch("http://localhost:3000/stocks",{
        method:"GET"
      })
      .then(res => res.json())
      .then(data => {
        this.baseStocks = data
        this.stocks = data
        })
    },
    methods:{
      addStock(stock) {
        if(!this.portfolioStocks.includes(stock)){
          this.portfolioStocks = [...this.portfolioStocks, stock]
        }
      },
      removeStock(stock) {
        this.portfolioStocks = this.portfolioStocks.filter(s => s.id != stock.id)
      },
      filterStock(filter) {
        this.stocks = this.baseStocks.filter(stock => stock.type === filter)
      },
      sortStock(sortBy) {
        if(sortBy === 'Alphabetically'){
          this.stocks = this.stocks.sort((a,b) => a.name.localeCompare(b.name))
        }else if(sortBy==='Price'){
          this.stocks = this.stocks.sort((a,b) => b.price - a.price)
        }
      }
    }
}
</script>