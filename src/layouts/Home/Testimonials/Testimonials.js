import React, { useState, useEffect } from "react";
import { testimonies } from "../../../data";
import "./Testimonials.css";
// import img from "../../../assets/images/slider-img07.jpg";
import img from "../../../assets/images/home-img03.jpg";
import quotes from "../../../assets/images/quotes-img.png";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

function Testimonials() {
  const [item, setItem] = useState(1);
  const [current, setCurrent] = useState({});

  useEffect(() => {
    setCurrent(testimonies[item]);
  }, []);

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
