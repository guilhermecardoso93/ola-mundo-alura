/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MainButton } from "../MainButton";

import styles from "./styles.module.css";

export function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className={styles.post}>
        <img
          className={styles.capa}
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className={styles.titulo}>{post.titulo}</h2>

        <MainButton titulo="Ler" />
      </div>
    </Link>
  );
}
