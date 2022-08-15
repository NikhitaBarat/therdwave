import React, { useState } from "react"
import "./header.styles.css"
import logo from "../../assets/logo.png"
import { Link } from 'react-router-dom'
import Deso from 'deso-protocol';

// MUI MODULES
import SearchIcon from "@mui/icons-material/Search"
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined"
import PermIdentityOutlinedIcon from "@mui/icons-material/PermIdentityOutlined"


function Header() {
  const [isnotAuth, setnotAuth] = useState(null)
  const deso = new Deso()
  var key = ""
  // deso login
  const LoginDeso = async () =>{
    const request = 3
    const response = await deso.identity.login(request)
    console.log(response)
    key = response.key
    setnotAuth(false)

  }
  
  // deso logout
  const logoutDeso = async () => {
    const response = await deso.identity.logout(key)
    console.log(response)
    setnotAuth(response)
  }
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
            {isnotAuth ? "NOT AUTH" : "AUTH"}
            <PermIdentityOutlinedIcon
              onClick={isnotAuth ? LoginDeso : logoutDeso}
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
