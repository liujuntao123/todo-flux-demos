var EventEmitter = require('events').EventEmitter
var assign = require('object-assign')

var ListStore = assign({}, EventEmitter.prototype, {
  items: [],

  getAll () {
    return this.items
  },

  addNewItemHandler (text) {
    this.items.push({ id: this.items.length, text })
  },
  deleteItemHandler (id) {
    let index = 0
    for (let i in this.items) {
      if (this.items[i].id == id) index = i
    }
    this.items.splice(index, 1)
  },

  emitChange () {
    this.emit('change')
  },

  addChangeListener (callback) {
    this.on('change', callback)
  },

  removeChangeListener (callback) {
    this.removeListener('change', callback)
  }
})

module.exports = ListStore
