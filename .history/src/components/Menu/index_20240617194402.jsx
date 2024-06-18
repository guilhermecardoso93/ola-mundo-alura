import { Link, useLocation } from "react-router-dom";

import "./styles.css";

export function Menu() {
  const location = useLocation();

  return (
    <header>
      <nav className="navegacao">
        <Link to="/" className={`link link-destacado`}>Home</Link>
        <Link to="/aboutme" className='link'>Sobre Mim</Link>
      </nav>
    </header>
  );
}
