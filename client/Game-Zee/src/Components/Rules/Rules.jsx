import React, { useState } from 'react';
import styles from './Rules.module.css';  // Import the CSS module
import { Link } from 'react-router-dom';

const RuleBookMenu = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);

  // Function to open the modal and set the content
  const openModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  // Content for different buttons
  const gameComponents = (
    <div className={styles.modalBody}>
      <h1>1. Game Components:</h1>
      <ul>
        <li><strong>Planet Cards:</strong> Each card has unique stats (Mass, Distance from Star, Atmosphere, Surface Temperature, etc.).</li>
        <li><strong>Star Cards:</strong> Defines the star's type (Sun-like, Red Dwarf, etc.) and its life cycle phase (Main Sequence, Red Giant, White Dwarf).</li>
        <li><strong>Habitable Zone Board:</strong> Displays the position of the habitable zone according to the star's type.</li>
        <li><strong>Detection Method Cards:</strong> Five methods for discovering planets (Transit, Radial Velocity, Direct Imaging, Microlensing, Astrometry).</li>
        <li><strong>Charts:</strong> Light Curve, Spectral Shift, and Position Charts used to analyze planetary data.</li>
        <li><strong>Event Cards:</strong> Random events like Solar Flares, Orbital Shifts, and Planetary Collisions.</li>
        <li><strong>Telescope Tokens:</strong> Limited-use tokens for Direct Imaging of planets.</li>
      </ul>
    </div>
  );

  const gameSetup = (
    <div className={styles.modalBody}>
      <h2>2. Game Setup:</h2>
      <ol>
        <li><strong>Select a Star Card:</strong> Randomly assign a Star Card.</li>
        <li><strong>Draw Planet Cards:</strong> Start with three random planet cards (not yet discovered).</li>
        <li><strong>Set Up the Habitable Zone Board:</strong> Place the habitable zone as per the star's current life stage.</li>
        <li><strong>Choose Detection Method:</strong> Shuffle and draw three Detection Method Cards to be used during each turn.</li>
      </ol>
    </div>
  );

  const gamePhases = (
    <div className={styles.modalBody}>
      <h3>Game Phases:</h3>
      <div>
        <h4>Phase 1: Planet Detection Phase</h4>
        <p>Players select a Detection Method to search for planets around their star. Each method has unique mechanics:</p>
        <ol>
          <li>
            <strong>Transit Method:</strong>
            <ul>
              <li>Draw a Light Curve card.</li>
              <li>Analyze brightness dips to determine planet size and distance from the star.</li>
            </ul>
          </li>
          <li>
            <strong>Radial Velocity Method:</strong>
            <ul>
              <li>Draw a Spectral Shift card.</li>
              <li>Evaluate the planet's mass and orbital period based on the red/blue shifts.</li>
            </ul>
          </li>
          <li>
            <strong>Direct Imaging:</strong>
            <ul>
              <li>Spend one Telescope Token to observe the star system.</li>
              <li>Roll a die:
                <ul>
                  <li>1-3: No planet detected.</li>
                  <li>4-5: Distant gas giant detected.</li>
                  <li>6: Rocky planet within a possible habitable zone detected.</li>
                </ul>
              </li>
            </ul>
          </li>
        </ol>
      </div>
      <div>
        <h4>Phase 2: Planetary Analysis Phase</h4>
        <p>Place the discovered planets on the Habitable Zone Board.</p>
        <p>Evaluate planet class, mineral content, and size to assess its habitability.</p>
        <ul>
          <li><strong>Habitable Zone:</strong> +50 points</li>
          <li><strong>Distance from Star:</strong> Within 1-2 AU = +10 points</li>
          <li><strong>Mineral Content:</strong> Rich = +20 points, Thin = -3 points</li>
          <li><strong>Atmosphere:</strong> Thick = +10 points</li>
          <li><strong>Orbital Stability:</strong> Stable orbit = +5 points</li>
          <li><strong>Special Conditions:</strong> +/- points depending on traits (e.g., volcanic activity)</li>
        </ul>
      </div>
      <div>
        <h4>Phase 3: Star Evolution Phase</h4>
        <p>Advance the star's life cycle according to the Star Card.</p>
        <p>Adjust the Habitable Zone on the board based on the star's new stage.</p>
        <p>Planets may shift into or out of the habitable zone, changing their habitability.</p>
      </div>
      <div>
        <h4>Phase 4: Random Event Phase</h4>
        <p>Draw an Event Card and apply its effect. For example:</p>
        <ul>
          <li><strong>Solar Flare:</strong> Reduces habitability score by -3 points.</li>
          <li><strong>Orbital Drift:</strong> Adjusts planet's distance from the star.</li>
          <li><strong>Planetary Collision:</strong> Lose a detected planet.</li>
        </ul>
      </div>
    </div>
  );

  const victoryConditions = (
    <div className={styles.modalBody}>
      <h4>4. Victory Conditions:</h4>
      <p>
        The game ends when the star reaches its final stage (e.g., White Dwarf). Calculate the total Habitability Score for all planets placed in the habitable zone and compare it to the benchmarks:
      </p>
      <ul>
        <li>
          <strong>0-20:</strong> "Doomed System" — No life potential in the star system.
        </li>
        <li>
          <strong>21-50:</strong> "Barren Wasteland" — Some planets show potential, but most are uninhabitable.
        </li>
        <li>
          <strong>51-80:</strong> "Emerging System" — A few planets show potential for life.
        </li>
        <li>
          <strong>81-100+:</strong> "Thriving System" — Multiple habitable planets ensure a diverse and vibrant system.
        </li>
      </ul>
    </div>
  );

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Planetary Habitability Game - The Rule Book</h1>
      <div className={styles.overview}>
        <h2>Game Overview</h2>
        <p>
          In the Planetary Habitability Game, players use scientific methods to discover planets and place them in the habitable zone of a star system before the star reaches the end of its life cycle. Players will search for planets, determine their habitability, and adapt to the evolving star system's conditions.
        </p>
      </div>
      <div className={styles.menu}>
        <button className={styles.button} onClick={() => openModal(gameComponents)}>1. Game Components</button>
        <button className={styles.button} onClick={() => openModal(gameSetup)}>2. Game Setup</button>
        <button className={styles.button} onClick={() => openModal(gamePhases)}>3. Game Phases</button>
        <button className={styles.button} onClick={() => openModal(victoryConditions)}>4. Victory Conditions</button>
      </div>
      <div className={styles.playNowContainer}>
        <p>Understood the rules? Ready to play &rarr;</p>
        <Link to="/game"><button className={styles.playNowButton}>Play Now</button></Link>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className={styles.modalOverlay}>
          <div className={styles.modalContent}>
            <button className={styles.closeButton} onClick={closeModal}>✖</button>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default RuleBookMenu;
