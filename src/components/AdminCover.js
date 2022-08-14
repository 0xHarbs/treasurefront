import "../styles/App.css";
import "../styles/AdminCover.css";

function AdminCover() {
  return (
    <div className="adminCover">
      <div className="adminCover__text">
        <h3>REVIEW POOL INFO</h3>
        <h1>Manage Pools</h1>
      </div>
      <div className="adminCover__stats">
        <div className="panel__statsContainer">
          <div className="adminCover__stat">
            <h3>6</h3>
            <p>Active pools</p>
          </div>
          <div className="adminCover__stat">
            <h3>3</h3>
            <p>Pending pools</p>
          </div>
          <div className="adminCover__stat">
            <h3>1</h3>
            <p>Expired pool</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdminCover;
