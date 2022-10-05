// Importing the required components
import Board from "../Board/board";  
import Info from "../Info/info";
import './App.css'  
import { useState } from 'react';
  
function App() {
  
    const [reset, setReset] = useState(false);
  
    const [winner, setWinner] = useState('');
  
    const resetBoard = () => {
        setReset(true);
    }
  
    return (
        <div className="App">
            <div className={`winner ${winner !== '' ? '' : 'shrink'}`}>
                <div className='winner-text'>{winner}</div>
                <button onClick={() => resetBoard()}>
                  Đặt lại
                </button>
            </div>
            <Board reset={reset} setReset={setReset} winner={winner} 
                setWinner={setWinner} />
            <Info />
        </div>
    );
}
  
export default App;