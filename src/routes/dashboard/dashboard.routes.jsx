import React, { useEffect, useState } from "react";
import "./dashboard.styles.css";
import { Player, Levelbadge, Featured } from "../../components";
import axios from "../../config/axios";

function Dashboard() {
  const [musicLevels, setmusicLevel] = useState([]);
  useEffect(() => {
    axios
      .get("api/all/music")
      .then((res) => {
        console.log(res.data);
        setmusicLevel(res.data);
      })
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="dashboard">
      <Player />
      <hr className="hr-line" />
      <div className="records-container">
        {musicLevels?.slice(0, 3).map((data) => (
          <Levelbadge {...data}/>
        ))}
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
