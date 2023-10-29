import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../Assets/New Logo.png";
import './Nav.css'; // Import your CSS file

const NavBar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className='image' />
      </div>
      <div className="navbar-divs">
         <Link to="/home" className="nav-item">Home</Link>
     <Link to="/Dashboard" className="nav-item">Dashboard</Link>
        <div className="nav-item">Earn</div>
        <div className="nav-item">NFT</div>
        <div className="nav-item">Buy</div>
        <div className="nav-item">Referrals</div>
        <div className="nav-item">Ecosystem</div>
        <div className="nav-item">About</div>
      </div>
      <button className="trade-button">Trade</button>
      <div className="connect-wallet-box">Connect Wallet</div>
      <div className="three-dots">
        <span>.</span>
        <span>.</span>
        <span>.</span>
      </div>
    </nav>
  );
}

export default NavBar;
