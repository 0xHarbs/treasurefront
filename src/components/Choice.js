import "../styles/App.css";
import "../styles/Choice.css";
import React from "react";
import { Link } from "react-router-dom";

function Choice() {
  return (
    <div className="choice">
      <div className="choice__text">
        <h3>CHOOSE YOUR SIDE</h3>
        <h1>Select an option</h1>
      </div>
      <div className="info__valueSection">
        <div className="info__valuePoints">
          <div className="info__valueBucket">
            <h3>Lend funds to projects to earn yield</h3>
            <p>
              Borrow requested tokens to projects and you will received a yield
              over a locked period in their native token.
            </p>
            <Link to="/lend">
            <p style={{ color: "#FDC943", margin: "32px 0px 0px 0px" }}>
              Let's go
            </p>
            </Link>
          </div>
          <div className="info__valueBucket">
            <h3>Borrow funds from your supporters</h3>
            <p>
              Launch a campaign to borrow funds from contributors in stablecoins
              or ETH and you will pay an APR in your native token.
            </p>
            <Link to="/borrow">
            <p style={{ color: "#FDC943", margin: "32px 0px 0px 0px" }}>
              Let's go
            </p>
            </Link>
          </div>
          <div className="info__valueBucket">
            <h3>Partner with our team to launch strategies</h3>
            <p>
              Launch yield bearing strategies that funds can be deployed to that
              will be active on our strategy marketplace.
            </p>
            <p style={{ color: "#FDC943", margin: "32px 0px 0px 0px" }}>
              Learn more
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choice;
