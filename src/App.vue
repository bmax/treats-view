<template>
  <div id="app">
    <div class='header'>
      <img class="logo" src="./assets/logo.png"><div class='logo_text'>ue Treats</div>
      <ul class="nav navbar-nav">
        <li v-if="!user.authenticated"><router-link to="/login">Login</router-link></li>
        <li v-if="user.authenticated"><router-link to="/logout">Logout</router-link></li>
        <li><router-link to="/products">Products</router-link></li>
      </ul>
    </div>
    <div id="container">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
import auth from './api/auth'
export default {
  data () {
    return {
      user: auth.user
    }
  }
}
</script>
<style>
html {
  height: 100%;
}

body {
  height: 100%;
  margin:0;
  padding:0;
}

#app {
  color: #2c3e50;
  font-family: Source Sans Pro, Helvetica, sans-serif;
  text-align: left;
}

#app a {
  color: #42b983;
  text-decoration: none;
}
#container {
  padding:25px;
}
.logo {
  float:left;
  width: 100px;
  height: 100px;
  text-align: left;
}
.header {
  background-color: orange;
  padding:25px;
}
.logo_text {
  font-size: 40px;
}
</style>
