<template>
  <article class="positions-item">
    <div>
      <p class="title">{{ item.title }}</p>
      <p>{{ item.positionType }}</p>
      <p>Posted: <span>{{ item.datePosted }}</span></p>
    </div>
    <p class="location"><i class="fa-solid fa-location-dot"></i> {{ item.location }} <span class="location-address">({{ item.locationAddress }})</span></p>
  </article>  
</template>

<script>
export default {
  name: 'CareersPositionsItems',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.positions-item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1.5rem;
  background-color: rgb(241, 241, 241);
  transition: 0.3s ease-in-out;
}

.positions-item:hover {
  padding: 1.5rem;
  background-color: var(--bg-dark);
  color: #fff;
}

p {
  text-transform: capitalize;
}

.title {
  font-size: var(--text-small);
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
}

.location {
  margin-top: 1rem;
}

.location, .location-address {
  text-transform: uppercase;
}

i {
  font-size: 1.3rem;
  margin-right: 1rem;
}
</style>