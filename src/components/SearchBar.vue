<template>
    <div>

      <strong>Sort by:</strong>
      <label for="alphabetically">
        <input @change="$emit('sort-stock', picked)" type="radio" id="alphabetically" value="Alphabetically" v-model="picked"/>
        Alphabetically
      </label>
      <label for="price">
        <input @change="$emit('sort-stock', picked)" type="radio" id='price' value="Price" v-model="picked"/>
        Price
      </label>
      <br/>

      <label>
        <strong>Filter:</strong>
        <select @change="$emit('filter-stock', filter)" v-model="filter">
          <option disabled value="">Please select one</option>
          <option>Tech</option>
          <option>Sportswear</option>
          <option>Finance</option>
        </select>
      </label>

    </div>
</template>

<script>
export default {
  name:"SearchBar",
  data() {
    return {
      picked:'',
      filter:''
    }
  }
}
</script>