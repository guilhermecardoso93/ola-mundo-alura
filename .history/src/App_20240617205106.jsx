import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";
import { Menu } from "./components/Menu";
import { Footer } from "components/Footer";

export function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutme" element={<AboutMe />} />
        <Route path="*" element="Pagina não Encontrada" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}