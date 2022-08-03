import "../styles/App.css";
import "../styles/PoolHeader.css";

function PoolHeader() {
  return <div className="PoolHeader">
    <div className="poolheader__option">
        <h3>Account Overview</h3>
    </div>
    <div className="poolheader__option">
        <h3>Pool Dashboard</h3>
    </div>
  </div>;
}

export default PoolHeader;
