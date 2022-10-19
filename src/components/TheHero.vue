<template>
  <section>
    <div class="hero container">
      <div class="column">
        <div class="text-container">
          <h1>The<br>Sunday Bite</h1>
          <p>Delicious food for every mood.</p>
          <a class="btn" href="">ORDER NOW</a >
        </div>
      </div>
      <div class="column right">
        <div class="img-container">
          <img src="../assets/hero-image.png" alt="poke bowl" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHero'
}
</script>

<style scoped>
section {
  padding-top: 4rem;
  height: 100vh;
  background-color: var(--bg-yellow);
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.column {
  display: flex;
  align-items: center;
}

.column.right {
  justify-content: flex-end;
}

h1 {
  font-size: 6.5rem;
  line-height: 0.9;
  margin-bottom: 1rem;
}

p {
  font-size: var(--text-large);
  margin-bottom: 1rem;
}

.text-container {
  display: flex;
  flex-direction: column;
}

.text-container a {
  background-color: #bc1823;

}

.img-container {
  width: 500px;
  height: 500px;
}

img {
  filter: drop-shadow(0.5rem 1rem 0.25rem #bc182371);
  transition: 0.3s ease-in-out;
}

img:hover {
  transform: rotate(20deg);
}

@media (max-width: 900px) {
  .hero {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .column, .column.right {
    justify-content: center;
  }

  .btn {
    align-self: center;
  }

  h1 {
    font-size: 6rem;
    line-height: 0.9;
    margin-bottom: 1rem;
  }

  p {
    font-size: var(--text-large);
    margin-bottom: 1rem;
  }

  .img-container {
    width: 350px;
    height: 350px;
  }
}

@media (max-width: 600px) {
  h1 {
      font-size: 4rem;
      line-height: 0.9;
      margin-bottom: 1rem;
    }

  p {
    font-size: var(--text-medium);
    margin-bottom: 1rem;
  }

  .img-container {
    width: 250px;
    height: 250px;
  }
}

</style>