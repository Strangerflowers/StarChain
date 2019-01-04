<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer';
import Home from './page/Home/home.vue';
import Classify from './page/Classify/classify.vue';
import Cart from './page/Cart/cart.vue';
import User from './page/User/user.vue';

export default {
  name: 'App',
  components: {
    Home,
    Classify,
    Cart,
    User,
    Footer
  }
}
</script>

<style>
*{padding:0;margin:0}
#app {

  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /*margin-top: 60px;*/
}
</style>
