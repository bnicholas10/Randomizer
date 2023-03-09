import "./popup.scss";

const Popup = (props) => {
  const { result, setResult, setTrigger } = props;

  const handleClose = (e) => {
    e.preventDefault();
    setTrigger(false);
    setResult("");
  };

  return (
    <div className="popupContainer">
      <div className="popupBox">
        <p>Result: {result}</p>
        <button className="popupClose" onClick={handleClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default Popup;
