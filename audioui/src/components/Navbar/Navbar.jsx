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

const Navbar = ({ onLogout }) => {
  return (
    <nav style={{ padding: '10px', backgroundColor: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', marginRight: '15px' }}>Home</Link>
      <Link to="/login" style={{ color: '#fff', marginRight: '15px' }}>Login</Link>
      <Link to="/register" style={{ color: '#fff', marginRight: '15px' }}>Register</Link>
      <button onClick={onLogout} style={{ color: '#fff', backgroundColor: '#333', border: 'none', cursor: 'pointer' }}>
        Logout
      </button>
    </nav>
  );
};

export default Navbar;
