import "../scss/components/_banner.scss";
import React from "react";

export default function Banner({ image, text, alt, className = "" }) {
  return (
    <section className={`home-banner ${className}`}>
      <img className="banner-image" src={image} alt={alt} />
      {text && <div className="banner-text">{text}</div>}
    </section>
  );
}
