import { MenuLink } from "../MenuLink";
import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink to="/">Home</MenuLink>
        <MenuLink to="/aboutme">Sobre Mim</MenuLink>
      </nav>
    </header>
  );
}
