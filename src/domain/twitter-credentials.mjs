import structure from 'structure'

const TwitterCredentials = structure.attributes({
  consumerKey: String,
  consumerSecret: String,
  accessTokenKey: String,
  accessTokenSecret: String
})(class TwitterCredentials {})

export default TwitterCredentials
