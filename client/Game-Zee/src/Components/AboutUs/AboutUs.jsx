// src/Components/About/About.jsx
import React from 'react';
import styles from './AboutUs.module.css'; // Import the CSS module

const About = () => {
  return (
    <div className={styles.aboutContainer}>
      <h2 className={styles.title}>About Us</h2>
      <div><p className={styles.description}>Welcome to Astron, a game born from our fascination with the cosmos and a desire to make the wonders of space exploration accessible to everyone. We are a group of passionate space enthusiasts, educators, and game designers united by a single goal: to transform complex scientific concepts into engaging and interactive experiences.</p></div>
      <div><p className={styles.description}>Our Vision</p></div>
      <div><p className={styles.description}>The universe is a vast and complex playground filled with hidden worlds and untold stories. Our mission is to inspire curiosity and scientific thinking by allowing players to step into the shoes of astronomers and explorers. By blending real-world astronomical methods with strategic gameplay, Astron offers a chance to experience the thrill of discovery firsthand.</p></div>
      <div><p className={styles.description}>What Makes Us Unique</p></div>
      <div><p className={styles.description}>Our team draws on expertise in astrophysics, game design, and education to create a game that is not just fun, but also scientifically accurate. From understanding star evolution to applying techniques like Radial Velocity and Transit Detection, each aspect of the game is designed to reflect authentic planetary science in a simplified and engaging format.</p></div>
      <div><p className={styles.description}>Meet the Creators</p></div>
      <div><p className={styles.description}>Behind Astron is a dedicated team of enthusiasts who believe in the power of games to teach and inspire:</p></div>
      <div><p className={styles.description}>Space Enthusiasts: With a passion for the mysteries of the universe, we strive to make space science accessible to all.</p></div>
      <div><p className={styles.description}>Educators: We ensure that every rule and concept in the game is backed by solid science, making learning a part of the fun.</p></div>
      <div><p className={styles.description}>Game Designers: We work to balance educational content with engaging mechanics, ensuring the game remains strategic and enjoyable.
Join Us on Our Mission!
We believe that learning should never be limited to textbooks. With Astron, we aim to ignite a love for space and exploration in everyone, whether you’re a seasoned scientist or just someone who dreams of the stars.
</p></div>
      <div><p className={styles.description}>Embark on your journey, discover new worlds, and shape the future of your star system. The universe is waiting!</p></div>
      <div><p className={styles.description}>Happy Exploring,</p></div>
      <div><p className={styles.description}>Astron Team</p></div>
    </div>
  );
};

export default About;
