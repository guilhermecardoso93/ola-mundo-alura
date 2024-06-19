/* eslint-disable react/prop-types */
import styles from "./styles.module.css";

export function MainButton(props) {
  return (
    <button className={`${styles.botaoPrincical} ${[props.tamanho]}`}>
      {props.titulo}
    </button>
  );
}
