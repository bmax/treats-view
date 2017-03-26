<template>
  <div class="container">
    Order: {{$route.params.id}}
    <div id="tabs">
      <ul class="nav-pills">
        <li role="presentation" v-on:click="cc = !cc; paypal=false">Credit Card</li>
        <li role="presentation" v-on:click="paypal = !paypal; cc = false">Paypal</li>
      </ul>
    </div>
    <Paypal v-if="paypal"></Paypal>
    <CreditCard v-if="cc"></CreditCard>
    </div>
</template>

<script>
import auth from '../api/auth'
import CreditCard from './PayOptions/CreditCard'
import Paypal from './PayOptions/Paypal'
export default {
  data() {
    return {
      user: auth.user,
      paypal: false,
      cc: false,
    }
  },
  components: {
    CreditCard,
    Paypal,
  },
  methods: {
    order: function ( id ) {
      auth.order( id, this );
    }
  }
}
</script>
<style>
#tabs {
  margin:0 auto;

}
.nav-pills {
  list-style: none;
  margin:0;
  padding-left:0;
}
.nav-pills > li {
  margin: 10px;
  color:white;
  padding:20px;
  border-radius: 10px;
  background: #A6BBC0;
  display: block;
  float:left;
}
</style>