import { Banner } from "../../components/Banner";
import { PostCard } from "../../components/PostCard";

import posts from "../../json/posts.json";

import "./styles.css";

export function Home() {
  return (
    <main>
      <Banner />
      <ul className="posts">
        {posts.map((post) => (
          <li key={post.id}>
            <PostCard post={post} />
          </li>
        ))}
      </ul>
    </main>
  );
}
