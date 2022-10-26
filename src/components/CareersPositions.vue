<template>
  <div id="positions" class="positions container">
    <h4>Open Positions</h4>
    <div v-if="positionsItems.length > 0" class="positions-items">
      <div :key="item.id" v-for="item in positionsItems">
        <CareersPositionsItems :item="item" />
      </div>
    </div>
    <div v-else class="no-positions">
      Sorry, no open positions available..
    </div>
  </div>  
</template>

<script>
import CareersPositionsItems from './CareersPositionsItem'

export default {
  name: 'CareersPositions',
  components: {
    CareersPositionsItems
  },
  props: {
    positionsItems: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.positions-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
}

h4 {
  margin-bottom: 2rem;
}

.no-positions {
  text-align: center;
}

@media (max-width: 900px) {
  .positions-items {
    grid-template-columns: 1fr 1fr;
  }  
}

@media (max-width: 600px) {
  .positions-items {
    grid-template-columns: 1fr;
  }  
}
</style>