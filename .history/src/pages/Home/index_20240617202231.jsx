import { Banner } from "../../components/Banner";
import posts from '../../json/posts.json'

import './styles.css'

export function Home() {
  return (
    <main>
      <Banner />
      <ul className="posts">
          {posts}
      </ul>
    </main>
  )
}
