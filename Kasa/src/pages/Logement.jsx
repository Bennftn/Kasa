import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logement.json";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import Tag from "../components/Tag";
import Rating from "../components/Rating";
import "../styles/Logement.css"; // ajout et creation du fichier par la suite

export default function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  //redirige vers 404 si l'id n'existe pas
  if (!logement) {
    return <Navigate to="/404" />;
  }

  return (
    <main className="logement-page">
      <section className="logement-header">
        {/*carousel + titre + hôte */}
        <Carousel pictures={logement.pictures} />
        <h1>{logement.title}</h1>
        <p>{logement.location}</p>
        <div className="logement-tags">
          {logement.tags.map((tag, index) => (
            <Tag key={index} text={tag} />
          ))}
        </div>
      </section>

      {/* // test de l'affichage des images
      <section className="logement-images">
        {logement.pictures.map((pic, index) => (
          <img key={index} src={pic} alt={`Vue ${index + 1}`} />
        ))}
        </section>*/}

      <section className="logement-details">
        <div className="host">
          <p>{logement.host.name}</p>
          <img src={logement.host.picture} alt={logement.host.name} />
        </div>

        <div className="rating">
          <Rating rating={parseInt(logement.rating)} />
        </div>
      </section>

      <Collapse title="Description" content={logement.description} />
      <Collapse title="Équipements" content={logement.equipments} />
    </main>
  );
}
