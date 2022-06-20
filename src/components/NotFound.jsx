import pikachu from "../resources/pikachu.webp";
import styles from "../styles/NotFount.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

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
