<template>
  <div class="gallery-item">
    <div class="img-container">
      <img :src="item.img" :alt="item.label" />
    </div>
    <h3>{{ item.label }}</h3>
  </div>
</template>

<script>
export default {
  name: 'GalleryItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
h3 {
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