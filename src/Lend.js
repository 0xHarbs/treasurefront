import "./styles/App.css";
import "./styles/Lend.css";
import LendCover from "./components/LendCover";
import LendSummary from "./components/LendSummary";

function Lend() {
  return (
    <div className="Lend">
      <LendCover />
      <div className="lend__openProjects">
        <LendSummary
          name={"Aave"}
          logo={
            "https://cryptologos.cc/logos/aave-aave-logo.png"
          }
          loanRequest={"$4,000,000"}
          fundingRate={"80%"}
          APR={"10%"}
          Backers={1200}
        />
        <LendSummary
          name={"Uniswap"}
          logo={
            "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Uniswap_Logo.svg/2051px-Uniswap_Logo.svg.png"
          }
          loanRequest={"$7,000,000"}
          fundingRate={"89%"}
          APR={"10%"}
          Backers={2350}
        />
        <LendSummary
          name={"Lido"}
          logo={
            "https://thegivingblock.com/wp-content/uploads/2022/04/Lido-LDO-logo.png"
          }
          loanRequest={"$1,400,000"}
          fundingRate={"68%"}
          APR={"10%"}
          Backers={780}
        />
                <LendSummary
          name={"Yearn"}
          logo={
            "https://cryptologos.cc/logos/yearn-finance-yfi-logo.png"
          }
          loanRequest={"$2,000,000"}
          fundingRate={"40%"}
          APR={"14%"}
          Backers={650}
        />
        <LendSummary
          name={"DyDx"}
          logo={
            "https://getcrypto.info/images/logos/dydx.png"
          }
          loanRequest={"$4,000,000"}
          fundingRate={"89%"}
          APR={"15%"}
          Backers={1743}
        />
        <LendSummary
          name={"Maple Finance"}
          logo={
            "https://thegivingblock.com/wp-content/uploads/2022/04/Maple-MPL-logo-.png"
          }
          loanRequest={"$800,000"}
          fundingRate={"68%"}
          APR={"7%"}
          Backers={450}
        />
      </div>
    </div>
  );
}

export default Lend;
