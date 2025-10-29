import CartWidget from "./CartWidget";
import "./NavBar.css";
import { Link } from "react-router-dom";

function NavBar() {
  return (
    <header className="navbar">
      <nav className="menu">
        <Link to="/">Home</Link>
        <Link to="/category/Hogar">Hogar</Link>
        <Link to="/category/Jardín">Jardín</Link>
        <Link to="/cart">
          <CartWidget/>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;