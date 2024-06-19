import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from "./components/Menu";
import { Footer } from "./components/Footer";

import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { DefaultPage } from "./components/DefaultPage";
import { Post } from "./components/Post";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="posts/:id" element={<Post />} />
        </Route>
        <Route path="*" element="Pagina não Encontrada" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
