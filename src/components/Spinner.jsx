import styles from "../styles/Spinner.module.css";
import pokeball from "../resources/pokeball.webp";

export default function Spinner() {
  return (
    <div className={styles.container}>
      <img className={styles.img} src={pokeball} 
      alt="Loading..."
      />
    </div>
  );
}
