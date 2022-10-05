import './current.css';
import React, {useState} from 'react';
export default function ConvertMoney() {
    let [moneyStart, setMoneyStart] = useState([0]);
    let [moneyEnd, setMoneyEnd] = useState()
    let [unit, setUnit] = useState("euro");
    let sumbitConvert = () => {
        let money;
         if (unit == "euro") {
            money = moneyStart * 25832.33;
            setMoneyEnd(money);
        } else if (unit == "dola") {
            money = moneyStart * 22982.50;
        }
        setMoneyEnd(money);
    }
    function currencyFormat(num,currency){
        if(moneyEnd === 0){
            return currency +' '+ 0;
        }
        else if(moneyEnd > 0){
        return currency + ' ' +num;
        }
    }
    return (
        <>
            <div className="convert" >
                <div className="convert__title" >
                    Money Convert
                </div>
                <div className='content'>
                    <label>I want to change:</label>
                    <input value={moneyStart} onChange={e => setMoneyStart(e.target.value)} type="number" min={0} />
                    <select value={unit} onChange={e => setUnit(e.target.value)} >
                        <option value='euro' >Euro</option>
                        <option value="dola" >Đô la Mỹ</option>
                    </select>
                    <label>To</label>
                    <select>
                        <option>Vnd</option>
                    </select>
                </div>
                    <div className='a'>
                <button onClick={sumbitConvert} className="button">Submit</button>
                <label className='result'> {currencyFormat(moneyEnd,'Vnd')}</label>
            </div>
            </div>
        </>
    )
}