<template>

<!--
    I think what needs to happen next is the binding of whatever the user searches for 
    to the database pulling the data. 
---->
    <div id="search-movie">
        <h1>{{title}}</h1>
        <input v-model="text" placeholder="Search for a Film...">
        <button></button>
    </div>
</template>

<script>
export default {
    name: 'search-movie',
    data() {
        return {
            title: 'The Database Movie Thing',
        }
    }
   
}
</script>

<style>

#search-movie {
  font-family: 'new times roman', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
