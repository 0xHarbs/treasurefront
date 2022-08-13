import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/App.css";
import "../styles/PoolOption.css";
import PaidIcon from "@mui/icons-material/Paid";
import SecurityIcon from "@mui/icons-material/Security";
import SavingsIcon from "@mui/icons-material/Savings";

const PoolOption = (params) => {
  const [home, setHome] = useState(true);
  const [stats, setStats] = useState(false);

  const changeStats = async () => {
    setHome(false);
    setStats(true);
  };

  const changeOverview = async () => {
    setHome(true);
    setStats(false);
  };

  return (
    <div className="PoolOption">
      <div className="poolOption__container">
        <div className="poolOption__box">
          <div className="poolOption__titleRow">
            <SecurityIcon
              style={{ color: "#555E6D" }}
              className="poolOption__icon"
            />
            <h2 className="poolOption__title">Protection</h2>
          </div>
          <div>
            <p className="poolOption__headers">Locked Collateral</p>
            <h3 className="poolOption__boldText">$3,000,000</h3>
          </div>
          <div>
            <p className="poolOption__headers">Collateralisation Ratio</p>
            <h3 className="poolOption__boldText">3x</h3>
          </div>
        </div>
        <div className="poolOption__box">
          <div className="poolOption__titleRow">
            <PaidIcon
              style={{ color: "#FDC943" }}
              className="poolOption__icon"
            />
            <h2 className="poolOption__title">Pool Size</h2>
          </div>
          <div className="poolOption__sizeRow">
            <div className="poolOption__sizeColumn">
              <p className="poolOption__headers">Max Capacity</p>
              <h3 className="poolOption__boldText">$1,000,000</h3>
              <p className="poolOption__headers">APR</p>
              <h3 className="poolOption__boldText">10%</h3>
            </div>
            <div poolOption__sizeColumn>
              <p className="poolOption__headers">Oustanding</p>
              <h3 className="poolOption__boldText">$200,000</h3>
              <p className="poolOption__headers">Batches</p>
              <h3 className="poolOption__boldText">20</h3>
            </div>
          </div>
        </div>
        <div className="poolOption__box">
        <div className="poolOption__titleRow">
            <SavingsIcon
              style={{ color: "#53AA61" }}
              className="poolOption__icon"
            />
            <h2 className="poolOption__title">Earnings</h2>
          </div>
          <div>
            <p className="poolOption__headers">APY</p>
            <h3 className="poolOption__boldText">10%</h3>
          </div>
          <div>
            <p className="poolOption__headers">Interest Earned</p>
            <h3 className="poolOption__boldText">$15,000</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PoolOption;
