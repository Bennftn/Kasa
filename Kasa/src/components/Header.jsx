import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logos/Logo-Kasa-light.png";
import "../scss/components/_header.scss";

export default function Header() {
  return (
    <header>
      <div className="header-container">
        <Link to="/">
          <img src={logo} alt="Logo Kasa" className="header-logo" />
        </Link>
        <nav className="header-nav" aria-label="Navigation principale">
          <NavLink
            to="/"
            end
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Accueil
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            À propos
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
