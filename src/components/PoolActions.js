import "../styles/App.css";
import "../styles/PoolActions.css";
import { Link } from "react-router-dom";
import { React, useState } from "react";

const PoolActions = (params) => {
  const [valueInput, setValueInput] = useState("0");
  const [withdrawalInput, setWithdrawalInput] = useState("0")

  const handleChange = (event) => {
    setValueInput(event.target.value);
    console.log(event.target.value);
  };

  const setMax = () => {
    setValueInput(params.borrowBalance);
  };

  const handleChangeWithdrawal = (event) => {
    setWithdrawalInput(event.target.value);
    console.log(event.target.value);
  };

  const setMaxWithdrawal = () => {
    setWithdrawalInput(params.borrowBalance);
  };

  return (
    <div className="poolActions">
      <div className="poolActions__container">
        <div className="poolActions__title">
          <h2>Lend Funds</h2>
          <p>Deposit funds into the lending pool to earn yield.</p>
        </div>
        <div className="poolActions__contentContainer">
          <input
            type="number"
            value={valueInput}
            defaultValue="0.00"
            onChange={handleChange}
          ></input>
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
          <p>Balance: {params.borrowBalance ? params.borrowBalance : 0}</p>
          <div className="poolActions__maxIcon" onClick={setMax}>
            <p>Max</p>
          </div>
        </div>
        <div className="poolActions__infoRow">
          <div className="poolActions__infoColumn">
            <div className="poolActions__infoText">
              <p>APR: </p>
              <h3>{params.APR ? `${params.APR}%` : "0%"}</h3>
            </div>
            <div className="poolActions__infoText">
              <p>Estimated Return: </p>
              <h3>
                {valueInput ? valueInput * (1 + Number(params.APR) / 100) : 0}
              </h3>
            </div>
          </div>
          <div>
            <button
              className="button"
              onClick={() => {
                params.lendFunds(valueInput);
              }}
            >
              Lend USDC
            </button>
          </div>
        </div>
      </div>
      <div className="poolActions__container">
        <div className="poolActions__title">
          <h2>Lending Rewards</h2>
          <p>View all of your rewards from investing in Aave.</p>
        </div>
        <div className="poolActions__contentContainer">
          <input
            type="number"
            value={withdrawalInput}
            defaultValue="0.00"
            onChange={handleChangeWithdrawal}
          ></input>
          <div className="poolActions__inputColumn">
            <div className="poolActions__inputs">
              <div className="poolActions__currency">
                <img src="https://cryptologos.cc/logos/versions/dogecoin-doge-logo-alternative.svg?v=023"></img>
                <p>DOGE</p>
              </div>
            </div>
          </div>
        </div>
        <div className="poolActions__balanceInfo">
          <div>
            <p>Pending Balance: 0</p>
          </div>
          <p>Available: {params.borrowBalance ? params.borrowBalance : 0}</p>
          <div className="poolActions__maxIcon" onClick={setMaxWithdrawal}>
            <p>Max</p>
          </div>
        </div>
        <div className="poolActions__infoRow">
          <div className="poolActions__infoColumn">
            <div className="poolActions__infoText">
              <p>Locked: </p>
              <h3>{params.lockedBalance ? `${params.lockedBalance}%` : "$0"}</h3>
            </div>
            <div className="poolActions__infoText">
              <p>Unlocked: </p>
              <h3>
                {params.unlockedBalance ? params.unlockedBalance : 0} {params.interestGain ? params.interestGain : "(0%)"}
              </h3>
            </div>
          </div>
          <div>
            <button
              className="button"
              onClick={() => {
                params.withdrawFunds(withdrawalInput);
              }}
            >
              Withdraw DOGE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolActions;
