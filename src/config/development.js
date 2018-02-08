export default {
  graphqlUri: 'localhost:3001/graphql',
  searchLimit: 10,
  viewTransactionAnimationIn: {
    easing: 'easeOutSine',
    translateY: [{ value: -10, duration: 0 }, 0],
    opacity: [0, 1],
    duration: 600
  },
  viewTransactionAnimationOut: {
    easing: 'easeOutSine',
    translateY: [{ value: 10, duration: 100 }],
    opacity: [1, 0],
    duration: 200
  },
  viewTransactionAnimationOutFX: {
    easing: 'easeOutSine',
    scale: [{ value: 0.92, duration: 400, delay: 0 }],
    translateY: [{ value: 1000, duration: 200, delay: 300 }],
    opacity: [{ value: 0.6, duration: 400, delay: 200 }]
    // delay: 2e3,
    // duration: 100,
  }
}
