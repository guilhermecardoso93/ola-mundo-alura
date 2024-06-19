import { Link } from "react-router-dom";
import { MainButton } from "../MainButton";
//import Img from '../../assets/posts/1/capa.png'

import "./styles.css";

export function PostCard(post) {
  //const capaPath = `/assets/posts/${post.id}/capa.png`;

  //../../assets/posts/${post.id}/capa.png

  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <img
          className="capa"
          src={`../../assets/posts/${post.id}/capa.png`}
          alt="Imagem de capa do post"
        />

        <h2 className="titulo">{post.titulo}</h2>

        <MainButton titulo="Ler" />
      </div>
    </Link>
  );
}
