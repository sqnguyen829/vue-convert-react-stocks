<template>
    <div>
      <strong>Sort by:</strong>
      <label>
        <input @change = filterStock(picked) type="radio" id="alphabetically" value="Alphabetically" v-model="picked"/>
        Alphabetically
      </label>
      <label>
        <input @change = filterStock(picked) type="radio" id='price' value="Price" v-model="picked"/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select @change = sortStock(sortValue) v-model="sortValue">
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name:"SearchBar",
  data() {
    return {
      picked:'',
      sortValue:''
    }
  },
  methods:{
    ...mapActions([
      'filterStock',
      'sortStock'
    ])
  }
}
</script>
