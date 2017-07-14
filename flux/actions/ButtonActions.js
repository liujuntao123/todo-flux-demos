var AppDispatcher = require('../dispatcher/AppDispatcher')

var ButtonActions = {

  addNewItem (text) {
    AppDispatcher.dispatch({
      actionType: 'ADD_NEW_ITEM',
      text
    })
  },
  removeItem (id) {
    AppDispatcher.dispatch({
      actionType: 'DELETE_ITEM',
      id
    })
  }

}

module.exports = ButtonActions
