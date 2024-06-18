import { MenuLink } from "../MenuLink";
import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink to="/" title="Home"/>
        <MenuLink to="/aboutme" title="Sobre Mim"/>
      </nav>
    </header>
  );
}
