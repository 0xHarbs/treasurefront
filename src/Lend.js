import "./styles/App.css";
import "./styles/Lend.css";
import LendCover from "./components/LendCover";
import LendSummary from "./components/LendSummary";

function Lend() {
  return (
    <div className="Lend">
      <div className="lendCover">
        <LendCover />
      </div>
      <LendSummary 
      name={"Sideshift"}
      logo={"https://s2.coinmarketcap.com/static/img/coins/200x200/11726.png"}
      />
    </div>
  );
}

export default Lend;
