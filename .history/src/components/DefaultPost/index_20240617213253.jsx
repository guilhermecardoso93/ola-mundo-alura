import "./styles.css";

export function DefaultPost(FotoCapa, children, titulo) {
  return (
    <article className="postModeloContainer">
      <div className="fotoCapa" style={{ backgroundImage: FotoCapa }} />
      <h2 className="titulo">{titulo}</h2>
      <div className="postConteudoContainer">{children}</div>
    </article>
  );
}
