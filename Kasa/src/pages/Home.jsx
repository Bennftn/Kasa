import bannerImage from "../assets/images/image-1.png";
import "../styles/Home.css"; // fichier a creer plus tard pour le css
import logements from "../data/logement.json";
import Card from "../components/Card";

export default function Home() {
  return (
    <main className="home">
      <section className="home-banner">
        <img src={bannerImage} alt="Bannière d'accueil" className="banner-image" />
        <div className="banner-text">
          Chez vous, partout et ailleurs
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
