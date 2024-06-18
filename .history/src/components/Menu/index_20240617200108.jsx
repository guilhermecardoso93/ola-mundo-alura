import { MenuLink } from "../MenuLink";
import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink to="/home" title="Home">
          Home
        </MenuLink>
        <MenuLink to="/aboutme" title="Sobre Mim" />
      </nav>
    </header>
  );
}
