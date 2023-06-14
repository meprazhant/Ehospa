import React from 'react';
import "public/styles/globals.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">EHospa</div>

      <ul className="nav-links">
        <li><a href="#" className="nav-link">Home</a></li>
        <li><a href="#" className="nav-link">About</a></li>
        <li><a href="#" className="nav-link">Doctors</a></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;

