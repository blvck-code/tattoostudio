import React, { useState } from "react";
import "./Showcase.css";
import img1 from "../../../assets/images/slider-img01.jpg";
import img3 from "../../../assets/images/slider-img02.jpg";
import img2 from "../../../assets/images/slider-img03.jpg";

const Showcase = () => {
  const [current, setCurrent] = useState(0);

  // useEffect(() => {
  //   setCurrent(item2);
  // }, []);

  const item1 = (
    <li className="showcase__slide showcase__item1">
      <div className="showcase__inner">
        <h1>Discount</h1>
        <h1>For first-timers</h1>
      </div>
    </li>
  );

  const item2 = (
    <li className="showcase__slide showcase__item2">
      <div className="showcase__inner">
        <h1>Great</h1>
        <h1>Tattoos</h1>
      </div>
    </li>
  );

  const item3 = (
    <li className="showcase__slide showcase__item3">
      <div className="showcase__inner">
        <h1>Proffessional</h1>
        <h1>Tattooist</h1>
      </div>
    </li>
  );

  const items = [item1, item2, item3];
  let i = 0;

  setTimeout(() => {
    if (current == items.length - 1) {
      setCurrent(0);
    } else {
      setCurrent(current + 1);
    }
  }, 5000);

  return (
    <div className="showcase">
      <div className="showcase__wrapper-container">
        <ul className="showcase__wrapper" id="showcase__wrapper">
          {items[current]}
        </ul>
      </div>
      <div className="showcase__nav">
        <button className="showcase__indicator" />
        <button className="showcase__indicator" />
        <button className="showcase__indicator current-slide" />
      </div>
    </div>
  );
};

export default Showcase;
