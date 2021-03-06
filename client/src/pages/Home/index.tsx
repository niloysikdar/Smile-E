import { Link } from 'react-router-dom';

import NewCarousel from '../../components/Carousel/Carousel';
import styles from './index.module.scss';

const Home = () => {
  return (
    <div className={styles.home}>
      <NewCarousel />
      <div className={styles.content}>
        <h2>Smile-E</h2>
        <h3>Sharing smiles with the world</h3>
        <div className={styles.buttons}>
          <Link to='/partnership' className={styles.button}>
            Partnership
          </Link>
          <Link to='/partnership' className={styles.button}>
            Join Us
          </Link>
        </div>
        <Link to='/dashboard' className={styles.button}>
          Our Work
        </Link>
      </div>
    </div>
  );
};

export default Home;
