import React from "react";
import "./dashboard.styles.css";
import { Player, Levelbadge } from "../../components";

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
    </div>
  );
}
export default Dashboard;
