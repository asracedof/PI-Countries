import styles from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <h2 className={styles.animation}>
        Welcome to Roaming!<br />
        The fun starts here
      </h2>
      <Link className={styles.exploreButton} to="/home">
        Explore
      </Link>
    </div>
  );
}
