import React from "react";
import "./popup.scss";

const Popup = (props) => {
  const { result, setResult, setTrigger } = props;

  const handleClose = (e) => {
    e.preventDefault();
    setTrigger(false);
    setResult("");
  };

  return (
    <>
      <div className="popupBox">
        <p>{result}</p>
        <button className="popupClose" onClick={handleClose}>
          Close
        </button>
      </div>

      <div
        className="popupContainer"
        onClick={() => {
          setTrigger(false);
        }}
      ></div>
    </>
  );
};

export default Popup;
