import "../styles/App.css";
import "../styles/AdminCover.css";
import { useParams } from "react-router-dom";

const ReviewHeader = (params) => {

  function abbreviateNumber(value) {
    var newValue = value;
    if (value >= 1000) {
        var suffixes = ["", "k", "m", "b","t"];
        var suffixNum = Math.floor( (""+value).length/3 );
        var shortValue = '';
        for (var precision = 2; precision >= 1; precision--) {
            shortValue = parseFloat( (suffixNum != 0 ? (value / Math.pow(1000,suffixNum) ) : value).toPrecision(precision));
            var dotLessShortValue = (shortValue + '').replace(/[^a-zA-Z 0-9]+/g,'');
            if (dotLessShortValue.length <= 2) { break; }
        }
        if (shortValue % 1 != 0)  shortValue = shortValue.toFixed(1);
        newValue = shortValue+suffixes[suffixNum];
    }
    return newValue;
}

  return (
    <div className="adminCover">
      <div className="adminCover__text">
        <h3>APPROVE POOL</h3>
        <h1>Synthetix</h1>
      </div>
      <div className="adminCover__stats">
        <div className="panel__statsContainer">
          <div className="adminCover__stat">
            <h3>{params.RequestedLoan}</h3>
            <p>Request</p>
          </div>
          <div className="adminCover__stat">
            <h3>{params.Collateral}</h3>
            <p>Collateral</p>
          </div>
          <div className="adminCover__stat">
            <h3>{params.APR}%</h3>
            <p>APR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewHeader;