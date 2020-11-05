import React, { useState, useEffect } from "react";
import "./Testimonials.css";
// import img from "../../../assets/images/slider-img07.jpg";
import img from "../../../assets/images/home-img03.jpg";
import quotes from "../../../assets/images/quotes-img.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Testimonials() {
  const [item, setItem] = useState(1);
  const [current, setCurrent] = useState({
    id: 6,
    desc: `The whisky in my hand and in my head uplifted me and 
    I decided to make a custom tattoo. The artist that made it is a real talent.`,
    owner: "Oluoch Maurice",
  });

  const testimonies = [
    {
      id: 1,
      desc: `I wanted a tattoo so bad, but the prices didn't cut it
            for me.. Thanks to these guys discount for first-
            timers I finally did it!`,
      owner: "Patrick Emberson",
    },
    {
      id: 2,
      desc: `Making a tattoo is always a complicated thing... It
            all depends on how artful the master is. That's why
            this salon works for me!`,
      owner: "Jack Honey",
    },
    {
      id: 3,
      desc: `Is a place where you can get a high-quality tattoo, 
            and even order a custom design based on your
            wishes and expecations.`,
      owner: "Sally Hue",
    },
    {
      id: 4,
      desc: `I am glad to be the customer of this tattoo salon for its great service.
          You are treated like you are some of these guys. Besides, my tattoo got the best-quality.`,
      owner: "Mike Petty",
    },
    {
      id: 5,
      desc: `I came to this salon with an idea to draw Mona
            Lisa on my whole back. My master was not suprised and even offered a discount 
            because I ordered a massive work.`,
      owner: "Jeremy Big",
    },
    {
      id: 6,
      desc: `The whisky in my hand and in my head uplifted me and 
      I decided to make a custom tattoo. The artist that made it is a real talent.`,
      owner: "Oluoch Maurice",
    },
  ];

  const nextTest = () => {
    if (item === 5) {
      setItem(0);
    } else {
      setItem(item + 1);
    }
    setCurrent(testimonies[item]);
  };

  // setTimeout(() => {
  //   prevTest();
  // }, 2500);

  const prevTest = () => {
    if (item === 0) {
      setItem(5);
    } else {
      setItem(item - 1);
    }
    setCurrent(testimonies[item]);
  };

  // testimonies.map((item, idx) => {
  //   console.log(item.id);
  // });

  return (
    <section className="testimonies">
      <div className="testimonies__inner grid">
        <div className="testimonies__left">
          <img src={img} alt="Testimony" />
        </div>
        <div className="testimonies__right">
          <img src={quotes} alt="Quotes" />
          <p className="testimonies__desc">{current?.desc}</p>
          <h4>~ {current?.owner}</h4>
          <div className="testimonies__nav">
            <MdChevronLeft onClick={() => prevTest()} />
            <MdChevronRight onClick={() => nextTest()} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
