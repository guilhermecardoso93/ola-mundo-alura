import { Link, useLocation } from "react-router-dom";
import "./styles.css";

// eslint-disable-next-line react/prop-types
export function MenuLink({ children, to }) {
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
