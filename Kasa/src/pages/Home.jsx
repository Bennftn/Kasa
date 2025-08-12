import bannerImage from "../assets/images/Image-1.png";
import "../scss/pages/_home.scss";
import logements from "../data/logement.json";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="home">
      <section className="home-banner">
        <img src={bannerImage} alt="Bannière d'accueil" className="banner-image" />
        <div className="banner-text">
          <p>
          Chez vous, partout et ailleurs
          </p>
        </div>
      </section>

      <section className="home-gallery">
        {logements.map((logement) => (
          <Card
          key={logement.id}
          id={logement.id}
          title={logement.title}
          cover={logement.cover}
          />
        ))}
      </section>
    </main>
  );
}
