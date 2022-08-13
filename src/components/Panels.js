import "../styles/App.css";
import "../styles/Panels.css";
import React from "react";
import { Link } from "react-router-dom";

function Panels() {
  return (
    <div className="panels">
      <div className="panels__text">
        <h1>Built by treasury managers, for treasury managers.</h1>
        <p>
          Treasure deliver open-source treasury lending and support services to
          help you earn on your native token and deliver open-source treasury
          lending and support.
        </p>
        <div className="panels__bulletPoints">
          <li>Total transparency for your community</li>
          <li>Total transparency for your community</li>
          <li>Total transparency for your community</li>
        </div>
        <div className="panels__buttons">
          <Link to="choose">
          <button className="button panelsButton">Launch App</button>
          </Link>
          <p style={{ color: "#FDC943" }}>Read the docs</p>
        </div>
      </div>
      <div className="panels__text">
        <h1>Top DAOs manage funds on Treasure</h1>
        <p>
          Treasure is commited to fostering the growth of web3 by helpding DAOs
          to deploy their native tokens. We believe the value that can be gained
          through unlocking yield can propel growth and give teams an edge.
        </p>
        <div className="panels__buttons">
        <Link to="choose">
          <button className="button panelsButton">Launch App</button>
          </Link>
          <p style={{ color: "#FDC943" }}>Read the docs</p>
        </div>
      </div>
      <div className="panels__stats">
        <div className="panel__statsContainer">
          <div className="panels__stat">
            <h3>$1m</h3>
            <p>Funds left</p>
          </div>
          <div className="panels__stat">
            <h3>$100k+</h3>
            <p>Yield Earned</p>
          </div>
          <div className="panels__stat">
            <h3>20+</h3>
            <p>DAOs Active</p>
          </div>
          <div className="panels__stat">
            <h3>10</h3>
            <p>Strategies</p>
          </div>
          <div className="panels__stat">
            <h3>4</h3>
            <p>Defi Analysts</p>
          </div>
          <div className="panels__stat">
            <h3>100%</h3>
            <p>Decentralised</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Panels;
