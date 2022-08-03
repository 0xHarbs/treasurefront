import { useParams } from "react-router-dom";
import "../styles/App.css";
import "../styles/PoolOption.css";

const PoolOption = (params) => {
  return (
    <div className="PoolOption">
      <div className="poolOption__container">
        <div className="poolOption__title">
          <h3>{params.companyName ? params.companyName : "Company Name"}</h3>
          <div className="poolOption__selectors">
            <div className="poolOption__selector">
              <h3>Overview</h3>
            </div>
            <div className="poolOption__selector">
              <h3>Pool Stats</h3>
            </div>
          </div>
        </div>
        <div className="poolOption__Overview">
          <div className="poolOption__OverviewContainer">
            <div className="poolOption__OverviewDelegate">
              <p>Pool Delegate</p>
              <p>Josh Green</p>
              <p>Website</p>
            </div>
            <div className="poolOption__OverviewInfo">
              <div className="poolOption__CompanyInfo">
                <h3>About Company Name</h3>
                <p>
                  Orthogonal Trading is a multi-strategy cryptocurrency trading
                  firm focused solely on the digital asset markets. Orthogonal
                  Trading were the first Pool Delegate to launch a lending
                  business on Maple and currently operate two pools. The team
                  bring experience in portfolio and risk management, auditing,
                  quantitative trading, and blockchain system development from
                  Goldman Sachs, Morgan Stanley, B2C2 and more.
                </p>
              </div>
              <div className="poolOption__TermsInfo">
                <h3>Pool Terms</h3>
                <div className="poolOption__CompanyTerms">
                  <div className="poolOption__CompanyTermPair">
                    <div className="poolOption__CompanyTermBox">
                      <p>Funding Limit</p>
                      <h3>$2,000,000</h3>
                    </div>
                    <div className="poolOption__CompanyTermBox">
                      <p>Locked Collateral</p>
                      <h3>$6,900,000</h3>
                    </div>
                  </div>
                  <div className="poolOption__CompanyTermPair">
                    <div className="poolOption__CompanyTermBox">
                      <p>Funding Received</p>
                      <h3>85%</h3>
                    </div>
                    <div className="poolOption__CompanyTermBox">
                      <p>Repayments Made</p>
                      <h3>12</h3>
                    </div>
                  </div>
                  <div className="poolOption__CompanyTermPair">
                    <div className="poolOption__CompanyTermBox">
                      <p>Annual Yield</p>
                      <h3>10%</h3>
                    </div>
                    <div className="poolOption__CompanyTermBox">
                      <p>Lockup Period</p>
                      <h3>365 days</h3>
                    </div>
                  </div>
                </div>
              </div>
              <hr></hr>
              <div className="poolOption__TermsInfo">
                <h3>Project Overview</h3>
                <div className="poolOption__CompanyTerms">
                  <div className="poolOption__CompanyTermPair">
                    <div className="poolOption__CompanyTermBox">
                      <p>Undiluted Mkt Cap</p>
                      <h3>$11,600,000</h3>
                    </div>
                    <div className="poolOption__CompanyTermBox">
                      <p>Stat</p>
                      <h3>10:1</h3>
                    </div>
                  </div>
                  <div className="poolOption__CompanyTermPair">
                    <div className="poolOption__CompanyTermBox">
                      <p>Diluted Mkt Cap</p>
                      <h3>$80,000,000</h3>
                    </div>
                    <div className="poolOption__CompanyTermBox">
                      <p>DEX Liquidity</p>
                      <h3>$1,800,000</h3>
                    </div>
                  </div>
                  <div className="poolOption__CompanyTermPair">
                    <div className="poolOption__CompanyTermBox">
                      <p>Tokens Issued</p>
                      <h3>60%</h3>
                    </div>
                    <div className="poolOption__CompanyTermBox">
                      <p>Liquidity Risk</p>
                      <h3>5/10</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolOption;
