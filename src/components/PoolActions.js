import "../styles/App.css";
import "../styles/PoolActions.css";
import { Link } from "react-router-dom";
import React from "react";

const PoolActions = (params) => {
  return (
    <div className="poolActions">
      <div className="poolActions__container">
        <div className="poolActions__title">
          <h2>Lend Funds</h2>
          <p>Deposit funds into the lending pool to earn yield.</p>
        </div>
        <div className="poolActions__contentContainer">
          <h3>100.00</h3>
          <div className="poolActions__inputColumn">
            <div className="poolActions__inputs">
              <div className="poolActions__currency">
                <img src="https://icons-for-free.com/iconfiles/png/512/cryptocurrency+icons+++color+usdc-1324449146826221536.png"></img>
                <p>USDC</p>
              </div>
            </div>
          </div>
        </div>
        <div className="poolActions__balanceInfo">
          <p>Balance: 2000</p>
          <div className="poolActions__maxIcon">
            <p>Max</p>
          </div>
        </div>
        <div className="poolActions__infoRow">
          <div className="poolActions__infoColumn">
            <div className="poolActions__infoText">
              <p>APR: </p>
              <h3>20%</h3>
            </div>
            <div className="poolActions__infoText">
              <p>Estimated Return: </p>
              <h3>$110.00</h3>
            </div>
          </div>
          <div>
            <button className="button">Lend USDC</button>
          </div>
        </div>
      </div>
      <div className="poolActions__container">
        <div className="poolActions__title">
          <h2>Lending Rewards</h2>
          <p>View all of your rewards from investing in Aave.</p>
        </div>
        <div className="poolActions__contentContainer">
          <h3>100.00</h3>
        </div>
      </div>
    </div>
  );
};

export default PoolActions;
