import "../styles/App.css";
import "../styles/LendSummary.css";
import { Link } from "react-router-dom";
import React from "react";

const LendSummary = (params) => {
  return (
    <div className="lendsummary">
      <div className="lendsummary__container">
        <div className="lendsummary__title">
          <h1>{params.name}</h1>
        </div>
        <div className="lendsummary__contentContainer">
          <div className="lendsummary__logoContainer">
            <img className="lendsummary__logo" src={params.logo} alt="logo" />
          </div>
          <div className="lendsummary__textContainer">
            <div className="lendsummary__textBox">
              <p>Current Loans</p>
              <h3>{params.loans ? params.loans : "0"}</h3>
            </div>
            <div className="lendsummary__textBox">
              <p>Total Cash</p>
              <h3>{params.cash ? params.cash : "0"}</h3>
            </div>
            <div className="lendsummary__textBox">
              <p>Current APY</p>
              <h3>{params.yield ? params.yield : "0%"}</h3>
            </div>
            <Link to="/pool">
              <h3>View Pool {">"}</h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendSummary;
