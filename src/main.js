import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Login from './components/Login'
import Products from './components/Products'
import auth from './api/auth'
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/login', component: Login },
  { path: '/products', component: Products },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
export const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  render: h => h(App)
})

auth.checkAuth()