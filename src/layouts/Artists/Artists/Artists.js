import React from "react";
import { artists } from "../../../data";
import "./Artists.css";

function Artists() {
  return (
    <section className="artists">
      <div className="artists__wrapper">
        <div className="section__title">
          <h1>our artists</h1>
          {/* <div className="title__underline" /> */}
          <p>
            Our team of tattoo artists represents true proffessionalism and
            dedication in everything that concerns high-quality and durable
            tattoos.
          </p>
        </div>
        <div className="artists__group grid3">
          {artists?.map(({ img, name, proffession, socials }, idx) => (
            <div className="artist" key={idx}>
              <img src={img} alt={name} />
              <div className="artist__info">
                <h4>{name}</h4>
                <p>{proffession}</p>
                <span className="line" />
                <div className="artist__socials">
                  {socials?.map((social, idx) => (
                    <i key={idx} className={social} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;
