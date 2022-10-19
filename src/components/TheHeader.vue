<template>
   <header>
    <div class="header container">
      <div class="logo-container">
        <img src="../assets/logo.png" alt="the-sunday-bite"/>
      </div>
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/menu">Menu</router-link></li>
        <li><router-link to="/careers">Careers</router-link></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader'
}
</script>

<style scoped>
header {
  width: 100vw;
  height: 4rem;
  background-color: var(--bg-yellow);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.header {
  height: 100%;
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.logo-container {
  height: 30px;
  width: 30px;
}

ul {
  display: flex;
  gap: 4rem;
}

li {
  list-style: none;
}

</style>