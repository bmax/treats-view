var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
var secrets = require('./secrets')

module.exports = merge(prodEnv, secrets, {
  NODE_ENV: '"development"'
})
