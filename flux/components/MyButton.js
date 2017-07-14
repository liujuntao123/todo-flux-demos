var React = require('react')

var MyButton = (props) => {
  var items = props.items

  return <div>
    <h2>TODO List--flux</h2>
    {
      items.map((item, i) => {
        return <div key={i} >
          <span>{item.text}</span>&nbsp;
          <button onClick={props.removeItem.bind(null, item.id)} >删除</button>
        </div>
      })
    }
    <div>
      <input onChange={props.inputChange} value={props.textMessage} />
      <button onClick={props.createItem}>添加</button>
    </div>

  </div>
}
module.exports = MyButton
