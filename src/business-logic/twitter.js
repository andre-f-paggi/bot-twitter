let Twitter = require('twitter')

function makeATestTweet () {
  // The credentials below are stored in the envinronments file (.env) and injected in runtime
  let client = new Twitter({
    consumer_key: process.env.CONSUMER_KEY,
    consumer_secret: process.env.CONSUMER_SECRET,
    access_token_key: process.env.ACCESS_TOKEN_KEY,
    access_token_secret: process.env.ACCESS_TOKEN_SECRET
  })

  client.post('statuses/update', { status: 'I am a tweet 2' }, function (error, tweet, response) {
    if (error) {
      console.log(tweet)
    }
  })
}

module.exports = {
  makeATestTweet
}
