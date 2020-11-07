import React from "react";
import "./style.css";

function Hero() {
  return (
    <section className="services">
      <div className="services__inner">
        <div className="section__title">
          <h1>Services</h1>
        </div>
        <div className="services__sub-title">
          <h5>
            All of our tattoo and piercing masters here are masters indeed
          </h5>
        </div>
        <div className="services__content">
          <p>
            Shockingly, the tattoos and piercing markets have been wildly
            unexplored in both South and North Kenya even by 1997.
          </p>
          <p>
            That made us the number one location among all the locals, who
            wanted to make a strong self-expression statement!
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
