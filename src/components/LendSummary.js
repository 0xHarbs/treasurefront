import "../styles/App.css";
import "../styles/LendSummary.css";
import { Link } from "react-router-dom";
import React from "react";

const LendSummary = (params) => {
  return (
    <div className="lendsummary">
      <div className="lendsummary__container">
        <div className="lendsummary__title">
          <img className="lendsummary__logo" src={params.logo} alt="logo" />
          <div className="lendsummary__column">
            <h1>{params.name}</h1>
            <p>Decentralised exchange</p>
          </div>
        </div>
        <div className="lendsummary__contentContainer">
          <div className="lendsummary__logoContainer"></div>
          <div className="lendsummary__containerFlex">
            <div className="lendsummary__textContainer">
              <div className="lendsummary__textBox">
                <p>Current Loans</p>
                <h3>{params.loanRequest ? params.loanRequest : "0"}</h3>
              </div>
              <div className="lendsummary__textBox">
                <p>Total Cash</p>
                <h3>{params.FundingRate ? params.FundingRate : "0"}</h3>
              </div>
            </div>
            <div className="lendsummary__textContainer">
              <div className="lendsummary__textBox">
                <p>APR</p>
                <h3>{params.APR ? params.APR : "0"}</h3>
              </div>
              <div className="lendsummary__textBox">
                <p>Backers</p>
                <h3>{params.backers ? params.backers : "0"}</h3>
              </div>
            </div>
          </div>
          <div className="lendsummary__link">
            <Link to={`/pool/${params.Contract}`}>
              <h3
                style={{
                  color: "#FDC943",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                View Pool {">"}
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LendSummary;
