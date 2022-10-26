<template>
  <div class="gallery-item">
    <div class="img-container">
      <img :src="item.img" :alt="item.label" />
    </div>
    <h4>{{ item.label }}</h4>
  </div>
</template>

<script>
export default {
  name: 'HomeGalleryItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h4 {
  font-size: 1.2rem;
  margin-top: .5rem;
  text-align: center;
  text-transform: capitalize;
}

.img-container {
  height: 450px;
}

@media (max-width: 600px) {
  .img-container {
    height: 350px;
  }
}
</style>