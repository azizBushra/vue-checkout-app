<template>
  <div id="app" class="main">
    <checkout />
  </div>
</template>

<script>
import Checkout from './components/Checkout.vue'

export default {
  name: 'app',
  components: {
    Checkout
  }
  
}
</script>

<style>
#app {
  width: 800px;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background: url('./assets/pet-paw.jpg'); 
  color: #2c3e50;
  margin: 1rem auto 0 auto;
  padding: 3rem;
}
</style>
