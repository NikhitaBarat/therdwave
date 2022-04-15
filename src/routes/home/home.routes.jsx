import React from "react";
import "./home.styles.css";
import album from "../../assets/album.png";
import { Player } from "../../components";
function Home() {
  return (
    <div className="home-page">
      <div className="home">
        <img src={album} alt="" />
        <div className="top-right">
          <span className="blockchain">Blockchain</span>
          <div className="text">
            Decentralized Music Rights{" "}
            <span className="span">Marketplace.</span>
          </div>
        </div>
      </div>
      <hr className="hr-line" />
      <div className="text-2">
        <h2>Royalty Marketplace for Creators.</h2>
      </div>
      <Player />

      <hr className="hr-line" />
      <div className="abstract-image"></div>

      <div className="featuerd-music-section">
        <h2>Featured Music</h2>
        <div className="feat-music-container">
          {/* add the component here */}
        </div>
      </div>
    </div>
  );
}

export default Home;
