<template>
  <section>
    <div class="about container">
      <div class="column center">
        <span>
          Howdy!
        </span>
      </div>
      <div class="column">
        <p>
          We just moved into the neighborhood, but it's like we've been here forever!
        </p>
        <p>
          You've welcomed us like old friends, dropping by with ready smiles and eager appetites.
        </p>
        <p>
          That's why we vow to always serve up goodness.
        </p>
      </div>
    </div>
    <div class="about-items container">
      <div :key="item.id" v-for="item in aboutItems">
        <HomeAboutItem :item="item" />
      </div>
    </div>
  </section>
</template>

<script>
import HomeAboutItem from './HomeAboutItem'

export default {
  name: 'HomeAbout',
  components: {
    HomeAboutItem
  },
  data() {
    return {
      aboutItems: []
    }
  },
  created() {
    this.aboutItems = [
      {
        id: 1,
        label: "organic",
        img: "https://i.ibb.co/mBZyhzD/organic.png"
      },
      {
        id: 2,
        label: "slow-cooked",
        img: "https://i.ibb.co/znPJ3vC/slow.png"
      },
      {
        id: 3,
        label: "sustainable",
        img: "https://i.ibb.co/kKZWkrj/sustainable.png"
      },
       {
        id: 4,
        label: "nutritious",
        img: "https://i.ibb.co/DQbg6Wx/100.png"
      },
    ]
  }
}
</script>

<style scoped>
section {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: var(--bg-green);
}

.about {
  width: 80vw;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 2rem;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  gap: 2rem;
}

span, p {
  color: #fff;
}

span {
  font-family: 'Fuggles', cursive;
  font-size: 12rem;
  transform: rotate(-10deg);
}

p {
  font-size: var(--text-medium);
}

.about-items {
  width: 60%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  text-align: center;
  background-color:  #71962e;
  /* border: solid 1px #fff; */
  border-radius: 5px;
  padding: 20px;
  box-shadow: rgba(48, 44, 44, 0.35) 0px 5px 15px;
}


@media (max-width: 900px) {
  section {
    height: 100vh;
  }

  .about {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-bottom: 3rem;
  }

  span {
    font-size: 8rem;
  }

  .about-items {
    width: 75%;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
}

@media (max-width: 600px) {
  .about {
    grid-template-columns: 1fr;
    row-gap: 2rem;
    margin-bottom: 2rem;
  }

  span {
    font-size: 5rem;
  }

  p {
    font-size: var(--text-small);
  }

  .about-items {
    width: 75%;
    grid-template-columns: 1fr 1fr;
    row-gap: 2rem;
  }
}

</style>