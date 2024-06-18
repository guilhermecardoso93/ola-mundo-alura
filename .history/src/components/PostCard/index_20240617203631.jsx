import "./styles.css";

export function PostCard(post) {
  const capaPath = `/assets/posts/${post.id}/capa.png`;

  return (
    <div className="post">
      <img src={capaPath} alt="Imagem de Capa do Post" className="capa" />
      <h2 className="titulo">{post.titulo}</h2>
      <button className="botaoLer">Ler</button>
    </div>
  );
}
