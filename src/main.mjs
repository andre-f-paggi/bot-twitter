const main = ({twitterService}) => {
  return {
    main: () => {
      twitterService.makeATestTweet().then((a) => console.log('Tweeted', a), (e) => console.error('Error on tweeting', e))
    }
  }
}

export default main
