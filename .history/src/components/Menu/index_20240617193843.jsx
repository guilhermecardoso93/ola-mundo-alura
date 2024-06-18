import { Link } from "react-router-dom";

import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <Link to="/" className='link'>Home</Link>
        <Link to="/aboutme" className='link'>Sobre Mim</Link>
      </nav>
    </header>
  );
}
