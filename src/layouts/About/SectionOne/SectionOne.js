import React from "react";
import "./style.css";

function SectionOne() {
  const items = [
    {
      title: "ARTFULNESS",
      desc:
        "All of our tattoo and piercing masters here are masters indeed... Their artistic precision and perception are nothing short of perfect!",
    },
    {
      title: "CUSTOM SOLUTIONS",
      desc:
        "Whether you'll show us some image that you want to replicate on your skin or ask us to draw one and confirm with you, we'll be glad to do either of those 2 for you!",
    },
    {
      title: "EASY ACCESS",
      desc:
        "We understand it all very well, that the idea of getting a tattoo might easily hit you at 2am after a rock concert or few drinks... No problem, as we're opened for booking 24/7!",
    },
  ];

  return (
    <section className="about__section-one">
      <div className="about__section-one-inner">
        <div className="about__section__title">
          <h1>Why our tattoos rock the best?</h1>
        </div>
        <div className="about__section-one-content grid3">
          {items?.map(({ title, desc }, idx) => (
            <div className="about__section-one-item" key={idx}>
              <h3>{title}</h3>
              <p>{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
