<template>
  <section>
    <div class="gallery container">
      <div :key="item.id" v-for="item in galleryItems">
        <HomeGalleryItem :item="item" />
     </div>
    </div>
  </section>
</template>

<script>
import HomeGalleryItem from './HomeGalleryItem'

export default {
  name: 'HomeGallery',
  components: {
    HomeGalleryItem
  },
  data() {
    return {
      galleryItems: []
    }
  },
  created() {
    this.galleryItems = [
      {
        id: 1,
        label: "breakfast in a jar",
        img: "https://i.ibb.co/3dT878B/oats.jpg"
      },
      {
        id: 2,
        label: "hearty meals",
        img: "https://i.ibb.co/Qk3q5Nt/bowl.jpg"
      },
      {
        id: 3,
        label: "guilt-free desserts",
        img: "https://i.ibb.co/mCnpC5t/pancakes.jpg"
      },
    ]
  }
}
</script>

<style scoped>
section {
  min-height: 600px;
}

.gallery {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
}

@media (max-width: 900px) {
  .gallery {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
}

</style>