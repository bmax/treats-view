<template>
  <div class="container">
    List Products
    {{products}}
    <div>
  </div>
</template>

<script>
import auth from '../api/auth'
export default {
  data () {
    return {
      user: auth.user,
      products: []
    }
  },
  methods: {
    loadProducts: function () {
      var products = auth.loadProducts( this );
      console.log( products );
    }
  },
  mounted() {
    this.loadProducts();
  }
}
</script>