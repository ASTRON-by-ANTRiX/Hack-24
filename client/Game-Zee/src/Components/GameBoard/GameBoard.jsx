// src/components/GameBoard/GameBoard.jsx

import React from 'react';
import PlanetCard from '../PlanetCard/PlanetCard'; // Adjust the path as needed
import styles from './GameBoard.module.css'; // Import the CSS module
import exoplanetsData from '../../assets/dataBase/db'

const GameBoard = () => {
    
      
    return (
        <div className={styles.gameBoard}>
            <h1>Planetary Habitability Game</h1>
            <div className={styles.planetCards}>
                {exoplanetsData.map((exoplanet, index) => (
                    <PlanetCard key={index} planetData={exoplanet} />
                ))}
            </div>
        </div>
    );
};

export default GameBoard;
