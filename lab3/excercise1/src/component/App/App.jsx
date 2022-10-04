import './App.css';
import {useState,useEffect} from 'react';
import { NumericFormat } from 'react-number-format';

function App() {
  const [preState, setPreState] = useState("");
  const [curState, setCurState] = useState("");
  const [input, setInput] = useState("0");
  const [operator, setOperator] = useState(null);
  const [total, setTotal] = useState(false);

  const inputNum = (e) => {
    if (curState.includes(".") && e.target.innerText === ".") return;

    if (total) {
      setPreState("");
    }

    curState
      ? setCurState((pre) => pre + e.target.innerText)
      : setCurState(e.target.innerText);
    setTotal(false);
  };

  useEffect(() => {
    setInput(curState);
  }, [curState]);

  useEffect(() => {
    setInput("0");
  }, []);
  const operatorType = (e) => {
    setTotal(false);
    setOperator(e.target.innerText);
    if (curState === "") return;
    if (preState !== "") {
      equals();
    } else {
      setPreState(curState);
      setCurState("");
    }
  };

  const equals = (e) => {
    if (e?.target.innerText === "=") {
      setTotal(true);
    }
    let cal;
    switch (operator) {
      case "/":
        cal = String(parseFloat(preState) / parseFloat(curState));
        break;

      case "+":
        cal = String(parseFloat(preState) + parseFloat(curState));
        break;
      case "X":
        cal = String(parseFloat(preState) * parseFloat(curState));
        break;
      case "-":
        cal = String(parseFloat(preState) - parseFloat(curState));
        break;
      default:
        return;
    }
    setInput("");
    setPreState(cal);
    setCurState("");
  };


  const percent = () => {
    preState
      ? setCurState(String((parseFloat(curState) / 100) * preState))
      : setCurState(String(parseFloat(curState) / 100));
  };

  const reset = () => {
    setPreState("");
    setCurState("");
    setInput("0");
  };
  return (
    <div className='container'>
      <div className='wrapper'>
        <div className='screen'>
          {input !== "" || input === "0" ? (
            <NumericFormat
              value={input}
              displayType={"text"}
              thousandSeparator={true}
            />
          ) : (
            <NumericFormat
              value={preState}
              displayType={"text"}
              thousandSeparator={true}
            />
          )}
        </div>
        <span className='btn light-gray' onClick={reset}>
          <i>C</i>
        </span>
        <span className='btn light-gray' onClick={percent}>
          <i>%</i>
        </span>
        <span className='btn orange' onClick={operatorType}>
        <i>/</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>7</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>8</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>9</i>
        </span>
        <span className='btn orange' onClick={operatorType}>
          <i>X</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>4</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>5</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>6</i>
        </span>
        <span className='btn orange' onClick={operatorType}>
          <i>+</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>1</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>2</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>3</i>
        </span>
        <span className='btn orange plus' onClick={operatorType}>
          <i>-</i>
        </span>
        <span className='btn zero' onClick={inputNum}>
          <i>0</i>
        </span>
        <span className='btn' onClick={inputNum}>
          <i>.</i>
        </span>
        <span className='btn' onClick={equals}>
          <i>=</i>
        </span>
      </div>
    </div>
  );
}

export default App;
