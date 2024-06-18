import { MenuLink } from "../MenuLink";
import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <MenuLink path='/' title='Home'/>
        <MenuLink path='/aboutme' title='Sobre Mim'/>
      </nav>
    </header>
  );
}
