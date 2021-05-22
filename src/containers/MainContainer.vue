<template>
    <div>
        <SearchBar/>

          <div class="row">
            <div class="col-8">

              <StockContainer/>

            </div>
            <div class="col-4">

              <PortfolioContainer/>

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
    }
}
</script>