// src/components/GameBoard/GameBoard.jsx

import React from 'react';
import PlanetCard from '../PlanetCard/PlanetCard'; // Adjust the path as needed
import styles from './GameBoard.module.css'; // Import the CSS module
import { exoplanetsData, asteroidData, alienData, moonData } from'../../assets/dataBase/db'
import AsteroidCard from '../AsteroidCard/AsteroidCard';
import AlienCard from '../AlienCard/AlienCard';
import MoonCard from '../MoonCard/MoonCard';

const GameBoard = () => {
    
      
    return (
        <div className={styles.gameBoard}>
            <h1>Planetary Habitability Game</h1>
            <div className={styles.planetCards}>
                {exoplanetsData.map((exoplanet, index) => (
                    <PlanetCard key={index} planetData={exoplanet} />
                ))}
            </div>
            <div className={styles.planetCards}>
                {asteroidData.map((exoplanet, index) => (
                    <AsteroidCard key={index} planetData={exoplanet} />
                ))}
            </div>
            <div className={styles.planetCards}>
                {alienData.map((exoplanet, index) => (
                    <AlienCard key={index} planetData={exoplanet} />
                ))}
            </div>
            <div className={styles.planetCards}>
                {moonData.map((exoplanet, index) => (
                    <MoonCard key={index} planetData={exoplanet} />
                ))}
            </div>
        </div>
    );
};

export default GameBoard;
