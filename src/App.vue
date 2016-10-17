<template>
  <div id="app">
    <img class="logo" src="./assets/logo.png">
    <ul class="nav navbar-nav">
      <li><router-link to="/login">Login</router-link></li>
      <li><router-link to="/products">Products</router-link></li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  height: 100%;
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

.logo {
  width: 100px;
  height: 100px;
  text-align: left;
}
</style>
