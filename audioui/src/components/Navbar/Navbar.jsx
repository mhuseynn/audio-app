
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
