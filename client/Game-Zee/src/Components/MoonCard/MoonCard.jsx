import React from 'react';
import styles from './MoonCard.module.css'; // Import CSS module
import samplePlaneImage from '../../assets/group.png'; 

const MoonCard = ({ planetData }) => {
  const {
    name,
    size,
    gravity,
    atmosphere,
    waterContent,
    orbitalPeriod,
    surfaceComposition,
    specialProperties,
    overallEffect,
  } = planetData;

  return (
    <div className={styles.planetCard}>
      <div className={styles.topLine}></div>
      <div className={styles.topLeftInfo}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>size: <br/><p className={styles.values}>{size}</p></p>
        <p className={styles.description}>gravity: <br/><p className={styles.values}>{gravity}</p></p>
        <p className={styles.description}>atmosphere: <br/><p className={styles.values}>{atmosphere}</p></p>
        <p className={styles.description}>waterContent: <br/><p className={styles.values}>{waterContent}</p></p>
      </div>
      <div className={styles.yod}>
      <p className={styles.description}>Orbital Period: <br/><p className={styles.values}>{orbitalPeriod}</p></p>
      </div>
      <div className={styles.outerSubInfo}>
        <div className={styles.innerSubInfo}>
        <p className={styles.description}>surface Composition: <br/><p className={styles.values}>{surfaceComposition}</p></p>
        <p className={styles.description}>special properties: <br/><p className={styles.values}>{specialProperties}</p></p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.innerSubInfo}>
        <p className={styles.oscore}>Overall<br/> Effect:  <br/><p className={styles.valuesScore}>{overallEffect}</p></p>
        </div>
      </div>
      
      
    </div>
  );
};

export default MoonCard;
