<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <SearchMovie msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import SearchMovie from '@/components/SearchMovie.vue'

export default {
  name: 'Home',
  components: {
    SearchMovie
  }
}
</script>
