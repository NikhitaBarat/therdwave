import React from "react";
import "./dashboard.styles.css";
import { Player, Levelbadge, Featured } from "../../components";

function Dashboard() {
  return (
    <div className="dashboard">
      <Player />
      <hr className="hr-line" />
      <div className="records-container">
        <Levelbadge />
        <Levelbadge />
        <Levelbadge />
        <button className="loadmore">Load More....</button>
      </div>
      <div className="featuerd-music-section">
        <h2>Featured Music</h2>
        <div className="feat-music-container">
          <Featured />
        </div>
      </div>
    </div>
  );
}
export default Dashboard;
