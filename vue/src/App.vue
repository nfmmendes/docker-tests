<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <PageBody msg="Welcome to Your Vue.js App"/>
</template>

<script>
import PageBody from './components/PageBody.vue'

export default {
  name: 'App',
  components: {
    PageBody
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
