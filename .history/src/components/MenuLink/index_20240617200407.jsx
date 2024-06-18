import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export function MenuLink({ children, to, title }) {
  const location = useLocation();

  return (
    <Link
      to={to}
      className={`link ${location.pathname === to ? 'linkDestacado' : ''}`}
    >
      {children} {/* Render children here */}
    </Link>
  );
}
