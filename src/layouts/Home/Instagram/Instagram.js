import React, { useRef } from "react";
import img1 from "../../../assets/images/gallery/gallery-img01.jpg";
import img2 from "../../../assets/images/piercing01.jpg";
import img3 from "../../../assets/images/gallery/gallery-img03.jpg";
import img4 from "../../../assets/images/gallery/gallery-img04.jpg";
import img5 from "../../../assets/images/gallery/gallery-img05.jpg";
import img6 from "../../../assets/images/gallery/gallery-img06.jpg";
import img7 from "../../../assets/images/gallery/gallery-img07.jpg";
import img8 from "../../../assets/images/gallery/gallery-img08.jpg";
import img9 from "../../../assets/images/cover-up01.jpg";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import "./Instagram.css";

function Instagram() {
  const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9];

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
            {images?.map((img, idx) => (
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
