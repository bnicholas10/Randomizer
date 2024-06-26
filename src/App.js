import "./app.scss";
import { useState } from "react";
import Popup from "./Popup";

// make multiple sets
// animation for picking and result

function App() {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");
  const [trigger, setTrigger] = useState(false);

  function randomChoice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    setResult(arr[randomIndex]);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      setResult("Must enter an option");
      setTimeout(() => {
        setResult("");
      }, "2000");
    } else {
      setOptions([...options, input]);
      setInput("");
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setOptions([]);
    setResult("");
    setInput("");
    setTrigger(false);
  };

  const handleRoll = (e) => {
    e.preventDefault();
    if (options.length < 2) {
      setResult("Must enter more than one option");
      setTrigger(true);
    } else {
      randomChoice(options);
      setTrigger(true);
    }
  };

  const handleRemove = (e, i) => {
    e.preventDefault();
    setOptions([
      ...options.slice(0, i),
      ...options.slice(i + 1, options.length),
    ]);
  };

  return (
    <div className="App">
      <h1 className="Title">Randomizer</h1>
      <form>
        <input
          className="inputBox"
          placeholder="Enter Option"
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
        <div className="buttons">
          <button type="reset" onClick={handleClear}>
            Clear
          </button>
          <button type="submit" onClick={handleSubmit}>
            Enter Choice
          </button>
          <button onClick={handleRoll}>Roll</button>
        </div>
      </form>
      {trigger && (
        <Popup result={result} setResult={setResult} setTrigger={setTrigger} />
      )}
      <div className="optionList">
        <ul>
          {options.map((option, i) => (
            <>
              <span className="listing">
                <button
                  onClick={(e) => {
                    handleRemove(e, i);
                  }}
                >
                  X
                </button>
                <li key={i}>{option}</li>
              </span>
            </>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
