import React, { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h1>Brand</h1>
      </div>
      <ul className={`${styles.navLinks} ${isMobile ? styles.mobileMenu : ''}`}>
        <li><a href="#home">Home</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <button className={styles.mobileMenuIcon} onClick={toggleMobileMenu}>
        {isMobile ? '✖' : '☰'}
      </button>
    </nav>
  );
};

export default Navbar;
