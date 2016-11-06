<template>
  <div class="container">
    <h3>List Products</h3>
    <div v-if="formatted_products">
      <div v-for="product in formatted_products">{{product.name}} - {{product.description}}<br/>{{product.sizes}}</div>
    </div>
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