<template>
  <div id="app">
    <ul v-if="$route.path !== '/'" class="container algorithms">
      <li v-bind:class="{ 'active': $route.path.toString() === '/Caesar' }"><router-link to="/Caesar">Szyfr Cezara</router-link></li>
      <li v-bind:class="{ 'active': $route.path.toString() === '/Vigenere' }"><router-link to="/Vigenere">Szyfr Vigenere</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
html{ overflow-x: hidden !important; }
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #22264b;
  margin-top: 60px;
  font-family: 'Open Sans', sans-serif;
}
h1, h2, h3, h4, h5, h6{
  font-family: 'Raleway', sans-serif !important;
} 

#app a{
  color: #de4f4f;
  height: 62px;
}

.algorithms li {
  height: 100px;
  width: 300px;
  line-height: 100px;
  border: 1px solid #de4f4f;  
  transition: .6s all ease; 
}
.algorithms li:hover, .algorithms li.active{
  background-color: #de4f4f;
}
.algorithms li:hover a, .algorithms li.active a{
  color: white !important;
}
.algorithms li a{
  color: #de4f4f;
  text-decoration: none;
  font-family: 'Raleway', sans-serif;
  font-size: 28px;
  font-weight: 300;
}

.header{
  background-color: #222736;
  color: white;
  margin: 3vh 0;
  width: 100vw;
  padding: 3vh 0;
}

.nav{ margin-top: 15px; }

.card{
  padding: 15px;
  box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23);
  position: relative;
  background-color: white;
  z-index:10;
  color: #22264b;
  margin-top: -1px;
  margin-bottom: 10vh;
}

.card h2{ margin-left: 30px; margin-bottom: 30px; }
.card p{ text-align: left; font-size: 18px; }
.card img{ margin: 15px 0; }
.nav > li.active > a{ box-shadow: 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23); z-index: 5; position: relative; }
</style>
