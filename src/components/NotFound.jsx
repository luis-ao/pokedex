import pikachu from "../resources/pikachu.webp";
import styles from "../styles/NotFount.module.css";

export default function NoFound() {
  return (
    <div className={styles.nf}>
      <div className={styles.img}>
        <img src={pikachu} alt="Pikachu triste" />
      </div>
      <div className={styles.text}>
        <p>Ese pokémon aún no ha sido descubierto</p>
      </div>
    </div>
  );
}
