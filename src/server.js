'use strict'

let startup = require('./cross-cutting/startup')
let twitter = require('./business-logic/twitter')

function main () {
  startup()
  twitter.makeATestTweet()
}

main()
