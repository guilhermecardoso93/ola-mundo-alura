import { MenuLink } from "../MenuLink";
import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink to="/" children="Home" />
        <MenuLink to="/aboutme" children="Sobre Mim" />
      </nav>
    </header>
  );
}
