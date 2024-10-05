import React, { useState } from 'react';
import styles from './PlanetCard.module.css'; // Import CSS module

const PlanetCard = ({ planetData }) => {
  const { name, image, atmosphere, size, mass, angularVelocity, distanceFromStar, revolution, moons } = planetData;

  const [currentMass, setCurrentMass] = useState(mass);
  const [currentDistance, setCurrentDistance] = useState(distanceFromStar);
  const [currentRevolution, setCurrentRevolution] = useState(revolution);
  const [currentMoons, setCurrentMoons] = useState(moons);

  const handleMassChange = (e) => setCurrentMass(e.target.value);
  const handleDistanceChange = (e) => setCurrentDistance(e.target.value);
  const handleRevolutionChange = (e) => setCurrentRevolution(e.target.value);
  const handleMoonsChange = (e) => setCurrentMoons(e.target.value);

  return (
    <div className={styles.planetCard}>
      <img src={image} alt={`${name}`} className={styles.planetImage} />

      <h2 className={styles.title}>{name}</h2>

      <p className={styles.description}>Atmosphere: {atmosphere}</p>
      <p className={styles.description}>Size: {size}</p>
      <p className={styles.description}>Angular Velocity: {angularVelocity}</p>

      <div className={styles.editableFields}>
        <label>
          Mass:
          <input
            type="number"
            value={currentMass}
            onChange={handleMassChange}
          />
        </label>

        <label>
          Distance from Star:
          <input
            type="number"
            value={currentDistance}
            onChange={handleDistanceChange}
          />
        </label>

        <label>
          Revolution (in Earth years):
          <input
            type="number"
            value={currentRevolution}
            onChange={handleRevolutionChange}
          />
        </label>

        <label>
          Number of Moons:
          <input
            type="number"
            value={currentMoons}
            onChange={handleMoonsChange}
          />
        </label>
      </div>
    </div>
  );
};

export default PlanetCard;
