import React from 'react';
import styles from './AlienCard.module.css'; // Import CSS module
import samplePlaneImage from '../../assets/group.png'; 

const AlienCard = ({ planetData }) => {
  const {
    name,
      species,
      strength,
      intention,
      techLevel,
      language,
      specialPowers,
      weakness,
      overallEffect,
  } = planetData;

  return (
    <div className={styles.planetCard}>
      <div className={styles.topLine}></div>
      <div className={styles.topLeftInfo}>
        <h2 className={styles.title}>{name}</h2>
        <p className={styles.description}>Species: <br/><p className={styles.values}>{species}</p></p>
        <p className={styles.description}>Strength: <br/><p className={styles.values}>{strength}</p></p>
        <p className={styles.description}>Intention: <br/><p className={styles.values}>{intention}</p></p>
        <p className={styles.description}>Tech Level: <br/><p className={styles.values}>{techLevel}</p></p>
      </div>
      <div className={styles.yod}>
      <p className={styles.description}>Language: <br/><p className={styles.values}>{language}</p></p>
      </div>
      <div className={styles.outerSubInfo}>
        <div className={styles.innerSubInfo}>
        <p className={styles.description}>Special Powers: <br/><p className={styles.values}>{specialPowers}</p></p>
        <p className={styles.description}>Weakness: <br/><p className={styles.values}>{weakness}</p></p>
        </div>
        <div className={styles.verticalLine}></div>
        <div className={styles.innerSubInfo}>
        <p className={styles.oscore}>Overall<br/> Effect:  <br/><p className={styles.valuesScore}>{overallEffect}</p></p>
        </div>
      </div>
      
      
    </div>
  );
};

export default AlienCard;
