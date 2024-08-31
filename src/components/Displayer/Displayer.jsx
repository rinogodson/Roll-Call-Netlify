import React from 'react'
import './Displayer.css'
function Displayer(props) {
  return (
    <>
      <div className='displayer'>
        <div className='rNo'>{props.no}</div>
        <h1 className='names'>{props.name}</h1>
      </div>
    </>
  )
}

export default Displayer
