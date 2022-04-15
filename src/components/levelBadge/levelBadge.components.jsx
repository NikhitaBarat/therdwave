import React from "react";
import "./levelBadge.styles.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

function Levelbadge() {
  return (
    <div className="levelbadge">
      <div className="left">
        <PlayArrowIcon fontSize="large" />
        <img
          className="music-banner"
          src={
            "https://i.pinimg.com/originals/41/a0/59/41a0593ec5c6562e838f349aba5ae9ef.jpg"
          }
          alt=""
        />
      </div>
      <div className="right">
        <FavoriteBorderOutlinedIcon />
      </div>
    </div>
  );
}

export default Levelbadge;
