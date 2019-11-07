<template>
  <div id="app">
    <Portfolio msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Portfolio from './components/Portfolio.vue'

export default {
  name: 'app',
  components: {
    Portfolio
  }
}
</script>

<style>
@font-face {
    font-family: 'Founders Grotesk';
    font-style: normal;
    font-weight: 400;
    src: local('Founders Grotesk'),
        url('assets/fonts/FoundersGroteskWeb-Regular.eot?#iefix') format('embedded-opentype'), 
        url('assets/fonts/FoundersGroteskWeb-Regular.woff') format('woff');
}
@font-face {
    font-family: 'Founders Grotesk';
    font-style: normal;
    font-weight: 300;
    src: url('assets/fonts/FoundersGroteskWeb-Light.eot?#iefix') format('embedded-opentype'), 
         url('assets/fonts/FoundersGroteskWeb-Light.woff') format('woff');
}
body {
  background: #fff;
}
body, p, h1, h2, h3, h4 {
  font-family: 'Founders Grotesk';
  font-size: 42px;
  font-weight: 300;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: black;
}
</style>
