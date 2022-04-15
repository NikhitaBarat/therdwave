import React from "react"
import "./header.styles.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'

// MUI MODULES
import SearchIcon from "@mui/icons-material/Search"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"


function Header() {
  return (
    <header>
      <div className="logo-container">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navigation-option">
        <ul>
          <li>
            <Link to="/dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            <SearchIcon fontSize="medium" className="header_icon" />
          </li>
          <li>
            <AccountBalanceWalletOutlinedIcon
              fontSize="medium"
              className="header_icon"
            />
          </li>
          <li>
            <PermIdentityOutlinedIcon
              fontSize="medium"
              className="header_icon"
            />
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;
