import "./app.scss";
import { useState } from "react";

function App() {
  const [options, setOptions] = useState([]);
  const [inbox, setInbox] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit Button");
  };

  const handleClear = (e) => {
    e.preventDefault();
    console.log("Clear Button");
    setInbox("");
    setOptions([]);
  };

  const handleRoll = (e) => {
    e.preventDefault();
    console.log("Roll Button");
  };

  return (
    <div className="App">
      <h1 className="Title">Random Picker</h1>
      <form>
        <input
          className="inputBox"
          placeholder="Enter Option"
          value={inbox}
          onChange={(event) => {
            setInbox(event.target.value);
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
          {options.map((option) => (
            <li key={option}>{option}</li>
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
