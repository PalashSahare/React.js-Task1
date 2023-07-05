import React from 'react'

function TodoList(props) {
  return (
    <li className="list-item">
      {props.item}
      <span className='icons'>
      <input type="checkbox"/>
      &nbsp;&nbsp;&nbsp;
      <i className="fa-solid fa-trash-can icon-delete"
      onClick={e=>{
        props.deleteItem(props.index)

      }}
      ></i>
      </span>
    </li>
  )
}

export default TodoList
