// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import "./Navbar.css"; // Assuming your CSS is in this file

// const Navbar = () => {
//   const [isNavbarVisible, setNavbarVisible] = useState(false);

//   const toggleNavbar = () => {
//     setNavbarVisible(!isNavbarVisible); // Toggle navbar visibility
//   };

//   return (
//     <header className="header">
//       <div className="header-ham">
//         <a href="/" className="logo"></a>

//         {/* Hamburger Menu for mobile view */}
//         <div className="hamburger" onClick={toggleNavbar}>
//           ☰
//         </div>
//       </div>

//       {/* Navbar Links */}
//       <nav className={`navbar ${isNavbarVisible ? "active" : ""}`}>
//         <ul className="nav-links">
//           <Link to="/login">Login</Link>
//           <Link to="/register">Register</Link>
//         </ul>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;
// import React from 'react';
// import { Link } from 'react-router-dom';

// const Navbar = ({ onLogout }) => {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/login">Login</Link>
//         </li>
//         <li>
//           <Link to="/register">Register</Link>
//         </li>
//         <li>
//           <button onClick={onLogout}>Logout</button>
//         </li>
//       </ul>
//     </nav>
//   );
// };

// export default Navbar;
// src/components/Navbar/Navbar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

const Navbar = ({ onLogout }) => {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/login">Login</Link>
      <Link to="/register">Register</Link>
      <button onClick={onLogout}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
