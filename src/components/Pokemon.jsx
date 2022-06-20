import styles from "../styles/Pokemon.module.css";

export default function Pokemon(props) {
  const { pokemon } = props;

  return (
    <div className={styles.card}>
      <div className={styles.card__img}>
        <img
          src={pokemon.sprites.front_default}
          alt={pokemon.name}
        />
      </div>

      <div className={styles.card__body}>
        <div className={styles.card__name}>
          <h3>{pokemon.name}</h3>
          <div>#{pokemon.id}</div>
        </div>
        <div className={styles.card__type}>
          {pokemon.types.map((type, idx) => {
            return (
              <div key={idx} className={styles.card__typeText}>
                {type.type.name}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
