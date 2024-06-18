import { Link, useLocation } from "react-router-dom";

import "./styles.css";

export function MenuLink(title, path) {
  const location = useLocation();

  return (
    <Link
      to={path}
      className={`link ${location.pathname} === ${path} ? linkDestacado : ''`}
    >
      {title}
    </Link>
  );
}
