import React from "react";
import img1 from "../../../assets/images/gallery/gallery-img04.jpg";
import img2 from "../../../assets/images/gallery/gallery-img02.jpg";
import img3 from "../../../assets/images/piercing01.jpg";
import img4 from "../../../assets/images/cover-up01.jpg";
import img5 from "../../../assets/images/gallery/gallery-img06.jpg";
import img6 from "../../../assets/images/gallery/gallery-img07.jpg";
import "./style.css";

function Section() {
  const categories = [
    {
      img: img1,
      title: "Small Tattoos",
      desc: `We do small tattoos. In fact, this is really our most
            popular tattoo service. As the majority of`,
    },
    {
      img: img2,
      title: "Large Tattoos",
      desc: `For premium result, at our tattoo shop we combine modern technics with traditional ones.`,
    },
    {
      img: img3,
      title: "Piercing",
      desc: `Want some extra holes in your body? Our piercing masters will make some for you.`,
    },
    {
      img: img4,
      title: "Tattoo Cover Up",
      desc: `Got some old tattoos that you don't find pretty? Our talented artists will cover them up for you.`,
    },
    {
      img: img5,
      title: "Tattoo Design",
      desc: `Nothing can beat the challeng of creating a design that initially is only in your imagination.`,
    },
    {
      img: img6,
      title: "Facial Piercing",
      desc: `Anyways, the most important part about doing such 
            a tattoo is to choose both a proper placing and a fitting design.`,
    },
  ];

  return (
    <section className="category">
      <div className="category__inner grid3">
        {categories?.map(({ img, title, desc }, idx) => (
          <div key={idx} className="services__item">
            <img src={img} alt="Service Image" />
            <h5>{title}</h5>
            <p>{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Section;
