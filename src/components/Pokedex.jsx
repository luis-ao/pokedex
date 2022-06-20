import styles from "../styles/Pokedex.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Pokemon from "./Pokemon";
import Pagination from "./Pagination";
import Spinner from "./Spinner";

export default function Pokedex(props) {
  const { pokemons, page, setPage, total, loading } = props;

  const lastPage = () => {
    const nextPage = Math.max(page - 1, 0);
    setPage(nextPage);
  };

  const nextPage = () => {
    const nextPage = Math.min(page + 1, total - 1);
    setPage(nextPage);
  };

  return (
    <div>
      <Container>
        <Row className={styles.pokedex}>
          {loading ? (
            <Spinner />
          ) : (
            <div className={styles.pokedex__grid}>
              {pokemons.map((pokemon, idx) => {
                return <Pokemon pokemon={pokemon} key={pokemon.name} />;
              })}
            </div>
          )}
        </Row>
      </Container>

      <Pagination
        page={page + 1}
        totalPages={total}
        onLeftClick={lastPage}
        onRightClick={nextPage}
      />
    </div>
  );
}
