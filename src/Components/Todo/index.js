import React from 'react'
import './style.css'

const Todo = () => {
  return (
    <div className='todo'>
        <input type="text" className='todo-input' placeholder='Download list' />
        <button className='todo-button'>Save List</button>
    </div>
  )
}

export default Todo