import "../styles/App.css";
import "../styles/Header.css";
import React from "react";
import { useParams } from "react-router-dom";

const Header = (params) => {
  return (
    <div className="header">
      <img
        className="header__logo"
        src="https://upload.wikimedia.org/wikipedia/commons/a/af/Jolly_Roger_Flag-02.svg"
        alt=""
      ></img>
      {params.wallet ? (
        <button onClick={params.connectWallet} className="button">
          {params.wallet.substring(0, 8)}
        </button>
      ) : (
        <button onClick={params.connectWallet} className="button">
          Connect Wallet
        </button>
      )}
    </div>
  );
};

export default Header;
