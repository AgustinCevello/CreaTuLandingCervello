import CartWidget from "./CartWidget";
import './NavBar.css'; 

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <h2 className="nav-logo">Tienda.com</h2>
      <ul className="nav-menu">
        <li>Remera</li>
        <li>Gorros</li>
      </ul>
      <div className="nav-cart">
        <CartWidget />
      </div>
    </nav>
  );
}
