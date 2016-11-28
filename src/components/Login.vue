<template>
  <div class="container">
    <div class="error">
      <div v-if="errors">
        <div v-for="help in errors">{{help.type}} - {{help.message}}</div>
      </div>
    </div>
    <div class="hello" v-if="!user.authenticated">
    Email Address: <input v-model="email" placeholder="blabla@bla.com" type="text" />
    Password: <input v-model="password" placeholder="Password" type="password" />
    <button v-on:click="submit">Login</button>
    </div>
    <div class="goodbye" v-if="user.authenticated">
      <router-link to="/logout">Logout</router-link>
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
      error: {},
    }
  },
  computed: {
    errors: function () {
        let errors = [];
        let key;
        if (this.error.errors) {
          for (key in this.error.errors) {
            var error_object     = {};
            error_object.type    = key;
            error_object.message = this.error.errors[key][0];
            errors.push(error_object);
         }
       }
        if (this.error.error && !this.error.errors) {
          var error_object     = {};
          error_object.type    = "Incorrect";
          error_object.message = this.error.error;
          errors.push(error_object);
       }
        return errors
    }
  },
  methods: {
    submit: function () {
      auth.login( this, this.email, this.password, '/' )
    }
  },

}
</script>

<style scoped>
h1 {
  color: #42b983;
}
.hello {
  float: right;
}
</style>
