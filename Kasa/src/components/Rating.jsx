import "../scss/components/_rating.scss"; // a modifier plus tard

export default function Rating({ rating }) {
    const totalStars = 5;
    const stars = [];

    for (let i = 1; i <= totalStars; i++) {
        stars.push(
            <span
            key={i}
            className={i <= rating ? "star red" : "star grey"}
            >
                ★
            </span>
        );
    }
  return <div className="rating-stars">{stars}</div>;
}
