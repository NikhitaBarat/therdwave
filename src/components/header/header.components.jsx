import React from 'react'
import { IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import './header.styles.css'
import logo from '../../assets/logo.png'

function Header() {
  return (
    <header>
    <div className='title'>
      <img src={logo} alt='logo'/>
    </div>
    <div className='rest'>
      Dashboard 
        <SearchIcon fontSize='large' className='header_icon'/>
        <AccountBalanceWalletOutlinedIcon fontSize='large' className='header_icon'/>
        <PermIdentityOutlinedIcon fontSize='large' className='header_icon'/>
    </div>
    </header>
  )
}

export default Header

