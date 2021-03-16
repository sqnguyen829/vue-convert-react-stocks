<template>
    <div @click="$emit('handle-stock', stock)" class="card">
      <div class="card-body">
        <h5 class="card-title">{{stock.name}}</h5>
        <p class="card-text">{{`${stock.ticker}: ${stock.price}`}}</p>
      </div>
    </div>
</template>

<script>
export default {
  name:"Stock",
  props:["stock"]
}
</script>