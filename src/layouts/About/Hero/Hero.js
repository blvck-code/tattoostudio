import React from "react";
import "./Hero.css";

function Hero() {
  const items = [
    {
      title: `Our tatoo and piercing salon is a real highlight of the whole industry
              in the Kenya Central`,
      para1: `Founded way back in 1977 by a couple, both of whom were avid tattoos and
              piercing lovers, the venue rose to fame quickly and now we're the biggest salon in
              the CK!`,
      para2: `However at initial stages, CK was criticized as a location by a bunch of 
              our friends...`,
      para3: `People were telling us offensive things like "Godly and fearful Dakotans will
              never line up to get crazy fire-breathing demons tattooed on their backs, choose New
              York or SF!"...`,
    },
    {
      title: `But the time told that we've made a right choice all along and
              we've just hit the apple with that decision!`,
      para1: `Shockingly, the tattoos and piercing markets have been wildly unexplored in both
              South and North Kenya even by 1997.`,
      para2: `That made us the number one location among all the locals, who wanted to make a 
              strong self-expression statement!`,
      para3: `So we were very glad as our salon became "the" place for such disctinct art forms
              as tattoos and piercings!`,
    },
  ];

  return (
    <section className="about__hero">
      <div className="about__hero-inner grid">
        {items?.map(({ title, para1, para2, para3 }, idx) => (
          <div className="about__hero-item">
            <h4 className="about__hero-title">{title}</h4>
            <br />
            <p>{para1}</p>
            <p>{para2}</p>
            <p>{para3}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Hero;
