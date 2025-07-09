import { useParams } from "react-router-dom";
import "../styles/Logement.css"; // ajout et creation du fichier par la suite

export default function Logement() {
  const { id } = useParams();

  return (
    <main className="logement-page">
      <section className="logement-header">
        {/*carousel + titre + hôte */}
      </section>

      <section className="logement-body">
        {/*tags + rating + collapse */}
      </section>
    </main>
  );
}
