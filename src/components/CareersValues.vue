<template>
  <div class="values container">
    <h4>Our Values</h4>
    <div class="values-items">
      <div :key="item.id" v-for="item in valuesItems">
        <CareersValuesItem :item="item" />
      </div>
    </div>
  </div>
</template>

<script>
import CareersValuesItem from './CareersValuesItem'

export default {
  name: 'CareersValues',
  props: {
    valuesItems: {
      type: Array,
      required: true
    }
  },
  components: {
    CareersValuesItem
  }
}
</script>

<style scoped>
.values {
  padding: 2rem 0;
}

h4 {
  margin-bottom: 2rem;
}

.values-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;
}

@media (max-width: 1350px) {
  .values-items {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 700px) {
  .values-items {
    grid-template-columns: 1fr;
  }
}
</style>