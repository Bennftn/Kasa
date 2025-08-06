import "../scss/components/_rating.scss"; // a modifier plus tard
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function Rating({ rating }) {
  const totalStars = 5;
  const filledStars = Math.round(Number(rating));

  return (
    <div className="rating">
      {[...Array(totalStars)].map((_, i) => (
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          className={`star ${i < filledStars ? "filled" : ""}`}
        />
      ))}
    </div>
  );
}

export default Rating;