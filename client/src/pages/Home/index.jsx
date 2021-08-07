import NewCarousel from "../../components/Carousel/Carousel";

import styles from "./index.module.scss";

const Home = () => {
  return (
    <div className={styles.home}>
      {/* <h2 style={{ textAlign: "center" }}>Home</h2> */}
      <NewCarousel />
    </div>
  );
};

export default Home;
