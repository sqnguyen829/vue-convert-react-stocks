<template>
    <div class="card" @click="$emit('handle-stock', stock)">
      <div class="card-body">
        <h5 class="card-title">{{stock.name}}</h5>
        <p class="card-text">{{`${stock.ticker}:${stock.price}`}}</p>
      </div>
    </div>
</template>

<script>
export default {
  props:["stock", "handle-stock"]
}
</script>