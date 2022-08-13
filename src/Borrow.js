import "./styles/App.css";
import "./styles/Borrow.css";

function Borrow() {
  return (
    <div className="borrow">
      <div className="borrow__text">
        <h3>CHOOSE YOUR SIDE</h3>
        <h1>Borrow Funds</h1>
      </div>
      <div className="borrow__stats">
        <h3>Borrower Information</h3>
        <p>
          Provide the necessary information to create a borrower pool.
          <span style={{ color: "#FDC943", margin: "0px 0px 0px 8px" }}>
            Learn more {">"}
          </span>
        </p>
        <div className="borrow__formInputs">
          <div className="borrow__inputRow">
            <input
              className="borrow__input"
              type="text"
              placeholder="Company Name*"
            ></input>
            <input
              className="borrow__input"
              type="text"
              placeholder="Token Address*"
            ></input>
          </div>
          <div className="borrow__inputRow">
            <input
              className="borrow__input"
              type="text"
              placeholder="Email*"
            ></input>
            <input
              className="borrow__input"
              type="text"
              placeholder="Telegram"
            ></input>
          </div>
          <div className="borrow__inputRow">
            <input
              className="borrow__input"
              type="text"
              placeholder="Twitter"
            ></input>
            <input
              className="borrow__input"
              type="text"
              placeholder="Website*"
            ></input>
          </div>
        </div>
        <div className="borrow__buttonContainer">
          <button className="button">Submit Vault</button>
        </div>
      </div>
    </div>
  );
}

export default Borrow;
