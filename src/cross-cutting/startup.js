'use strict'

let dotEnv = require('dotenv')

let startup = function startup () {
  dotEnv.config({path: 'src/environments/environment.env'})
}

module.exports = startup
