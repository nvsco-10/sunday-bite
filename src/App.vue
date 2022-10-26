<template>
  <TheHeader />
  <main>
    <router-view></router-view>
  </main>
  <TheFooter />
</template>

<script>
import TheHeader from './components/TheHeader'
import TheFooter from './components/TheFooter'

export default {
  name: 'App',
  components: {
    TheHeader,
    TheFooter
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Fuggles&family=Londrina+Solid&family=Poppins:wght@300;400&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg-yellow: #ffce07;
  --bg-green: #668924;
  --bg-dark: #1f242b;
  --bg-darkblue: rgb(30, 37, 54);

  --text-large: 1.5rem;
  --text-medium: 1.3rem;
  --text-small: 1rem;
  --text-xsmall: 0.8rem;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
}

h1, h2, h3, h4, h5 {
  text-align: center;
  font-family: 'Londrina Solid', cursive;
}

h2 {
  font-size: 3.5rem;
}

h3 {
  font-size: 2.8rem;
}

h4 {
  font-size: 2.1rem;
}

h5 {
  font-size: 1.3rem;
}

a {
  text-decoration: none;
  color: inherit;
  font-family: inherit;
}

li {
  list-style: none;
}

img {
  height: 100%;
  width: 100%;
  object-fit: cover;
}

section {
  padding: 5rem 0;
}

.container {
  margin: 0 auto;
  width: 80vw;
  max-width: 1200px;
  /* height: 100%; */
}

button {
  border: none;
  font-family: inherit;
  text-align: center;
  padding: 10px 20px;
  cursor: pointer;
}

.btn {
  border: none;
  font-family: inherit;
  text-align: center;
  display: inline-block;
  color: #fff;
  min-width: 75px;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 18px;
  text-decoration: none;
}

.btn:focus {
  outline: none;
}

.btn:active {
  transform: scale(0.98);
}

.btn-block {
  display: block;
  width: 100%;
}

@media (max-width: 600px) {
  h2 {
    font-size: 2.7rem;
  }

  h3 {
    font-size: 2.1rem;
  }

  h4 {
    font-size: 1.7rem;
  }
}
</style>
