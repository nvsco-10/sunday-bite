<template>
  <div class="about-item">
    <div class="img-container">
      <img :src="item.img" :alt="item.label" />
    </div>
    <h3>{{ item.label }}</h3>
  </div>
</template>

<script>
export default {
  name: 'AboutItem',
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.about-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.about-item h3 {
  color: #fff;
  font-size: var(--text-medium);
  letter-spacing: 0.2rem;
}

.img-container {
  height: 70px;
  width: 70px;
  margin-bottom: 1rem;
}

@media (max-width: 600px) {
  .about-item h3 {
    font-size: 0.9rem;
  }

  .img-container {
    height: 50px;
    width: 50px;
    margin-bottom: 0.5rem;
  }
}
</style>