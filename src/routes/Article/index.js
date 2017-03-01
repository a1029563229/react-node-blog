export default () => ({
  path:'publish',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const Publish = require('./Publish').default;
      cb(null,Publish)
    })
  }
});
