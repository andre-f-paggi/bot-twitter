import Twitter from 'twitter'

export default class TwitterService {
  constructor ({ twitterCredentials }) {
    // The credentials below are stored in the envinronments file (.env) and injected in runtime
    this.client = new Twitter({
      consumer_key: twitterCredentials.consumerKey,
      consumer_secret: twitterCredentials.consumerSecret,
      access_token_key: twitterCredentials.accessTokenKey,
      access_token_secret: twitterCredentials.accessTokenSecret
    })
  }

  async makeATestTweet () {
    return this.client.post('statuses/update', { status: 'I am a tweet 2' })
  }
}
