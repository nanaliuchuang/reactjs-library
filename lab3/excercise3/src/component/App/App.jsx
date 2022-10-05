import './App.css';
import Footer from '../Footer/footer';
import React, { useState } from 'react';
export default function App() {

  const [minVal, setMin] = useState(0);
  const [maxVal,setMax] = useState(10);
  const [randomNum,setRandowm] = useState(5);

  const handleRandomNum = () =>{
    setRandowm(Math.floor(Math.random() * (maxVal - minVal + 1) + minVal));
  };
  return (
    <div className="App">
      <div className='container'>
        <div className='randomNum'>
          <p>Random number: <span>{randomNum}</span></p>
        </div>
        <div className="value">
          <div>
            <p>Min:</p>
            <input type="number" value={minVal} onChange={e => setMin(+e.target.value)}/>
          </div>
          <div>
            <p>Max:</p>
            <input type="number" value={maxVal} onChange={e => setMax(+e.target.value)}/>
          </div>
        </div>
        <button onClick={handleRandomNum}>Random</button>
      </div>
      <Footer></Footer>
    </div>
  );
}
