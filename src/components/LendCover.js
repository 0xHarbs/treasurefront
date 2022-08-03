import "../styles/App.css";
import "../styles/LendCover.css";

function LendCover() {
  return (
    <div className="LendCover">
      <div className="lendcover__group">
        <div className="lendcover__title">
        <h1>Explore Lending Pools</h1>
        </div>
        <div className="lendcover__statsContainer">
          <div className="lendcover__statsGroup">
            <p>Loans originated</p>
            <h3>$1,533,711</h3>
          </div>
          <div className="lendcover__statsGroup">
            <p>Interest Earned</p>
            <h3>$33,711</h3>
          </div>
          <div className="lendcover__statsGroup">
            <p>Active Loans</p>
            <h3>49</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LendCover;
