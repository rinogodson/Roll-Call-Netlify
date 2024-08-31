import React from 'react'
import './Cstatus.css'
function Cstatus(props) {
  return (
    <div className='cont'>
      <div className='absentees'>
        <h1 className='absent'>Absentees</h1>
        <ul className='list'>
          {props.absentees.map((absentee, key) => (
            <li key={key}>{absentee}</li>
          ))}
        </ul>
      </div>

      <div className='presentees'>
        <h1 className='present'>Presentees</h1>
        <ul className='list'>
          {props.presentees.map((presentee, key) => (
            <li key={key}>{presentee}</li>
          ))}
        </ul>
      </div>
      <button onClick={
        ()=>{
          props.setCStatusVis(false)
        }
      }>CLOSE</button>
    </div>
  )
}

export default Cstatus
