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
            <h3>Seamless connection to any API tools</h3>
            <p>
              Your data can be transformed, organized, and shared across
              applications for anyone to query with just a dew keystrokes.
            </p>
            <p style={{color: '#FDC943', margin: '32px 0px 0px 0px'}}>Learn more</p>
          </div>
          <div className="info__valueBucket">
          <h3>Seamless connection to any API tools</h3>
            <p>
              Your data can be transformed, organized, and shared across
              applications for anyone to query with just a dew keystrokes.
            </p>
            <p style={{color: '#FDC943', margin: '32px 0px 0px 0px'}}>Learn more</p>
          </div>
          <div className="info__valueBucket">
          <h3>Seamless connection to any API tools</h3>
            <p>
              Your data can be transformed, organized, and shared across
              applications for anyone to query with just a dew keystrokes.
            </p>
            <p style={{color: '#FDC943', margin: '32px 0px 0px 0px'}}>Learn more</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Info;
