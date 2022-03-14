<template>
  <div id="app">
    <search-movie></search-movie>
  </div>
</template>

<script>
import SearchMovie from './components/SearchMovie.vue'

export default {
  name: 'App',
  components: {
    SearchMovie
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
