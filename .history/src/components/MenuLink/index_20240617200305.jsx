import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export function MenuLink(to, title) {
  const location = useLocation();

  return (
    <Link
      to={to} 
      className={`link ${location.pathname === to ? 'linkDestacado' : ''}`}
    >
      {title} 
    </Link>
  );
}
