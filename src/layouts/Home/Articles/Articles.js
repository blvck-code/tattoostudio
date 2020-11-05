import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import img from "../../../assets/images/home-img07.jpg";
import "./Articles.css";

function Articles() {
  return (
    <section className="articles">
      <div className="articles__inner grid">
        <div className="article__img">
          <img src={img} alt="" />
        </div>
        <div className="article__content">
          <div className="section__title">
            <h1>Recent Articles</h1>
            <div className="title__underline" />
          </div>
          <div className="article__body">
            <p className="article__date">10 Aug 2020</p>
            <h2 className="article__title">Celtic Tattoos & Traditions</h2>
            <p className="article__decs">
              So whenever you feel like a 10 by 10 inch tattoos design will fit
              yourself the best, you can easily sketch it with our salon's
              masters or ask them to replicate the example that you brought
              in... All in all, even shoulder tattoos can fall under this
              category.
            </p>
            <a href="">
              Read More <i className="fa fa-angle-double-right" />
            </a>
            <div className="article__nav">
              <MdChevronLeft />
              <MdChevronRight />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
