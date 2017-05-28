<template>
  <div class="home">
    <div class="header">
      <h1>{{ msg }}</h1>
    </div>
    <ul class="container algorithms">
        <li v-bind:class="{ 'active': $route.path.toString() === '/Caesar' }"><router-link to="/Caesar">Szyfr Cezara</router-link></li>
        <li v-bind:class="{ 'active': $route.path.toString() === '/Vigenere' }"><router-link to="/Vigenere">Szyfr Vigenere</router-link></li>
        <li v-bind:class="{ 'active': $route.path.toString() === '/AtBash' }"><router-link to="/AtBash">Szyfr AtBash</router-link></li>
    </ul>
  </div>    
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'Klasyczne algorytmy kryptograficzne'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}

.home .header{
  margin-top: 15vh;
}
</style>
