<template>
  <article class="item">
    <div class="img-container">
      <img :src="item.img" :alt="item.title" class="menu-img">
    </div>
    <div class="info">
      <div class="header">
        <p class="name">{{ item.title }}</p>
        <p class="price">$ {{ item.price }}</p>
      </div>
      <div class="description">{{ item.desc }}</div>
    </div>
  </article>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.item {
  display: grid;
  grid-template-columns: 1fr 2fr;
  column-gap: 1rem;
}

.img-container {
  height: 135px;
}

.info .header {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 0.25em;
  border-bottom: solid 1px rgb(192, 189, 189);
  border-style: none none dotted;
  text-transform: capitalize;
}

.price {
  margin-left: 1rem;
}

.description {
  font-size: var(--text-xsmall);
}

@media (max-width: 600px) {
  .img-container {
    height: 100px;
  }

  .name, .price {
    font-size: var(--text-xsmall);
  }
}
</style>