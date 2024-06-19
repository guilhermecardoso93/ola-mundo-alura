import styles from "./PostModelo.module.css";

// eslint-disable-next-line react/prop-types
export function DefaultPost({ children, fotoCapa, titulo }) {
  return (
    <article className={styles.postModeloContainer}>
      <div
        className={styles.fotoCapa}
        style={{ backgroundImage: `url(${fotoCapa})` }}
      ></div>

      <h2 className={styles.titulo}>{titulo}</h2>

      <div className={styles.postConteudoContainer}>{children}</div>
    </article>
  );
}
