<template>
  <section>
    <div class="banner container">
      <h2>Healthy, hearty meals await.<br>See you soon!</h2>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HomeBanner'
}
</script>

<style scoped>
section {
  background-image:  linear-gradient(to bottom, rgba(19, 24, 4, 0.415), rgba(35, 35, 30, 0.897)), url('../assets/pexels-ella-olsson-1640777.jpg');
  background-size: cover;
  background-position: center;
  height: 400px;
  padding: 30px 0;

  display: flex;
}

.banner {
  display: flex;
  align-items: flex-end;
}

h2 {
  color: #fff;
}
</style>