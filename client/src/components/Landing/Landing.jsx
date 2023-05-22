import styles from "../Landing/Landing.module.css";
import { Link } from "react-router-dom";
import LoginBtn from "../Icons/LoginBtn";

export default function Landing() {
  return (
    <div className={styles.landingContainer}>
      <h2 className={styles.animation}>
        Welcome to Roaming!<br />
        The fun starts here
      </h2>
      <Link to="/home" className={styles.exploreLink}>
      <div className={styles.btnConteiner}>
  <a className={styles.btnContent} href="#">
    <span className={styles.btnTitle}>EXPLORE</span>
    <span className={styles.iconArrow}>
       <LoginBtn/>
       </span>
       </a>
       </div>
      </Link>
    </div>
  );
}
