import React, { useState } from "react";
import { gallery } from "../../data";
import ImgModal from "./modal/ImgModal";
import "./style.css";

function Gallery() {
  const [image, setImage] = useState(null);
  const [modalActive, setModalActive] = useState(false);

  window.addEventListener("click", (e) => {
    if (e.target.classList.contains === "modal") {
      e.target.classList.remove("modal");
    }
  });

  return (
    <section className="gallery">
      <div className={modalActive ? "modal" : ""}>
        <div className="img-container">
          <img src={image} alt="" />
        </div>
      </div>
      <div className="gallery__inner">
        <h1>Gallery</h1>
        <div className="gallery__wrapper grid3">
          {gallery?.map((img, idx) => (
            <div key={idx} className="gallery__item">
              <img
                onClick={() => {
                  setImage(img);
                  setModalActive(true);
                }}
                src={img}
                alt="Pic"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
