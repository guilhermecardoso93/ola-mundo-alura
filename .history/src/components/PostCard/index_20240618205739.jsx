import { Link } from "react-router-dom";
import "./styles.css";
import { MainButton } from "../MainButton";

export function PostCard(post) {
  const capaPath = `/assets/posts/${post.id}/capa.png`;

  //../../assets/posts/${post.id}/capa.png

  return (
    <Link to={`/posts/${post.id}`}>
      <div className="post">
        <img src={capaPath} alt="Imagem de Capa do Post" className="capa" />
        <h2 className="titulo">{post.titulo}</h2>
        <MainButton titulo='Ler'/>
      </div>
    </Link>
  );
}
