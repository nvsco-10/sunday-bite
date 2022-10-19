<template>
  <TheHero />
  <TheAbout />
  <TheGallery />
  <TheBanner />
</template>

<script>
import TheHero from '../components/TheHero'
import TheAbout from '../components/TheAbout'
import TheGallery from '../components/TheGallery'
import TheBanner from '../components/TheBanner'

export default {
// eslint-disable-next-line
  name: 'Home',
  components: {
    TheHero,
    TheAbout,
    TheGallery,
    TheBanner,
  }
}
</script>