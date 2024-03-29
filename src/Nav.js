import "./App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <ul className="Nav">
      <Link to="/">
        <li>Home</li>
      </Link>
      <Link to="/about">
        <li>About</li>
      </Link>
      <Link to="/shop">
        <li>Shop</li>
      </Link>
    </ul>
  );
}

export default Nav;
