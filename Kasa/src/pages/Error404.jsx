import { Link } from "react-router-dom"
import "../scss/pages/_error404.scss";

export default function Error404() {
  return (
    <main className="error-page">
      <h1 className="error-title">404</h1>
      <p className="error-message">Oups! La page que vous demandez n'existe pas.</p>
      <Link className="error404link" to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}
