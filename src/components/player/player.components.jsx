import React from "react";
import PlayArrowIcon from "@mui/icons-material/PlayArrow"
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious"
import SkipNextIcon from "@mui/icons-material/SkipNext"
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined"
import { IconButton } from "@mui/material"
import { ONEREPUBLIC } from '../../assets'
import './player.styles.css'
function Player() {
  return (
    <div className="player-container">
      <div className="music-banner">
        <img src={ONEREPUBLIC} alt="" />
      </div>

      <div className="levels-player-container">
          <div className="levels-content">
            <h1>Run</h1>
            <p>by OneRepublic</p>
          </div>
          <hr />
          <div className="music-action-button">
            <IconButton>
              <SkipPreviousIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <PlayArrowIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <SkipNextIcon fontSize="large" />
            </IconButton>
            <IconButton>
              <FavoriteBorderOutlinedIcon fontSize="small" />
            </IconButton>
          </div>

          <div className="bid-section">
            <div className="bid-status">
              <div className="current-bid-section bid">
                <p>Current Bid</p>
                <h4>ETH 4.2</h4>
              </div>
              <div className="last-bid-section bid">
                <p>Last Bid</p>
                <h4>ETH 3.75</h4>
              </div>
            </div>
            <button className="place-bid">Place a Bid</button>
          </div>
      </div>
    </div>
  );
}

export default Player;
