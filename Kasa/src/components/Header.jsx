import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.svg"; // logo a importer plus tard
import "./Header.css"; //import du fichier css

export default function Header() {
  return (
      <header>
          <div className="header-container">
              <Link to="/">
                <img src={logo} alt="Kasa" className="logo" />
              </Link>
              <nav>
                  <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
                    Acceuil
                  </NavLink>
                  <NavLink to="/a-propos" className={({ isActive }) => (isActive ? "active" : "")}>
                      À propos
                  </NavLink>
              </nav>
          </div>
      </header>
  )
}
