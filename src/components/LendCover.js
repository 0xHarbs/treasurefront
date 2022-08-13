import "../styles/App.css";
import "../styles/LendCover.css";

function LendCover() {
  return (
    <div className="LendCover">
      <div className="lendCover__text">
        <h3>CHOOSE YOUR SIDE</h3>
        <h1>Select an option</h1>
      </div>
      <div className="lendCover__stats">
        <div className="panel__statsContainer">
          <div className="lendCover__stat">
            <h3>$1m</h3>
            <p>Funds lent</p>
          </div>
          <div className="lendCover__stat">
            <h3>$100k+</h3>
            <p>Yield Earned</p>
          </div>
          <div className="lendCover__stat">
            <h3>20+</h3>
            <p>DAOs Active</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LendCover;
