<template>
  <footer>
    <div class="footer container">
        <div class="contact">
          <div class="contact-info">
            <i class="fa-solid fa-phone"></i>
            <p>903.222.3182</p>
          </div>
          <div class="contact-info">
            <i class="fa-solid fa-envelope"></i>
            <p>hey@restaurant.com</p>
          </div>
          <div class="contact-info">
            <i class="fa-solid fa-location-dot"></i>
            <p>743 Freedom Lane<br>
              Modesto, California<br>
              USA 12345</p>
          </div>
        </div>
        <div class="copyright">
          <div class="logo-container">
              <img src="../assets/logo-light.png" alt="the-sunday-bite" />
          </div>
          <span>website by <a href="https://github.com/nvsco-10">nvsco-10</a></span>
        </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter'
}
</script>

<style scoped>
footer {
  padding: 4rem 0;
  background-color: var(--bg-dark);
  color: #fff;
}

.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4rem;
}

.contact {
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
}

.contact-info {
  text-align: center;
}

i {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
}

.copyright {
  display: flex;
  align-items: center;
  flex-direction: column;
  font-size: 0.7rem;
}

.logo-container {
  height: 30px;
  width: 30px;
  margin-bottom: 1rem;
}

@media (max-width: 600px) {
  .contact {
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }
}

</style>