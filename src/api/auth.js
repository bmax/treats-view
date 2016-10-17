
import {router} from '../main'

// URL and endpoint constants
const API_URL    = 'http://localhost:8000/api/'
const LOGIN_URL  = API_URL + 'auth'
const SIGNUP_URL = API_URL + 'user/create'

export default {
  user: {
    authenticated: false,
    info: {},
  },
  login( context, email, password ) {
    context.$http.post( LOGIN_URL, { email: email, password: password }).then(data => data.json()).then((data) => {
      this.user.authenticated = true
      this.user.info          = data
      localStorage.setItem( 'auth', data.authorization_token )
    })
  },
  logout( context ) {
      this.user.authenticated = false;
      localStorage.removeItem( 'auth' )
  }
}