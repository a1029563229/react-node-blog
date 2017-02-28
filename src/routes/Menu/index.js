export default () => ({
  path: 'menu',
  getComponent (nextState, cb) {
    require.ensure([], (require) => {
      const MenuView = require('./components/MenuView').default
      cb(null, MenuView)
    })
  }
})
