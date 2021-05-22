<template>
    <div>
        <h2>Stocks</h2>
          <Stock 
            v-bind:stock="stock" 
            v-bind:key="stock.id" 
            v-for="stock in getStocks"
            v-on:handle-stock="addStock"/>
      </div>
</template>

<script>
import Stock from '../components/Stock'
import { mapGetters, mapActions } from 'vuex'

export default {
  components:{
    Stock
  },
  computed: {
    ...mapGetters([
      'getStocks'
    ])
  },
  methods: {
    ...mapActions([
      'addStock'
    ])
  }
}
</script>