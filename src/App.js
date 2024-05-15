import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState("");

  const handleButtonClick = (value) => {
    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const equals = () => {
    try {
      const result = eval(display);
      if (!isFinite(result)) {
        throw new Error("Invalid expression");
      }
      setDisplay(String(result));
    } catch (error) {
      setDisplay("Error");
    }
  };

  return (
    <div className="App">
      <div className="container3">
        <h1>Basic</h1>
        <h1>Calculator</h1>
      </div>
      <div className="container4">
        <h2>Name: Trent Archie Drich J. Aviola</h2>
        <br />
        <h2>Year & Section: 2nd Year IT2R3</h2>
        <br />
        <h2>Subject: Web Systems and Technologies</h2>
      </div>
      <div className="container">
        <div className="container2">
          <div className="calculator">
            <form>
              <div className="displaynum">
                <input type="text" name="display" id="display" value={display} readOnly />
              </div>
              <div>
                <input type="button" value="AC" onClick={clearDisplay} className="operator-btn" />
                <input type="button" value="DE" onClick={deleteLast} className="operator-btn" />
                <input type="button" value="." onClick={() => handleButtonClick('.')} />
                <input type="button" value="/" onClick={() => handleButtonClick('/')} />
              </div>
              <div>
                <input type="button" value="7" onClick={() => handleButtonClick('7')} />
                <input type="button" value="8" onClick={() => handleButtonClick('8')} />
                <input type="button" value="9" onClick={() => handleButtonClick('9')} />
                <input type="button" value="*" onClick={() => handleButtonClick('*')} />
              </div>
              <div>
                <input type="button" value="4" onClick={() => handleButtonClick('4')} />
                <input type="button" value="5" onClick={() => handleButtonClick('5')} />
                <input type="button" value="6" onClick={() => handleButtonClick('6')} />
                <input type="button" value="-" onClick={() => handleButtonClick('-')} />
              </div>
              <div>
                <input type="button" value="1" onClick={() => handleButtonClick('1')} />
                <input type="button" value="2" onClick={() => handleButtonClick('2')} />
                <input type="button" value="3" onClick={() => handleButtonClick('3')} />
                <input type="button" value="+" onClick={() => handleButtonClick('+')} />
              </div>
              <div>
                <input type="button" value="00" onClick={() => handleButtonClick('00')} />
                <input type="button" value="0" onClick={() => handleButtonClick('0')} />
                <input type="button" value="=" onClick={equals} style={{ width: '140px' }} className="operator-btn" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
