<template>
  <article class="positions-item">
    <div>
      <p class="title">{{ item.position }}</p>
      <p>{{ item.type }}</p>
      <p>Posted: <span>{{ item.datePosted }}</span></p>
    </div>
    <p class="location"><i class="fa-solid fa-location-dot"></i> {{ item.location }}</p>
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

.title {
  font-size: var(--text-small);
  font-weight: bold;
  text-decoration: underline;
  text-transform: uppercase;
}

.location {
  margin-top: 1rem;
}

i {
  font-size: 1.3rem;
  margin-right: 1rem;
}
</style>