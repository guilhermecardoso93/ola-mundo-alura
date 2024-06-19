import { useParams } from "react-router-dom";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import posts from "../../json/posts.json";
import "./styles.css";
import DefaultPost from "../DefaultPost";

export function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if(!post) {
    return <h1>Post Não encontrado</h1>
  }

  return (
    <DefaultPost
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      <div className="post-markdown-container">
        <ReactMarkdown>{post.texto}</ReactMarkdown>
      </div>
    </DefaultPost>
  );
}
