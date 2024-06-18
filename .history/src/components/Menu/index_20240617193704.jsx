import "./styles.css";

export function Menu() {
  return (
    <header>
      <nav className="navegacao">
        <a href="/" className='link'>Home</a>
        <a href="/aboutme" className='link'>Sobre Mim</a>
      </nav>
    </header>
  );
}
