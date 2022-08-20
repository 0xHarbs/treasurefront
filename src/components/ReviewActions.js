import "../styles/App.css";
import "../styles/ReviewActions.css";
import Header from "../components/Header";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { useState } from "react";

const ReviewActions = (params) => {
  const [tokenPriceVerified, setTokenPriceVerified] = useState(false);
  const [lockedSupplyVerified, setLockedSupplyVerified] = useState(false);
  const [DEXLiquidityVerified, setDEXLiquidityVerified] = useState(false);
  const [deployerVerified, setDeployerVerified] = useState(false);
  const [collateralRatioVerified, setCollateralRatioVerified] = useState(false);
  const [verifiedAdmin, setVerifiedAdmin] = useState(false);

  const handlePriceVerify = (event) => {
    if (tokenPriceVerified === false) {
      setTokenPriceVerified(true);
    } else {
      setTokenPriceVerified(false);
    }
  };

  const handleSupplyVerify = (event) => {
    if (lockedSupplyVerified === false) {
      setLockedSupplyVerified(true);
    } else {
      setLockedSupplyVerified(false);
    }
  };

  const handleDEXVerify = (event) => {
    if (DEXLiquidityVerified === false) {
      setDEXLiquidityVerified(true);
    } else {
      setDEXLiquidityVerified(false);
    }
  };

  const handleDeployerVerify = (event) => {
    if (deployerVerified === false) {
      setDeployerVerified(true);
    } else {
      setDeployerVerified(false);
    }
  };

  const handleCollateralVerify = (event) => {
    if (collateralRatioVerified === false) {
      setCollateralRatioVerified(true);
    } else {
      setCollateralRatioVerified(false);
    }
  };

  const handleAdminVerify = (event) => {
    if (verifiedAdmin === false) {
      setVerifiedAdmin(true);
    } else {
      setVerifiedAdmin(false);
    }
  };

  const checkInputs = () => {
  let sum = 0;
  if (tokenPriceVerified === true) {
    sum += 1;
  }
  if (lockedSupplyVerified === true) {
    sum += 1;
  }
  if (DEXLiquidityVerified === true) {
    sum += 1;
  }
  if (deployerVerified === true) {
    sum += 1;
  }
  if (collateralRatioVerified === true) {
    sum += 1;
  }
  if (verifiedAdmin === true) {
    sum += 1;
  }
  return sum === 6;
  }

  return (
    <div className="reviewActions">
      <div className="reviewActions__stats">
        <h3>Admin Checks</h3>
        <p>Check all of the neccessary info before confirmation.</p>
        <div className="reviewActions__formInputs">
          <div className="reviewActions__inputRow">
            <div className="reviewActions__box" onClick={handlePriceVerify}>
              <input
                className="reviewActions__input"
                type="text"
                value="Token Price Correct"
              ></input>
              {tokenPriceVerified ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </div>
            <div className="reviewActions__box" onClick={handleDEXVerify}>
              <input
                className="reviewActions__input"
                type="text"
                value="Liquidity >30% request"
              ></input>
              {DEXLiquidityVerified ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </div>
          </div>
          <div className="reviewActions__inputRow">
            <div className="reviewActions__box" onClick={handleSupplyVerify}>
              <input
                className="reviewActions__input"
                type="text"
                value="Locked <30% supply"
              ></input>
              {lockedSupplyVerified ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </div>
            <div className="reviewActions__box" onClick={handleDeployerVerify}>
              <input
                className="reviewActions__input"
                type="text"
                value="Verified contract deployer"
              ></input>
              {deployerVerified ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </div>
          </div>
          <div className="reviewActions__inputRow">
            <div
              className="reviewActions__box"
              onClick={handleCollateralVerify}
            >
              <input
                className="reviewActions__input"
                type="text"
                value="Request <3x collateral"
              ></input>
              {collateralRatioVerified ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </div>
            <div
              className="reviewActions__box"
              onClick={handleAdminVerify}
            >
              <input
                className="reviewActions__input"
                type="text"
                value="Verified admin address"
                
              ></input>
              {verifiedAdmin ? (
                <CheckBoxIcon />
              ) : (
                <CheckBoxOutlineBlankIcon />
              )}
            </div>
          </div>
        </div>
        <div className="reviewActions__buttonContainer">
          <button className="button" onClick={() => {
            let completedCheck = checkInputs()
            params.confirmSubmission(completedCheck)
            }} >Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ReviewActions;
