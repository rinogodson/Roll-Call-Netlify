import React from 'react'
import Displayer from './components/Displayer/Displayer'
import Cstatus from './components/CStatus/Cstatus'
import { useState } from 'react'
import './App.css'
import { PieChart } from '@mui/x-charts'

function App() {
  const students = [
    { no: 1, name: "ADWAITH B" },
    { no: 2, name: "AJIN THAMPI" },
    { no: 3, name: "ALLAN JOY ABREU" },
    { no: 4, name: "ANCIL S" },
    { no: 5, name: "ANTONYJEBY" },
    { no: 6, name: "ANZAL A" },
    { no: 7, name: "ATHUL KRISHNAN R" },
    { no: 8, name: "BIPIN JACKSON" },
    { no: 9, name: "JOSH JOJU VARKEY" },
    { no: 10, name: "JOSHUA J" },
    { no: 11, name: "MUHAMMAD ASHIK S" },
    { no: 12, name: "RINO GODSON" },
    { no: 13, name: "ROMI SEBA ROY" },
    { no: 14, name: "SABARINATH G" },
    { no: 15, name: "SANJU S" },
    { no: 16, name: "SARVESH VYAS M B" },
    { no: 17, name: "SHINE S" },
    { no: 18, name: "SREEHARI S" },
    { no: 19, name: "THARUN D J" },
    { no: 20, name: "AILEEN DONAL" },
    { no: 21, name: "AIMEE J TONY" },
    { no: 22, name: "AKSHADHA .A" },
    { no: 23, name: "ALPHONSA ALEX" },
    { no: 24, name: "ANUSHKA A J" },
    { no: 25, name: "REVATHI V KANNAN" },
    { no: 26, name: "AADHIL S" },
    { no: 27, name: "ABHINAND S" },
    { no: 28, name: "ABRAHAM BABU" },
    { no: 29, name: "ALDRIN S" },
    { no: 30, name: "ANANDHU KRISHNAN M" },
    { no: 31, name: "MUHAMMAD NASMAL N" },
    { no: 32, name: "MUHAMMAD RAIHAN M" },
    { no: 33, name: "NANDU T" },
    { no: 34, name: "NAVANEETH PRAKASH" },
    { no: 35, name: "NIVED M" },
    { no: 36, name: "SAIDALI S" },
    { no: 37, name: "VINAYAK V" },
    { no: 38, name: "VIPIN S" },
    { no: 39, name: "ADITHYA V M" },
    { no: 40, name: "AMEENA M S" },
    { no: 41, name: "JANA SAJEER" },
    { no: 42, name: "JIYA JOJI" },
    { no: 43, name: "THRIDY R" },
    { no: 44, name: "ABHILASH BINU" },
    { no: 45, name: "AFEEKH M" },
    { no: 46, name: "ALISTER ROBIN" },
    { no: 47, name: "AROMAL M.J" },
    { no: 48, name: "ASHLY H ANIL" },
    { no: 49, name: "ASHWATH JOHN" },
    { no: 50, name: "FANTINUS FRANK" },
    { no: 51, name: "JEFRIN S" },
    { no: 52, name: "JOSY JOHN" },
    { no: 53, name: "NAVANEETH KRISHNA" },
    { no: 54, name: "NISHAL ANTONY" },
    { no: 55, name: "NOEL J FELIX" },
    { no: 56, name: "RYAN JOHN ANTONY" },
    { no: 57, name: "VINAYAK J" },
    { no: 58, name: "AFREEN FATHIMA ANWAJ" },
    { no: 59, name: "ANUPAMA J" },
    { no: 60, name: "RIYA MARY PAUL" }
  ];

  const [pointer, setPointer] = useState(0);
  const [absentees, setAbsentees] = useState([]);
  const [presentees, setPresentees] = useState([]);
  const [cStatusVis, setCStatusVis] = useState(false);

  return (
    <div className='App'>
      <div className='container'>
        <button className='hBt' onClick={()=>{
         setCStatusVis(!cStatusVis);
        
      }}>{"<"}</button>


        <button className="pBt" onClick={()=>{
          setPresentees([...presentees, (students[pointer].no+". "+students[pointer].name)]);
          setPointer(pointer+1);
        }}>Present</button> 


        <Displayer name={students[pointer].name} no={students[pointer].no} />


        <button className="aBt" onClick={()=>{
          setAbsentees([...absentees, (students[pointer].no+". "+students[pointer].name)]);
          setPointer(pointer+1);
        }}>Absent</button>


        
      </div>
      {cStatusVis ? <Cstatus absentees={absentees} presentees={presentees} setCStatusVis={setCStatusVis}/> : <></>}
    </div>
  )
}

export default App
