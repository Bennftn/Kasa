import "./Footer.css";
import logo from "../assets/logos/logo-white.svg"; // a modifier plus tard pour le bon nom

export default function Footer() {
  return (
    <footer className="footer">
        <img src={logo} alt="Logo Kasa" className="footer-logo" />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}
