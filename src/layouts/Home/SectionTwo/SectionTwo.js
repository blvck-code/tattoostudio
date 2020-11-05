import React from "react";
import img from "../../../assets/images/home-img02.jpg";
import "./SectionTwo.css";

function SectionTwo() {
  const desc_1 = `Get an extravaganza tattoo on any part of your body.
    We offer an amazing portfolio with thousands of
    samples. If you have your own tattoo idea, you are 
    welcome to describe it to one of our super talented tattoo
    masters. Each of them is a great artist with a personal vision.`;

  const desc_2 = `We are the guys who mainstreamed
    tattoos. Need proofs? What about 900+ happy clients 
    and thousands of cool art works?`;

  const desc_3 = `But the time told that we've made a 
    right choice all along and we've just 
    hit the apple with that decision! 
    Shockingly, the tattoos and piercing markets have been 
    widly unexplored in both South and North Dakotas even by 1997.`;

  const desc_4 = `That made us the number one 
    location among all the locals, who 
    wanted to make a strong self-expression statement! 
    So we were very glad as our salon became "the" place for 
    such distinct art forms as tattoos and piercings!`;
  return (
    <section className="section__two">
      <div className="section__two-inner">
        <div className="section__two-left">
          <div className="section__title">
            <h1>
              We are proffessional <br />
              Tattoo master
            </h1>
            <div className="title__underline" />
          </div>
          <div className="section__two-items grid">
            <div className="section__two-item">
              <p className="item__decs">{desc_1}</p>
              <br />
              <p className="item__decs">{desc_2}</p>
            </div>
            <div className="section__two-item">
              <p className="item__decs">{desc_3}</p>
              <br />
              <p className="item__decs">{desc_4}</p>
            </div>
          </div>
        </div>
        <div className="section__two-right">
          <img src={img} alt="Tattoo Guy" />
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
