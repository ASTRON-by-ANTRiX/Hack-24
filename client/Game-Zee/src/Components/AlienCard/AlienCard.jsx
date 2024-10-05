import React from 'react';
import styles from './AlienCard.module.css'; // Import CSS module
import samplePlaneImage from '../../assets/group.png'; 

const AlienCard = ({ planetData }) => {
  const {
    planetName,
    day,
    atmosphere,
    mass,
    gravity,
    distanceFromHostStar,
    year,
    yearOfDiscovery,
    asteroidHits,
    overallScore,
    planetType,
  } = planetData;

  return (
    <div className={styles.planetCard}>
      <div className={styles.topLine}></div>
      <div className={styles.topLeftInfo}>
        <h2 className={styles.title}>{planetName}</h2>
        <p className={styles.description}>Species: <br/><p className={styles.values}>{day}</p></p>
        <p className={styles.description}>Strength: <br/><p className={styles.values}>{distanceFromHostStar}</p></p>
        <p className={styles.description}>Intention: <br/><p className={styles.values}>{year}</p></p>
        <p className={styles.description}>Tech Level: <br/><p className={styles.values}>{year}</p></p>
      </div>
      <div className={styles.yod}>
      <p className={styles.description}>Language: <br/><p className={styles.values}>{yearOfDiscovery}</p></p>
      </div>
      <div className={styles.outerSubInfo}>
        <div className={styles.innerSubInfo}>
        <p className={styles.description}>Special Powers: <br/><p className={styles.values}>{mass}</p></p>
        <p className={styles.description}>Weakness: <br/><p className={styles.values}>{gravity}</p></p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.innerSubInfo}>
        <p className={styles.oscore}>Overall<br/> Effect:  <br/><p className={styles.valuesScore}>{overallScore}</p></p>
        </div>
      </div>
      
      
    </div>
  );
};

export default AlienCard;
