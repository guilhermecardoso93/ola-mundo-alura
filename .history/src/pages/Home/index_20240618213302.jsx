import { PostCard } from "../../components/PostCard";
import posts from "../../json/posts.json";

import "./styles.css";

export function Home() {
  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <PostCard post={post} />
        </li>
      ))}
    </ul>
  );
}
