import { useState } from "react";
import { useParams } from "react-router-dom";
import "../styles/App.css";
import "../styles/ReviewOption.css";
import InfoIcon from '@mui/icons-material/Info';
import InventoryIcon from '@mui/icons-material/Inventory';
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const ReviewOption = (params) => {
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
    <div className="ReviewOption">
      <div className="reviewOption__container">
        <div className="reviewOption__box">
          <div className="reviewOption__titleRow">
            <InventoryIcon
              style={{ color: "#555E6D" }}
              className="reviewOption__icon"
            />
            <h2 className="reviewOption__title">Tokenomics</h2>
          </div>
          <div>
            <p className="reviewOption__headers">Locked Supply</p>
            <h3 className="reviewOption__boldText">1,000,000</h3>
          </div>
          <div>
            <p className="reviewOption__headers">Token Value</p>
            <h3 className="reviewOption__boldText">$0.15</h3>
          </div>
        </div>
        <div className="reviewOption__box">
          <div className="reviewOption__titleRow">
            <InfoIcon
              style={{ color: "#FDC943" }}
              className="reviewOption__icon"
            />
            <h2 className="reviewOption__title">Pool Info</h2>
          </div>
          <div className="reviewOption__sizeRow">
            <div className="reviewOption__sizeColumn">
              <p className="reviewOption__headers">Max</p>
              <h3 className="reviewOption__boldText">${params.MaxAmount}</h3>
              <p className="reviewOption__headers">Admin</p>
              <h3 className="reviewOption__boldText">{params.Manager}</h3>
            </div>
            <div>
              <p className="reviewOption__headers">Collateral</p>
              <h3 className="reviewOption__boldText">$21,000,000</h3>
              <p className="reviewOption__headers">Telegram</p>
              <h3 className="reviewOption__boldText">@Telespeak</h3>
            </div>
          </div>
        </div>
        <div className="reviewOption__box">
        <div className="reviewOption__titleRow">
            <AccountBoxIcon
              style={{ color: "#53AA61" }}
              className="reviewOption__icon"
            />
            <h2 className="reviewOption__title">Profiles</h2>
          </div>
          <div>
            <p className="reviewOption__headers">Website</p>
            <h3 className="reviewOption__boldText">www.website.com</h3>
          </div>
          <div>
            <p className="reviewOption__headers">Twitter</p>
            <h3 className="reviewOption__boldText">@twitterlo</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReviewOption;
