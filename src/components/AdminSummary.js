import "../styles/App.css";
import "../styles/AdminSummary.css";
import { Link } from "react-router-dom";
import React from "react";

const AdminSummary = (params) => {
  return (
    <div className="adminsummary">
      <div className="adminsummary__container">
        <div className="adminsummary__title">
          <img className="adminsummary__logo" src={params.logo} alt="logo" />
          <div className="adminsummary__column">
            <h1>{params.name}</h1>
            <p>{params.description ? params.description : "Null"}</p>
          </div>
        </div>
        <div className="adminsummary__contentContainer">
          <div className="adminsummary__logoContainer"></div>
          <div className="adminsummary__containerFlex">
            <div className="adminsummary__textContainer">
              <div className="adminsummary__textBox">
                <p>Current Loans</p>
                <h3>{params.loanRequest ? params.loanRequest : "0"}</h3>
              </div>
              <div className="adminsummary__textBox">
                <p>APR</p>
                <h3>{params.APR ? params.APR : "0"}</h3>
              </div>
            </div>
            <div className="adminsummary__textContainer">
              <div className="adminsummary__textBox">
                <p>Collateral</p>
                <h3>{params.collateral ? params.collateral : "0"}</h3>
              </div>
              <div className="adminsummary__textBox">
                <p>Backers</p>
                <h3>{params.price ? params.price : "0"}</h3>
              </div>
            </div>
          </div>
          <div className="adminsummary__link">
            <Link to={`/review`}>
              <h3
                style={{
                  color: "#FDC943",
                  textDecoration: "none",
                  fontSize: "14px",
                }}
              >
                Review {">"}
              </h3>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminSummary;
