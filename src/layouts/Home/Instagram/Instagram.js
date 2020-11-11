import React, { useRef } from "react";
import { gallery } from "../../../data";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Instagram.css";

function Instagram() {
  const listRef = useRef(null);

  const scrollLeft = () => {
    listRef.current.scrollBy({
      left: 280,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    listRef.current.scrollBy({
      left: -280,
      behavior: "smooth",
    });
  };

  return (
    <section className="instagram">
      <div className="instagram__wrapper">
        <div className="instagram__imgs-wrapper">
          <MdChevronLeft className="push-left" onClick={scrollRight} />
          <div className="instagram__imgs" ref={listRef}>
            {gallery?.map((img, idx) => (
              <div className="instagram__img" key={idx}>
                <img src={img} alt="Instagram pic" />
              </div>
            ))}
          </div>
          <MdChevronRight className="push-right" onClick={scrollLeft} />
        </div>
        <div className="instagram__follow">
          <i className="fa fa-instagram" />
          <h1>Instagram</h1>
          <h4>@oluoch_jnr</h4>
          <button>Follow</button>
        </div>
      </div>
    </section>
  );
}

export default Instagram;
