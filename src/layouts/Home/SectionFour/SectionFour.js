import React from "react";
import { FaChevronDown } from "react-icons/fa";
import "./SectionFour.css";

function SectionFour() {
  return (
    <section className="section__four">
      <div className="section__four-inner">
        <h1>Whether Your First or Last,</h1>
        <h2>Any tattoo we'll ink in here will be just awesome!</h2>
        <div className="section__four-link">
          <p>Book Now</p>
          <FaChevronDown />
        </div>
      </div>
    </section>
  );
}

export default SectionFour;
