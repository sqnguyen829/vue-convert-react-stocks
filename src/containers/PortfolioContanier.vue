<template>
    <div>
        <h2>My Portfolio</h2>
          <Stock 
            v-bind:stock="stock" 
            v-bind:key="stock.id" 
            v-for="stock in myStocks"
            v-on:handle-stock="removeStock"/>
      </div>
</template>

<script>
import { mapState } from 'vuex'
import Stock from '../components/Stock'
import { mapActions } from 'vuex'

export default {
  components:{
    Stock
  },
  computed: {
    ...mapState([
      'myStocks'
    ])
  },
  methods: {
    ...mapActions([
      'removeStock'
    ])
  }
}
</script>