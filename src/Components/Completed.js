import React from 'react'
import './card.css'
import CompletedTile from './CompletedTile'

export default function Completed() {
  return (
    <div className='card'>
        <div className="title">Completed Task  <span className="issue">1 Task</span></div>
        <div className="content">
            <CompletedTile/>
        </div>
    </div>
  )
}
