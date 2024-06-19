import { Route, Routes, useParams } from "react-router-dom";
import ReactMarkdown from "https://esm.sh/react-markdown@7";
import { DefaultPost } from "../DefaultPost";
import { PageNotFound } from "../PageNotFound";
import { DefaultPage } from "../DefaultPage";

import posts from "../../json/posts.json";
import "./styles.css";
import { PostCard } from "../PostCard";

export function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <PageNotFound />;
  }

  const postsRecomendados = posts
    .filter((post) => post.id !== Number(params.id))
    .sort((a, b) => b.id - a.id)
    .slice(0, 4);

  return (
    <>
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

                <h2 className="tituloOutrosPosts">
                  Outros posts que você pode gostar:
                </h2>

                <ul className="postsRecomendados">
                  {postsRecomendados.map((post) => (
                    <li key={post.id}>
                      <PostCard post={post} />
                    </li>
                  ))}
                </ul>
              </DefaultPost>
            }
          />
        </Route>
      </Routes>
    </>
  );
}
