import React from "react";
import img from "../../../assets/images/home-img01.jpg";
import "./SectionOne.css";

function SectionOne() {
  return (
    <section className="section__one">
      <div className="section__one-inner">
        <div className="section__one-left">
          <div className="section__title">
            <h1>
              Welcome <br />
              To our Salon!
            </h1>
            <div className="title__underline" />
          </div>
          <div className="section__one-intro">
            <p>
              Our tattoo and piercing salon is a real highlight of the whole
              industry in the Kenya Central! We've been opened as a
              tattoo-centric institution for years. During this period of time
              we were able to create thousands of awesome tattoos and piercings
              for thousands of happy clients!
            </p>
          </div>
          <div className="section__one-items grid">
            <div className="section__one-item">
              <h1 className="item__title">Artfulness</h1>
              <p className="item__decs">
                All of our tattoo and piercing masters here are masters
                indeed... Their artistic precision and perception are nothing
                short of perfect!
              </p>
            </div>
            <div className="section__one-item">
              <h1 className="item__title">Custom Solutions</h1>
              <p className="item__decs">
                Whether you'll show us some image that you want to replicate on
                your skin or ask us to draw one and confirm with you, we'll be
                glad to do either of those 2 for you!
              </p>
            </div>
            <div className="section__one-item">
              <h1 className="item__title">Easy Access</h1>
              <p className="item__decs">
                We understand it all very well, that the idea of getting a
                tattoo might easily hit you at 2am after a rock concert or few
                drinks... No problem, as we're opened for booking 24/7!
              </p>
            </div>
            <div className="section__one-item">
              <h1 className="item__title">Rocking Prices</h1>
              <p className="item__decs">
                While both our master's craftmanship skills and our range of
                services are ceiling high, at the same timeour prices are low,
                down-to-earth and unbelievably affordable!
              </p>
            </div>
          </div>
        </div>
        <div className="section__one-right">
          <img src={img} alt="Tattoo Guy" />
        </div>
      </div>
    </section>
  );
}

export default SectionOne;
