import React from "react";
import { articles } from "../../data";
import "./style.css";

function Gallery() {
  return (
    <section className="gallery">
      <div className="gallery__inner">
        <h1>Gallery</h1>
        <div className="gallery__wrapper grid3">
          {articles?.map(({ img }, idx) => (
            <div key={idx} className="gallery__item">
              <img src={img} alt="Pic" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
