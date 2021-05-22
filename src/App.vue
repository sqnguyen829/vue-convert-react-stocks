<template>
  <div>
      <Header/>
      <MainContainer/>
    </div>
</template>

<script>
import Header from './components/Header'
import MainContainer from './containers/MainContainer'
import { mapActions } from 'vuex'

export default {
  name: 'App',
  components: {
    Header,
    MainContainer
  },
  created() {
    console.log('hello')
    this.fetchStocks()
  },
  methods: {
    ...mapActions([
      'fetchStocks'
    ])
  }
}
</script>

<style>
h1{
  padding: 2rem;
}

h2{
  text-align: center;
}

.card{
  width: 50%;
  margin: 0 auto;
  text-align: center;
}

.list-group{
  width: 50%;
  margin: 0 auto;
  text-align: center;
}
</style>
