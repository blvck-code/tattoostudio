import React from "react";
import img from "../../../assets/images/artists01.jpg";
import "./style.css";

function SectionTwo() {
  const intro = `People were telling us offensive things like
                "Godly and fearful Dakotans will never line up to get crazy 
                fire-breathing demons tattooed on their backs, choose New York or SF!"...`;

  const para1 = `But the time told that we've made a right choice all along and 
                we've just hit the apple with that decision!`;

  const para2 = `Shockingly, the tattoos and piercing markets have been wildly 
                unexplored in both South and North Kenya even by 1997.`;

  const para3 = `That made us the number one location among all the locals, who 
                wanted to make a strong self-expression statement!`;

  return (
    <section className="about__section-two">
      <div className="about__section-two-inner grid">
        <div className="section-two-left">
          <img src={img} alt="" />
        </div>
        <div className="section-two-right">
          <h4>{intro}</h4>
          <br />
          <p>{para1}</p>
          <p>{para2}</p>
          <p>{para3}</p>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
