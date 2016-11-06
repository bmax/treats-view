<template>
  <div class="container">
    List Products
    {{formatted_products}}
    <br/>
    {{formatted_products[0].name}}
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
  computed: {
    formatted_products: function () {
      console.log( this.products );
      return this.products;
    }
  },
  methods: {
    loadProducts: function () {
      auth.loadProducts( this );
    }
  },
  mounted() {
    this.loadProducts();
  }
}
</script>