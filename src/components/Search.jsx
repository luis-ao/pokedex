import styles from "../styles/Search.module.css";
import { useState } from "react";

export default function Search(props) {
  const { onSearch } = props;
  const [search, setSearch] = useState("");

  const onChange = (e) => {
    setSearch(e.target.value.toLocaleLowerCase());
    if (e.target.value.length === 0) {
      onSearch(null);
    }
  };

  const onClick = async (e) => {
    onSearch(search);
  };

  return (
    <div className={styles.container}>
      <div className={styles.search__input}>
        <input placeholder="Buscar pokemon..." onChange={onChange} />
      </div>
      <div className={styles.search__btn}>
        <button onClick={onClick}>Buscar</button>
      </div>
    </div>
  );
}
