<template>
  <HomeHero />
  <HomeAbout />
  <HomeGallery />
  <HomeBanner />
</template>

<script>
import HomeHero from '../components/HomeHero'
import HomeAbout from '../components/HomeAbout'
import HomeGallery from '../components/HomeGallery'
import HomeBanner from '../components/HomeBanner'

export default {
// eslint-disable-next-line
  name: 'Home',
  components: {
    HomeHero,
    HomeAbout,
    HomeGallery,
    HomeBanner,
  }
}
</script>