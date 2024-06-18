import { MenuLink } from "../MenuLink";
import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink />
        <MenuLink />
      </nav>
    </header>
  );
}
