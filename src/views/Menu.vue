<template>
  <section>
    <div class="menu container">
      <h3>Full Menu</h3>
      <div @click="handleClick" class="btn-container">
        <button id="all" :class="[activeBtn === 'all' ? 'active' : '','menu-btn']">All</button>
        <button id="breakfast" :class="[activeBtn === 'breakfast' ? 'active' : '','menu-btn']">Breakfast</button>
        <button id="entrees" :class="[activeBtn === 'entrees' ? 'active' : '','menu-btn']">Entrees</button>
        <button id="dessert" :class="[activeBtn === 'dessert' ? 'active' : '','menu-btn']">Dessert</button>
      </div>
      <div v-if="filteredMenuItems.length > 0" class="menu-items">
        <div :key="item.id" v-for="item in filteredMenuItems">
          <MenuItem :item="item" />
        </div>
      </div>
      <div v-else class="spinner">
        <BaseSpinner />
      </div>
    </div>
  </section>
</template>

<script>
import MenuItem from '../components/MenuItem'
import BaseSpinner from '../components/BaseSpinner'

export default {
// eslint-disable-next-line
  name: 'Menu',
  components: {
    MenuItem,
    BaseSpinner
  },
  data() {
    return {
      activeBtn: 'all',
      menuItems: [],
      filteredMenuItems: []
    }
  },
  methods: {
    handleClick(e) {
      e.preventDefault()
      if(e.target.nodeName === 'BUTTON') {
        this.activeBtn = e.target.id

        e.target.id !== 'all'
          ? this.filteredMenuItems = this.menuItems.filter((item) =>
              item.category === e.target.id
            )
          : this.filteredMenuItems = [...this.menuItems]
      }
      return
    },
    async fetchMenu() {
      const res = await fetch('https://the-sunday-bite-api.herokuapp.com/api/v1/menu')
      const data = await res.json()

      return data
    },
  },

  async created() {
    this.menuItems = await this.fetchMenu()
    this.filteredMenuItems = this.menuItems
  }
}
</script>

<style scoped>
section {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  background-color: var(--bg-darkblue);
  color: #fff;
}

.menu {
  display: flex;
  flex-direction: column;
  align-items: center;
}

h3 {
  text-align: center;
}

.btn-container {
  margin: 1rem 0 3rem;
  width: 100%;
  max-width: 600px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
}

.menu-btn {
  color: #fff;
  background-color: transparent;
  border-bottom: none;
  transition-delay: 0.2s;
}

.active {
  border-bottom: solid 2px #fff;
}

.menu-items {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2rem;
  row-gap: 2rem;
}

@media (max-width: 900px) {
  .menu-items {
    grid-template-columns: 1fr;
  }
}
</style>