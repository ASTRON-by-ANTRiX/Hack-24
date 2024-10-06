// src/Components/NavBar/NavBar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Astron</h1>
      </div>
      <ul className={styles.navLinks}>
        <li><Link to ="/">Home</Link></li>
        <li><Link to="/rules">Rules</Link></li>
        <li><Link to="/about">About Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
