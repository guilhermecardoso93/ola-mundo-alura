import { useParams } from "react-router-dom";
import posts from "../../json/posts.json";
import "./styles.css";
import DefaultPost from "../DefaultPost";

export function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  return (
    <DefaultPost
      fotoCapa={`/assets/posts/${post.id}/capa.png`}
      titulo={post.titulo}
    >
      texto...
    </DefaultPost>
  );
}
