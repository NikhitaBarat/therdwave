import React from "react";
import "./dashboard.styles.css";
import Player from "../../components/player/player.components";

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="text">Royalty Marketplace for Creators.</div>
      <Player />
    </div>
  );
}
export default Dashboard;
