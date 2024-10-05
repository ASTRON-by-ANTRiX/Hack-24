import React from 'react';
import styles from './MoonCard.module.css'; // Import CSS module
import samplePlaneImage from '../../assets/group.png'; 

const MoonCard = ({ planetData }) => {
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
        <p className={styles.description}>1 Day: <br/><p className={styles.values}>{day}</p></p>
        <p className={styles.description}>Distance from Host Star: <br/><p className={styles.values}>{distanceFromHostStar}</p></p>
        <p className={styles.description}>1 Year: <br/><p className={styles.values}>{year}</p></p>
      </div>
      <div className={styles.yod}>
      <p className={styles.description}>Year of Discovery: <br/><p className={styles.values}>{yearOfDiscovery}</p></p>
      </div>
      <div className={styles.outerSubInfo}>
        <div className={styles.innerSubInfo}>
        <p className={styles.description}>Mass: <br/><p className={styles.values}>{mass}</p></p>
        <p className={styles.description}>Gravity: <br/><p className={styles.values}>{gravity}</p></p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.innerSubInfo}>
        <p className={styles.description}>Planet Type: <br/><p className={styles.values}>{planetType}</p></p>
        <p className={styles.description}>Asteroid Hits:<br/><p className={styles.values}>{asteroidHits}</p></p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.innerSubInfo}>
        <p className={styles.description}>Atmosphere: <br/><p className={styles.values}>{atmosphere}</p></p>
        <p className={styles.oscore}>Overall<br/> Score:  <br/><p className={styles.valuesScore}>{overallScore}</p></p>
        </div>
      </div>
      
      
    </div>
  );
};

export default MoonCard;
