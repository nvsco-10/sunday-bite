<template>
   <header>
    <div class="header container">
      <div class="nav-header">
        <div class="logo-container">
          <img src="../assets/logo.png" alt="the-sunday-bite"/>
        </div>
        <button @click="toggleMenu" class="toggle-btn">
          <i class="fa-solid fa-bars"></i>        
        </button>
      </div>
      <ul :class="[showMenu ? 'show' : '', 'nav-links']">
        <li><a class="nav-link" href="/">Home</a></li>
        <li><a class="nav-link" href="/menu">Menu</a></li>
        <li><a class="nav-link" href="/careers">Careers</a></li>
      </ul>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
  data() {
    return {
      showMenu: false
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    }
  }
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
  /* height: auto; */
  max-width: 1400px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.9rem;
}

.logo-container {
  height: 30px;
  width: 30px;
}

.toggle-btn {
  display: none;
  background-color: transparent;
  padding: 0;
  font-size: 1.5rem;
}

.nav-links {
  display: flex;
  gap: 4rem;
  height: auto;
  overflow: hidden;
  text-align: center;
  background: var(--bg-yellow);
}

li {
  padding: 0.5rem 1rem;
}

@media (max-width: 900px) {
  .header {
    width: 100vw;
    flex-direction: column;
    justify-content: center;
  }

  .nav-header {
    width: 95vw;
  }

  .toggle-btn {
    display: block;
  }

  .nav-links {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 1rem;
    height: 0;
    transition: all 0.3s linear;
    border-top: none;
  }

  .show {
    border-top: solid 1px var(--bg-dark);
    height: 15rem;
  }
}

</style>

