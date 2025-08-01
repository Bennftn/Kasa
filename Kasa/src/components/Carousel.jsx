import { useState } from "react";
import "../scss/components/_carousel.scss"; // a modifier plus tard

export default function Carousel({ pictures }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? pictures.length - 1 : prevIndex - 1
        );
    };

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
        prevIndex === pictures.length - 1 ? 0 : prevIndex + 1
        );
    };

  return (
      <div className="carousel">
          <img
          src={pictures[currentIndex]}
          alt={`Logement image ${currentIndex + 1}`}
          className="carousel-image"
          />
          {pictures.length > 1 && (
              <>
              <button className="carousel-prev" onClick={prevSlide}>‹</button>
              <button className="carousel-next" onClick={nextSlide}>›</button>
              </>
          )}
          <div className="carousel-counter">
              {currentIndex + 1}/{pictures.length}
          </div>
      </div>
  );
}
