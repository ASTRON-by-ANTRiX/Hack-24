import styles from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <p>The Game</p>
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
