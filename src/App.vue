<template>
  <div>
      <Header/>
      <MainContainer/>
    </div>
</template>

<script>
import Header from './components/Header'
import MainContainer from './containers/MainContainer'

export default {
  name: 'App',
  components: {
    Header,
    MainContainer
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
