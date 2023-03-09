import "./app.scss";
import { useState } from "react";
import Popup from "./Popup";

// make result appear as pop up
// make multiple sets
// animation for picking and result
// add option for number of rolls

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
      // add else if above here for functionality to check for multiple inputs at a time. ex. game 1; game 2
      setOptions([...options, input]);
      setInput("");
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    console.log("Clear Button");
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
      // setTimeout(() => {
      //   setResult("");
      // }, "2000");
    } else {
      randomChoice(options);
      setTrigger(true);
    }
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
      {/* <div id="resultContainer">
        {result && <div id="result">Result: {result}</div>}
      </div> */}
      {trigger && (
        <Popup result={result} setResult={setResult} setTrigger={setTrigger} />
      )}
      <div className="optionList">
        <ul>
          {options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
      {/* <button
        onClick={() => {
          console.log(trigger);
          setTrigger(!trigger);
        }}
      >
        Toggle Trigger
      </button> */}
    </div>
  );
}

export default App;
