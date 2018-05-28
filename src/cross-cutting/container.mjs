import awilix from 'awilix'

import main from '../main'
import startup from '../cross-cutting/startup'
import TwitterCredentials from '../domain/twitter-credentials'
import TwitterService from '../application/twitter-service'

const { createContainer, asClass, asFunction, asValue } = awilix

startup()

const container = createContainer()

container.register({
  twitterCredentials: asValue(new TwitterCredentials({
    consumerKey: process.env.CONSUMER_KEY,
    consumerSecret: process.env.CONSUMER_SECRET,
    accessTokenKey: process.env.ACCESS_TOKEN_KEY,
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET
  }))
})

container.register({
  main: asFunction(main)
})

container.register({
  twitterService: asClass(TwitterService)
})

export default container
