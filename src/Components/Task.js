import React from 'react'
import './task.css'

export default function Task() {

  return (
    <div className='task'>
        <form action="" method="post" className="task-form">
            <input type="text" name="" className='input-text' id="" placeholder='Title'/>
            <input type="text" name="" className='input-text' id="" placeholder='Description'/>
            <button type="submit" className='add-task'>➕ Add Task</button>
        </form>
    </div>
  )
}
