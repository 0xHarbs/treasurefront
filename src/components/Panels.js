import "../styles/App.css";
import "../styles/Panels.css";
import React from "react";
import { Link } from "react-router-dom";

function Panels() {
  return (
    <div className="panels">
      <div className="panels__row">
        <div className="panels__text">
          <h1>Built by treasury managers, for treasury managers.</h1>
          <p>
            Treasure deliver open-source treasury lending and support services
            to help you earn on your native token and deliver open-source
            treasury lending and support.
          </p>
          <div className="panels__bulletPoints">
            <li>Simple process to borrow stablecoins</li>
            <li>Easily deploy funds to yielding strategies</li>
            <li>Earn yield to drive growth in your project</li>
          </div>
          <div className="panels__buttons">
            <Link to="choose">
              <button className="button panelsButton">Launch App</button>
            </Link>
            <p style={{ color: "#FDC943" }}>Read the docs</p>
          </div>
        </div>
        <div className="panels__image">
          <img src="https://svgsilh.com/svg/2497813.svg"></img>
        </div>
      </div>
      <div className="panels__row">
        <div className="panels__imageCounter">
          <img src="https://freesvg.org/img/1379964998.png"></img>
        </div>
        <div className="panels__text">
          <h1>Top DAOs manage funds on Treasure</h1>
          <p>
            Treasure is commited to fostering the growth of web3 by helping
            DAOs to deploy their native tokens. We believe the value that can be
            gained through unlocking yield can propel growth and give teams an
            edge.
          </p>
          <div className="panels__buttons">
            <Link to="choose">
              <button className="button panelsButton">Launch App</button>
            </Link>
            <p style={{ color: "#FDC943" }}>Read the docs</p>
          </div>
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
