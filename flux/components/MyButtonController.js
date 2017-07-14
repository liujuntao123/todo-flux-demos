var React = require('react')
var ListStore = require('../stores/ListStore')
var ButtonActions = require('../actions/ButtonActions')
var MyButton = require('./MyButton')

var MyButtonController = React.createClass({
  getInitialState () {
    return {
      items: ListStore.getAll()
    }
  },

  componentDidMount () {
    ListStore.addChangeListener(this._onChange)
  },

  componentWillUnmount () {
    ListStore.removeChangeListener(this._onChange)
  },

  _onChange () {
    this.setState({
      items: ListStore.getAll(),
      textMessage: ''
    })
  },

  createNewItem (event) {
    ButtonActions.addNewItem(this.state.textMessage)
  },

  removeItem (id) {
    ButtonActions.removeItem(id)
  },
  inputChange (e) {
    this.setState({
      textMessage: e.target.value
    })
  },

  render () {
    return <MyButton
      items={this.state.items}
      createItem={this.createNewItem}
      removeItem={this.removeItem}
      inputChange={this.inputChange}
      textMessage={this.state.textMessage}
    />
  }

})

module.exports = MyButtonController
