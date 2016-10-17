import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'
import App from './App'
import Login from './components/Login'
Vue.use(VueRouter);
Vue.use(VueResource);

const routes = [
  { path: '/login', component: Login },
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for routes: routes
})

/* eslint-disable no-new */
new Vue({
  router,
  el: "#app",
  render: h => h(App)
})

Vue.http.interceptors.push((request, next) => {

  // modify request
  var auth_token = localStorage.getItem( 'auth' );
  if ( auth_token !== null ) {
    request.headers.set( 'Authorization', 'Bearer ' + auth_token );
  }

  // continue to next interceptor
  next();
});