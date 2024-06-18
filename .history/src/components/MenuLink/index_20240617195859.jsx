import { Link, useLocation } from "react-router-dom";
import "./styles.css";

export function MenuLink({ children, to }) {
  const location = useLocation();

  return (
    <Link
      to={to} // Use the 'to' prop directly
      className={`link ${location.pathname === to ? 'linkDestacado' : ''}`}
    >
      {children} {/* Use 'children' directly */}
    </Link>
  );
}
