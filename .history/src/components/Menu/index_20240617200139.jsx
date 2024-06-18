import { MenuLink } from "../MenuLink";
import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink to="/" title="Home">
          Home
        </MenuLink>
        <MenuLink to="/about" title="Sobre Mim">
          Sobre Mim
        </MenuLink>
      </nav>
    </header>
  );
}
