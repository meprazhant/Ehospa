import React from 'react';
import Link from 'next/link';
import "public/styles/globals.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">EHospa</div>

      <ul className="nav-links">
        <li><Link href="/" className="nav-link">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><a href="/DoctorCards" className="nav-link">Doctors</a></li>
      </ul>

      <button className="login-btn">Login</button>
    </nav>
  );
}

export default Navbar;

