/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { MainButton } from "../MainButton";

import "./styles.css";

export  function PostCard({ post }) {
  return (
    <Link to={`/posts/${post.id}`}>
      <div className='post'>
        <img
          className='capa'
          src={`/assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className='titulo'>{post.titulo}</h2>

        <MainButton titulo='Let' />
      </div>
    </Link>
  );
}
