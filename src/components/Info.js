import "../styles/App.css";
import "../styles/Info.css";
import React from "react";

function Info() {
  return (
    <div className="info">
        <h1>Treasure makes treasury management easy for everyone.</h1>
      <div className="info__valueSection">
        <div className="info__valuePoints">
          <div className="info__valueBucket">
            <h3>Lend stablecoins to earn yield in native tokens</h3>
            <p>
              Lend your stablecoins and earn yield in native tokens from projects that  you support.
            </p>
            <p style={{color: '#FDC943', margin: '32px 0px 0px 0px'}}>Learn more</p>
          </div>
          <div className="info__valueBucket">
          <h3>Borrow stablecoins and pay with native tokens</h3>
            <p>
              Lock up collateral in your native token to borrow stablecoins from lenders, paying the APR in your native token.
            </p>
            <p style={{color: '#FDC943', margin: '32px 0px 0px 0px'}}>Learn more</p>
          </div>
          <div className="info__valueBucket">
          <h3>Earn diversified yield on borrowed stablecoins</h3>
            <p>
              Deploy funds to a series of vaults that earn diversiified yields in stablecoins. Return 2-3x the cost of borrowing.
            </p>
            <p style={{color: '#FDC943', margin: '32px 0px 0px 0px'}}>Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
