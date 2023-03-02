import "./app.scss";
import { useState } from "react";

function App() {
  const [options, setOptions] = useState([]);
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  function randomChoice(arr) {
    let randomIndex = Math.floor(Math.random() * arr.length);
    // console.log(arr[randomIndex]);
    setResult(arr[randomIndex]);
  }
  // add option for number of rolls

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("Submit Button");
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
  };

  const handleRoll = (e) => {
    e.preventDefault();
    // console.log("Roll Button");
    if (options.length < 2) {
      setResult("Must enter more than one option");
      setTimeout(() => {
        setResult("");
      }, "2000");
    } else {
      randomChoice(options);
    }
  };

  return (
    <div className="App">
      <h1 className="Title">Random Picker</h1>
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
      <div id="result">Result: {result}</div>
      <div className="optionList">
        <p>Choices</p>
        <ul>
          {options.map((option, i) => (
            <li key={i}>{option}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// make result appear as pop up
// make multiple sets
// animation for picking and result

export default App;
