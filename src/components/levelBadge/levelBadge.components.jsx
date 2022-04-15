import React, { useState } from "react";
import "./levelBadge.styles.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PauseIcon from "@mui/icons-material/Pause";

function Levelbadge(props) {
  const [like, setLike] = useState(false);
  const [play, setPlay] = useState(false);
  return (
    <div className="levelbadge">
      <div className="left">
        {!play ? (
          <PlayArrowIcon fontSize="large" onClick={() => setPlay(!play)} />
        ) : (
          <PauseIcon fontSize="large" onClick={() => setPlay(!play)} />
        )}
        <img
          className="smallmusic-banner"
          src={props.music_poster}
          alt={props.music_name}
        />
        <div className="music-display-content">
          <h3>{props.music_name}</h3>
          <p>by {props.artist}</p>
        </div>
      </div>
      <div className="right">
        <div className="bid-status-badge">
          <div className="current-bid-section bid">
            <p>Current Bid</p>
            <h4>ETH {props.current_bid}</h4>
          </div>
          <div className="last-bid-section bid">
            <p>Last Bid</p>
            <h4>ETH {props.last_bid}</h4>
          </div>
        </div>
        {!like ? (
          <FavoriteBorderOutlinedIcon onClick={() => setLike(!like)} />
        ) : (
          <FavoriteIcon onClick={() => setLike(!like)} />
        )}
      </div>
    </div>
  );
}

export default Levelbadge;
