<template>
  <div id="positions" class="positions container">
    <h4>Open Positions</h4>
    <div class="positions-items">
      <article class="positions-item">
        <div>
          <p class="title">Marketing Specialist</p>
          <p>Full-time</p>
          <p>Posted: <span>10/20/2022</span></p>
        </div>
        <p class="location"><i class="fa-solid fa-location-dot"></i> ON-SITE</p>
      </article>
      <article class="positions-item">
        <div>
          <p class="title">Marketing Specialist</p>
          <p>Full-time</p>
          <p>Posted: <span>10/20/2022</span></p>
        </div>
        <p class="location"><i class="fa-solid fa-location-dot"></i> ON-SITE</p>
      </article>
      <article class="positions-item">
        <div>
          <p class="title">Marketing Specialist</p>
          <p>Full-time</p>
          <p>Posted: <span>10/20/2022</span></p>
        </div>
        <p class="location"><i class="fa-solid fa-location-dot"></i> ON-SITE</p>
      </article>
    </div>
  </div>  
</template>

<script>
export default {
  name: 'CareersPositions'
}
</script>

<style scoped>
.positions-items {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 1rem;
  row-gap: 1rem;
}

h4 {
  margin-bottom: 2rem;
}

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