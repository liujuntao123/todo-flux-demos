var Dispatcher = require('flux').Dispatcher
var AppDispatcher = new Dispatcher()
var ListStore = require('../stores/ListStore')

AppDispatcher.register(function (action) {
  switch (action.actionType) {
    case 'ADD_NEW_ITEM':
      ListStore.addNewItemHandler(action.text)
      ListStore.emitChange()
      break
    case 'DELETE_ITEM':
      ListStore.deleteItemHandler(action.id)
      ListStore.emitChange()
      break
    default:
    // no op
  }
})

module.exports = AppDispatcher
