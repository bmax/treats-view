<template>
  <div class="container">
    <div class="hello" v-if="!user.authenticated">
    Email Address: <input v-model="email" placeholder="blabla@bla.com" type="text" />
    Password: <input v-model="password" placeholder="Password" type="password" />
    <button v-on:click="submit">Login</button>
    </div>
    <div class="goodbye" v-if="user.authenticated">
    <button v-on:click="logout">Logout</button>
    </div>
  </div>
</template>

<script>
import auth from '../api/auth'
export default {
  data () {
    return {
      email: '',
      password: '',
      user: auth.user,
    }
  },
  methods: {
    submit: function () {
      auth.login( this, this.email, this.password )
    },
    logout: function() {
      auth.logout( this );
      console.log(this.user.authenticated);
    }
  },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  color: #42b983;
}
.hello {
  float: right;
}
</style>
