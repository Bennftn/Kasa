import "../scss/components/_footer.scss";
import logo from "../assets/logos/Logo-Kasa-dark.png";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-inner">
        <img src={logo} alt="Kasa" className="footer-logo" />
        <p>© {new Date().getFullYear()} Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
