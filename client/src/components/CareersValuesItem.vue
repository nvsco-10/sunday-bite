<template>
  <article class="values-item">
    <div class="img-container">
      <img :src="item.img" :alt="item.title" />
    </div>
    <div class="text-container">
      <h5>{{ item.title }}</h5>
      <p>
        {{ item.desc }}
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: 'CareersValuesItem',
  props: {
    item: {
      type: Object,
      required: true,
    }
  }
}
</script>

<style scoped>
.values-item {
  max-width: 400px;
  height: 400px;
  margin: 0 auto;
  padding: 2rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}

.img-container {
  height: 150px;
  margin-bottom: 1rem;
}

.text-container {
  width: 80%;
  text-align: center;
  font-size: var(--text-small);
}

h5 {
  color: rgb(10, 105, 10);
  text-transform: capitalize;
  margin-bottom: 1rem;
}

p {
  font-weight: 300;
}

@media (max-width: 900px) {
  .values-item {
    max-width: 300px;
    height: 375px;
    padding: 1rem;
  }

  .img-container {
    height: 110px;
  }
}

@media (max-width: 700px) {
  .values-item {
    width: 100%;
    max-width: 350px;
    margin: 0 auto;
    height: 375px;
  }

}


</style>