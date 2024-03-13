// src/components/Header.js

import React from 'react';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <h1 className="logo">College Placement Portal</h1>
          <ul className="nav-menu">
            <li className="nav-item"><a href="#features">Features</a></li>
            <li className="nav-item"><a href="#testimonials">Testimonials</a></li>
            <li className="nav-item"><a href="#footer">Contact</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Header;
