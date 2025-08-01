import { Link } from "react-router-dom";
import "../scss/components/_card.scss"; // a modifier plus tard

export default function Card({ id, title, cover }) {
  return (
      <Link to={`/logement/${id}`} className="card">
          <img src={cover} alt={title} className="card-cover" />
          <h3 className="card-title">{title}</h3>
      </Link>
  );
}
