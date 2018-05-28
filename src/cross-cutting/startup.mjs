'use strict'

import dotEnv from 'dotenv'

let startup = function startup () {
  dotEnv.config({path: 'src/environments/environment.env'})
}

export default startup
