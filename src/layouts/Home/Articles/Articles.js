import React, { useEffect, useState } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { Link } from "react-router-dom";
import img from "../../../assets/images/news/news-img01.jpg";
import { articles } from "../../../data";
import "./Articles.css";

function Articles() {
  const [item, setItem] = useState(0);
  const [current, setCurrent] = useState(articles[item]);

  const nextTest = () => {
    if (item === articles?.length - 1) {
      setItem(0);
    } else {
      setItem(item + 1);
    }
    setCurrent(articles[item]);
    console.log(current);
  };

  const prevTest = () => {
    if (item === 0) {
      setItem(articles?.length - 1);
    } else {
      setItem(item - 1);
    }
    setCurrent(articles[item]);
    console.log(current);
  };

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
            <p className="article__date">{current.date_posted}</p>
            <h2 className="article__title">{current.title}</h2>
            <p className="article__decs">{current.desc}</p>
            <Link to="/news">
              Read More <i className="fa fa-angle-double-right" />
            </Link>
            <div className="article__nav">
              <MdChevronLeft onClick={prevTest} />
              <MdChevronRight onClick={nextTest} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Articles;
