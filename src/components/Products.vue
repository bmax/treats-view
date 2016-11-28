<template>
  <div class="container">
    <h3>List Products</h3>
    <div v-if="error">{{error}}</div>
    <div v-if="formatted_products" id="products">
      <div class="product" v-for="product in formatted_products">
        <div class='name'>{{product.name}}</div>
        <div class='stock'>{{product.quantity_in_stock}} left</div>
        <div class='price'>$20</div>
        <div class='description'>{{product.description}}</div>
        <div class='sizes'>{{product.sizes}}</div>
        <router-link :to="{ path: '/order/' + product.id }">Order</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import auth from '../api/auth'
export default {
  data () {
    return {
      user: auth.user,
      products: [],
      error: "",
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

<style scoped>
#products {
  margin:0;
  padding:0;
}
.product {
  padding: 12px;
  border: 2px #000 solid;
  width: 30%;
  display:inline-block;
  margin-right:1%;
}
.product .name {
  font-size: 20px;
  width: 65%;
  border: 1px #000 solid;
  display: inline-block;
  padding: 5px;
  font-weight: bold;
}
.product .price {
  margin-right: 5px;
}
.product .stock, .product .price {
  font-size: 15px;
  float: right;
  border: 1px dotted #000;
  padding: 5px;
}
.product .description {
  margin: 10px;
  margin-top:5px;
  padding: 5px;
  font-size: 10px;
}
</style>
