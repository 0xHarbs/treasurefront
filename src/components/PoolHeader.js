import "../styles/App.css";
import "../styles/LendCover.css";

const LendCover = (params) => {
  return (
    <div className="LendCover">
      <div className="lendCover__text">
        <h3>FIND OUT MORE</h3>
        <h1>Aave</h1>
      </div>
      <div className="lendCover__stats">
        <div className="panel__statsContainer">
          <div className="lendCover__stat">
            <h3>$1m</h3>
            <p>Requested</p>
          </div>
          <div className="lendCover__stat">
            <h3>{params.FundingRate ? `${params.FundingRate}%` : 0}</h3>
            <p>Funded</p>
          </div>
          <div className="lendCover__stat">
            <h3>{params.APR ? `${params.APR}%` : 0}</h3>
            <p>APR</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LendCover;
