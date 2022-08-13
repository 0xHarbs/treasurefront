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
            <h3 className="poolOption__boldText">{params.LockedCollateral ? `$${params.LockedCollateral}` : 0}</h3>
          </div>
          <div>
            <p className="poolOption__headers">Collateralisation Ratio</p>
            <h3 className="poolOption__boldText">{params.CollateralisationRatio ? `${params.CollateralisationRatio}x` : 0}</h3>
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
              <h3 className="poolOption__boldText">{params.MaxBorrowAmount ? `$${params.MaxBorrowAmount}` : 0}</h3>
              <p className="poolOption__headers">Backers</p>
              <h3 className="poolOption__boldText">200</h3>
            </div>
            <div poolOption__sizeColumn>
              <p className="poolOption__headers">Capacity Left</p>
              <h3 className="poolOption__boldText">{params.Outstanding ? `$${params.Outstanding}` : "$0"}</h3>
              <p className="poolOption__headers">Batches</p>
              <h3 className="poolOption__boldText">{params.Batches ? params.Batches : 10}</h3>
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
            <h3 className="poolOption__boldText">{params.APR ? `${params.APR}%` : "0%" }</h3>
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
