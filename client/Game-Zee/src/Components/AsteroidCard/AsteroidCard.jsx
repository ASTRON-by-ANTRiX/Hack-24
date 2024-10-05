import React from 'react';
import styles from './AsteroidCard.module.css'; // Import CSS module
import samplePlaneImage from '../../assets/group.png'; 

const AsteroidCard = ({ planetData }) => {
  const {
    name,
    velocity,
    size,
    frequency,
    yearOfDiscovery,
    mass,
    stability,
    waterContent,
    mineralDeposits,
    overallImpact,
  } = planetData;

  return (
    <div className={styles.planetCard}>
      <div className={styles.topLine}></div>
      <div className={styles.topLeftInfo}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>Velocity: <br/><p className={styles.values}>{velocity}</p></p>
        <p className={styles.description}>Size: <br/><p className={styles.values}>{size}</p></p>
        <p className={styles.description}>Frequency: <br/><p className={styles.values}>{frequency}</p></p>
      </div>
      <div className={styles.yod}>
      <p className={styles.description}>Year of Discovery: <br/><p className={styles.values}>{yearOfDiscovery}</p></p>
      </div>
      <div className={styles.outerSubInfo}>
        <div className={styles.innerSubInfo}>
        <p className={styles.description}>Mass: <br/><p className={styles.values}>{mass}</p></p>
        <p className={styles.description}>Stability: <br/><p className={styles.values}>{stability}</p></p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.innerSubInfom}>
        <p className={styles.mineralDeposits}>Mineral Deposits: <br/><p className={styles.values}>{mineralDeposits}</p></p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.innerSubInfo}>
        <p className={styles.description}>Water: <br/><p className={styles.values}>{waterContent}</p></p>
        <p className={styles.oscore}>Overall<br/> Impact:  <br/><p className={styles.valuesScore}>{overallImpact}</p></p>
        </div>
      </div>
      
      
    </div>
  );
};

export default AsteroidCard;
