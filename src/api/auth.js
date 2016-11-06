
import {router} from '../main'

// URL and endpoint constants
const API_URL      = 'http://localhost:8000/api/'
const LOGIN_URL    = API_URL + 'auth'
const SIGNUP_URL   = API_URL + 'user/create'
const PRODUCTS_URL = API_URL + 'products'

export default {
  user: {
    authenticated: false,
    auth_token: null,
  },
  login( context, email, password, redirect = null ) {
    context.$http.post( LOGIN_URL, { email: email, password: password }, { headers: this.getAuthHeaders() } ).then(data => data.json()).then( (data) => {
      this.user.authenticated = true
      localStorage.setItem( 'auth', data.authorization_token )

      if ( redirect ) {
        router.push( redirect )
      }

    }, (response) => {
      // error callback
      context.error = response.data;
    }).catch(console.log.bind(console));
  },
  logout( context ) {
      this.user.authenticated = false;
      localStorage.removeItem( 'auth' )
  },
  checkAuth() {
    var auth = localStorage.getItem( 'auth' )
    this.user.authenticated = false

    if ( auth ) {
      this.user.auth_token = auth;
      this.user.authenticated = true
    }
    return this.user.authenticated
  },
  loadProducts( context ) {
    context.$http.get( PRODUCTS_URL, { headers: this.getAuthHeaders() } ).then(data => data.json()).then( (data) => {
      context.products = data;
    } ).catch(console.log.bind(console));
  },
  getAuthHeaders() {
    var auth_token = localStorage.getItem( 'auth' );
    if ( auth_token !== null ) {
      return { 'Authorization': 'Bearer ' + auth_token };
    }

  }
}