import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logement.json";
import Collapse from "../components/Collapse";
import Carousel from "../components/Carousel";
import TagList from "../components/TagList";
import Rating from "../components/Rating";
import HostCard from "../components/HostCard";
import "../scss/pages/_logement.scss";

function Logement() {
  const { id } = useParams();
  const logement = logements.find((item) => item.id === id);

  if (!logement) {
    return <Navigate to="/404" />;
  }

  const locationParts = logement.location.split(" - ");
  const region = locationParts[0];
  let city = locationParts[1] || "";
  city = city.replace(/\s*\d+[a-zA-Z]*$/, "").trim();

  return (
    <div className="housing-info">
      <Carousel pictures={logement.pictures} />
      <div className="logement-header">
        <div className="info-logement">
          <h1 id="title-logement">{logement.title}</h1>
          <p className="location">
            {city}, {region}
          </p>
          <TagList tags={logement.tags} />
        </div>
        <div className="rating-host">
          <HostCard host={logement.host} />
          <Rating rating={logement.rating} />
        </div>
      </div>

      <div id="collapseLogement">
        <Collapse title="Description" variant="housing">
          {logement.description}
        </Collapse>
        <Collapse title="Équipements" variant="housing">
          <ul>
            {logement.equipments.map((equipement, index) => (
              <li key={`${equipement}-${index}`}>{equipement}</li>
            ))}
          </ul>
        </Collapse>
      </div>
    </div>
  );
}

export default Logement;
