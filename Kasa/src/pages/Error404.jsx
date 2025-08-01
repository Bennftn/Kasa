// page 404 simple pour l'instant

import { Link } from "react-router-dom"
import "../scss/pages/_error404.scss"; // ajout et creation du fichier par la suite

export default function Error404() {
  return (
    <main className="error-page">
      <h1>404</h1>
      <p>Oups! La page que vous demandez n'existe pas.</p>
      <Link to="/">Retourner sur la page d'accueil</Link>
    </main>
  );
}
