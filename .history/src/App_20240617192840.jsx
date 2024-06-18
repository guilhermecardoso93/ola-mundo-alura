import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { AboutMe } from "./pages/AboutMe";

export function App() {
  return (
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/aboutme' element={<AboutMe />} />
        <Route path='*' element='Pagina não Encontrada' />
      </Routes>
     </BrowserRouter>
  );
}
