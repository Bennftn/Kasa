import React from "react";

export default function Banner({ image, text, alt }) {
  return (
    <div className="banner">
        <img src={image} alt={alt} className="banner-image" />
        {text && <h1 className="banner-text">{text}</h1>}
    </div>
  );
}