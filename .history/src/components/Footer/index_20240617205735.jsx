import { ReactComponent as Logo } from  '../../assets/marca_registrada.svg'
import './styles.css';

export function Footer() {
  return (
    <footer className="rodape">
      <img src={Logo} alt='logo' />
    </footer>
  )
}