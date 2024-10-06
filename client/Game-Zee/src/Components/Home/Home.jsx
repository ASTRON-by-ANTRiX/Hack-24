import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div className={styles.mainTitle}><p>Astron</p></div>
        <div className={styles.tagLine}><p>The Planet Hut</p></div>
      </div>
      <div>
      <Link to="/game">
        <button className={styles.button}>
          Play
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
