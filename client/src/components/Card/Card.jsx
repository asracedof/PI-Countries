import styles from '../Card/Card.module.css';

export default function Card(name) {
  return (
    <div>
      <h1 className={styles.cardTitle}>Country:{name}</h1>
    </div>
  );
}
