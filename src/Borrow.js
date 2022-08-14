import "./styles/App.css";
import "./styles/Borrow.css";
import Header from "./components/Header";
import {useState} from "react"
import CheckBoxIcon from "@mui/icons-material/CheckBox";

function Borrow() {
  const [sent, setSent] = useState(false)
  const [companyName, setCompanyName] = useState(null)
  const [tokenAddress, setTokenAddress] = useState(null)
  const [email, setEmail] = useState(null)
  const [telegram, setTelegram] = useState(null)
  const [twitter, setTwitter] = useState(null)
  const [website, setWebsite] = useState(null)

  const handleCompany = (event) => {
    setCompanyName(event.target.value)
  }
  const handleAddress = (event) => {
    setTokenAddress(event.target.value)
  }
  const handleEmail = (event) => {
    setEmail(event.target.value)
  }
  const handleTelegram = (event) => {
    setTelegram(event.target.value)
  }
  const handleTwitter = (event) => {
    setTwitter(event.target.value)
  }
  const handleWebsite = (event) => {
    setWebsite(event.target.value)
  }

  const handleSent = () => {
  if(companyName === null || tokenAddress === null || email === null || website === null) {
    alert("Required inputs can't be null.")
  } else {
    setSent(true)
  }
  }

  return (
    <div className="borrow">
      <Header />
      <div className="borrow__text">
        <h3>{!sent ? "CHOOSE YOUR SIDE" : "NICE ONE"}</h3>
        <h1>{!sent ? "Borrow Funds" : "Form Sent!"}</h1>
        {sent && <p>Our team will be in contact in 48 hours to proceed.</p>}
      </div>
      {!sent ? 
      <>
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
              onChange={handleCompany}
            ></input>
            <input
              className="borrow__input"
              type="text"
              placeholder="Token Address*"
              onChange={handleAddress}
            ></input>
          </div>
          <div className="borrow__inputRow">
            <input
              className="borrow__input"
              type="text"
              placeholder="Email*"
              onChange={handleEmail}
            ></input>
            <input
              className="borrow__input"
              type="text"
              placeholder="Telegram"
              onChange={handleTelegram}
            ></input>
          </div>
          <div className="borrow__inputRow">
            <input
              className="borrow__input"
              type="text"
              placeholder="Twitter"
              onChange={handleTwitter}
            ></input>
            <input
              className="borrow__input"
              type="text"
              placeholder="Website*"
              onChange={handleWebsite}
            ></input>
          </div>
        </div>
        <div className="borrow__buttonContainer">
          <button className="button" onClick={handleSent}>Submit Vault</button>
        </div>
      </div>
      </>
      :
      <>
      <CheckBoxIcon style={{color: 'green', fontSize: '50px'}}/>
      </>
      }
    </div>
  );
}

export default Borrow;
