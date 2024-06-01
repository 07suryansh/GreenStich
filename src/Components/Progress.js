import React from 'react'
import './card.css'
import ProgressTile from './ProgressTile'

export default function Progress() {
  return (
    <div className='card'>
        <div className="title">Progress Task <span className="issue">3 Task</span> </div>
        <div className="content">
            <ProgressTile/>
        </div>
    </div>
  )
}
