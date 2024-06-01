import React from 'react'
import './card.css'
import PendingTile from './PendingTile'

export default function Pending() {
  return (
    <div className='card'>
        <div className="title">Pending Task  <span className="issue">5 Task</span> </div>
        <div className="content">
        <PendingTile/>
        </div>
        <button className='create-btn'>➕ Create Task</button>
    </div>
  )
}
