<template>
    <div>
        <h2>My Portfolio</h2>
        <div v-bind:key="stock.id" v-for="stock in stocks">
          <Stock v-bind:stock="stock" v-on:handle-stock="$emit('remove-stock', stock)"/> 
        </div>
      </div>
</template>

<script>
import Stock from '../components/Stock'

export default {
  name:"PortfolioContainer",
  components:{
    Stock
  },
  props:["stocks"],
}
</script>