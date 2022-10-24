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
        <a href="#positions" class="btn">Open Positions</a>
      </div>
    </div>
    <CareersValues :valuesItems="valuesItems" />
    <div class="spacer"></div>
    <CareersPositions :positionsItems="positionsItems" />
  </section>
</template>

<script>
import CareersValues from '../components/CareersValues'
import CareersPositions from '../components/CareersPositions'
import { values } from '../utils/values'

export default {
// eslint-disable-next-line
  name: 'Careers',
  components: {
    CareersValues,
    CareersPositions
  },
  data() {
    return {
      valuesItems: [],
      positionsItems: []
    }
  },
  methods: {
    async fetchPositions() {
      const res = await fetch('/api/v1/careers/positions')
      const data = await res.json()
  
      return data
    }
  },
  async created() {
    this.valuesItems = values
    this.positionsItems = await this.fetchPositions()
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

h3 {
  text-align: center;
  margin-bottom: 1rem;
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

.spacer {
  height: 75px;
}

</style>