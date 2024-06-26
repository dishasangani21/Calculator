import { useEffect, useState } from "react";
import "./App.css";
import "./assets/calculator.css";

function App() {
  const [calc, setCalc] = useState([]);
  const [sub, setSub] = useState(false);

  const handleBtn = (expr) => {
    setCalc((prev) => [...prev, expr]);
  };

  const handleDel = () => {
    let newCalc = [];
    for (let i = 0; i < calc.length - 1; i++) {
      newCalc.push(calc[i]);
    }
    setCalc(newCalc);
  };
  const handleSubmit = () => {
    let result = eval(calc.join(""));
    if (String(result).includes(".")) {
      setCalc([result.toFixed(1)]);
    } else if (String(result).length > 13) {
      console.log(result)
      setCalc([String(result).substring(0, 12)]);
    } else {
      setCalc([eval(result)]);
    }
  };

  return (
    <div className="calculatorPage">
      <h1>CALCULATOR</h1>
      <div className="calculator">
        <div className="display">{calc.length > 0 ? calc : 0}</div>
        <div className="btnRow bigBtn">
          <button onClick={() => setCalc([])}>C</button>
          <button onClick={handleDel}>&#8592;</button>
          <button
            onClick={() => {
              handleBtn("/");
            }}
          >
            &#247;
          </button>
        </div>
        <div className="btnRow">
          <button
            onClick={() => {
              handleBtn("7");
            }}
          >
            7
          </button>
          <button
            onClick={() => {
              handleBtn("8");
            }}
          >
            8
          </button>
          <button
            onClick={() => {
              handleBtn("9");
            }}
          >
            9
          </button>
          <button
            onClick={() => {
              handleBtn("*");
            }}
          >
            x
          </button>
        </div>
        <div className="btnRow">
          <button
            onClick={() => {
              handleBtn("4");
            }}
          >
            4
          </button>
          <button
            onClick={() => {
              handleBtn("5");
            }}
          >
            5
          </button>
          <button
            onClick={() => {
              handleBtn("6");
            }}
          >
            6
          </button>
          <button
            onClick={() => {
              handleBtn("-");
            }}
          >
            -
          </button>
        </div>
        <div className="btnRow">
          <button
            onClick={() => {
              handleBtn("1");
            }}
          >
            1
          </button>
          <button
            onClick={() => {
              handleBtn("2");
            }}
          >
            2
          </button>
          <button
            onClick={() => {
              handleBtn("3");
            }}
          >
            3
          </button>
          <button
            onClick={() => {
              handleBtn("+");
            }}
          >
            +
          </button>
        </div>
        <div className="btnRow bigBtn">
          <button
            onClick={() => {
              handleBtn("0");
            }}
          >
            0
          </button>
          <button onClick={handleSubmit}>=</button>
        </div>
      </div>
    </div>
  );
}

export default App;
