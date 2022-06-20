import styles from "../styles/Pagination.module.css";

export default function Pagination(props) {
  const { onLeftClick, onRightClick, page, totalPages } = props;

  return (
    <div className={styles.pagination}>
      <button className={styles.pagination__btn} onClick={onLeftClick}>
        <div>
          <svg
            className={styles.icon}
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentcolor"
              d="m13.789 7.155c.141-.108.3-.157.456-.157.389 0 .755.306.755.749v8.501c0 .445-.367.75-.755.75-.157 0-.316-.05-.457-.159-1.554-1.203-4.199-3.252-5.498-4.258-.184-.142-.29-.36-.29-.592 0-.23.107-.449.291-.591 1.299-1.002 3.945-3.044 5.498-4.243z"
            />
          </svg>
        </div>
      </button>
      <div className={styles.pagination__text}>
        {page} de {totalPages}
      </div>
      <button className={styles.pagination__btn} onClick={onRightClick}>
        <div>
          <svg
            className={styles.icon}
            clip-rule="evenodd"
            stroke-linejoin="round"
            stroke-miterlimit="2"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="currentcolor"
              d="m10.211 7.155c-.141-.108-.3-.157-.456-.157-.389 0-.755.306-.755.749v8.501c0 .445.367.75.755.75.157 0 .316-.05.457-.159 1.554-1.203 4.199-3.252 5.498-4.258.184-.142.29-.36.29-.592 0-.23-.107-.449-.291-.591-1.299-1.002-3.945-3.044-5.498-4.243z"
            />
          </svg>
        </div>
      </button>
    </div>
  );
}
