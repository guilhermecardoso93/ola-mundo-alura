import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import posts from "../../json/posts.json";
import "./styles.css";
import DefaultPost from "../DefaultPost";
import { PageNotFound } from "../PageNotFound";
import { DefaultPage } from "../DefaultPage";

export function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <PageNotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<DefaultPage />}>
        <Route
          index
          element={
            <DefaultPost
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.texto}</ReactMarkdown>
              </div>
            </DefaultPost>
          }
        />
      </Route>
    </Routes>
  );
}
