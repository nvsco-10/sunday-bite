<template>
  <section>
    <div class="banner">
      <div class="container">
        <h3>Join Our Family</h3>
        <p>
          We look at the big picture.
        </p> 
        <p>
          From great benefits to a supportive culture to avenues for learning and growth, we aim to provide you with a career that betters your life.
        </p>
        <router-link to="" class="btn">Open Positions</router-link>
      </div>
    </div>
    <div class="values container">
      <h4>Our Values</h4>
      <div class="values-items">
        <div :key="item.id" v-for="item in valuesItems">
          <CareersValuesItem :item="item" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import CareersValuesItem from '../components/CareersValuesItem'
import { values } from '../utils/values'

export default {
// eslint-disable-next-line
  name: 'Careers',
  components: {
    CareersValuesItem
  },
  data() {
    return {
      valuesItems: []
    }
  },
  created() {
    this.valuesItems = values
  }
}
</script>

<style scoped>
section {
  padding-top: 4rem;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

h3, h4 {
  text-align: center;
}

h3 {
  margin-bottom: 1rem;
}

h4 {
  margin-bottom: 2rem;
}

.banner {
  width: 100%;
  height: 400px;
  background-image: linear-gradient(to bottom, rgba(19, 24, 4, 0.415), rgba(35, 35, 30, 0.797)),url('https://images.pexels.com/photos/3801426/pexels-photo-3801426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1');
  color: #fff;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.banner .container {
  max-width: 800px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.banner .btn {
  margin: 1rem 0;
  border: solid 1px #fff;
  width: 250px;
}

.banner .btn:hover {
  background-color: rgba(255, 255, 255, 0.156);
}

.banner p {
  text-align: center;
  font-size: var(--text-small);
  margin-bottom: 1rem;
}

.values {
  padding: 2rem 0;
}

.values-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  row-gap: 2.5rem;
  column-gap: 2rem;
}

@media (max-width: 900px) {
  .values-items {
    grid-template-columns: 1fr 1fr;
    row-gap: 2.5rem;
  }
}

@media (max-width: 600px) {
  .values-items {
    grid-template-columns: 1fr;
    row-gap: 2.5rem;
  }
}


</style>