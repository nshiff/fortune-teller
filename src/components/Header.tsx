import { Link } from "react-router";

export function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/fortune-cookie">Fortune Cookie</Link>
        </li>
        <li>
          <Link to="/crystal-ball">Crystal Ball</Link>
        </li>
        <li>
          <Link to="/c">C</Link>
        </li>
      </ul>
    </nav>
  );
}
