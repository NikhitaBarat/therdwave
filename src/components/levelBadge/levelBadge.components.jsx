import React from "react";
import "./levelBadge.styles.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { IconButton } from "@mui/material";

function Levelbadge() {
  return (
    <div className="levelbadge">
      <div className="left">
        <PlayArrowIcon />
      </div>
      <div className="right">
        <FavoriteBorderOutlinedIcon />
      </div>
    </div>
  );
}

export default Levelbadge;
