import './styles';

export function PostCard(post) {
  const capaPath = `./assets/posts/${post.id}/capa.png`
  return (
    <div className="post">
        <img src={capaPath} alt='Imagem de Capa do Post' className="capa"/>
    </div>
  )
}