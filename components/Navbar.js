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
        <li><Link href="/DoctorCards" className="nav-link">Doctors</Link></li>
      </ul>

      <Link href="/login"><button className="login-btn">Login</button></Link>
    </nav>
  );
}

export default Navbar;

