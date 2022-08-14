import "../styles/App.css";
import "../styles/AdminCover.css";

function ReviewHeader() {
  return (
    <div className="adminCover">
      <div className="adminCover__text">
        <h3>APPROVE POOL</h3>
        <h1>Synthetix</h1>
      </div>
      <div className="adminCover__stats">
        <div className="panel__statsContainer">
          <div className="adminCover__stat">
            <h3>$7m</h3>
            <p>Request</p>
          </div>
          <div className="adminCover__stat">
            <h3>$3m</h3>
            <p>Collateral</p>
          </div>
          <div className="adminCover__stat">
            <h3>10%</h3>
            <p>APR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewHeader;