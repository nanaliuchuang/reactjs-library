import React, { useState, useRef, useEffect } from 'react'
const Button = () => {
    const Ref = useRef(null);

    const [timer, setTimer] = useState('05:00');

    
    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        return {
            total, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, minutes, seconds } 
                    = getTimeRemaining(e);
        if (total >= 0) {
 
            setTimer(
                (minutes > 9 ? minutes : '0' + minutes)+'m' + ':'
                + (seconds > 9 ? seconds : '0' + seconds)+'s'
            )
        }
    }

    
    const clearTimer = (e) => {
 
        setTimer('05m:00s');

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }
  
    const getDeadTime = () => {

        let deadline = new Date();

        deadline.setSeconds(deadline.getSeconds() + 1);
        return deadline;
    }

    useEffect(() => {
        clearTimer(setTimer());
    }, []);

    const onClickReset = () => {
        clearTimer(setTimer());
    }
  
    const onclickStart =()=>{
        clearTimer(getDeadTime());

    }
    return (
        <div className="Button">
            <h2 className='num' >{timer}</h2>
            <span className='line one'></span>
             <span className='line 2'></span>
             <button onClick={onclickStart}>Start</button>
            <button onClick={onClickReset} >Reset</button>
        </div>
    )
}
export default Button;