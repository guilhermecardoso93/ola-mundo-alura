import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Menu } from './components/Menu'


export function AppRoutes() {
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
