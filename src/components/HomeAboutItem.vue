<template>
  <div class="about-item">
    <div class="img-container">
      <img :src="item.img" :alt="item.label" />
    </div>
    <p>{{ item.label }}</p>
  </div>
</template>

<script>
export default {
  name: 'HomeAboutItem',
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

p {
  color: #fff;
  font-size: var(--text-xsmall);
  text-transform: uppercase;
}

.img-container {
  height: 70px;
  width: 70px;
  margin-bottom: 1rem;
}

@media (max-width: 600px) {
  .img-container {
    height: 50px;
    width: 50px;
    margin-bottom: 0.5rem;
  }
}
</style>