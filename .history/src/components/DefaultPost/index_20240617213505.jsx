import "./styles.css";

export function DefaultPost(fotoCapa, children, titulo) {
  return (
    <article className="postModeloContainer">
      <div className="fotoCapa" style={{backgroundImage: `${fotoCapa} `}} />
      <h2 className="titulo">{titulo}</h2>
      <div className="postConteudoContainer">{children}</div>
    </article>
  );
}
