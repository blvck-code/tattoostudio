import React from "react";
import { articles } from "../../../data";
import "./style.css";

function Posts() {
  return (
    <section className="news__posts">
      <div className="news__posts-inner">
        {articles?.map(({ img, title, desc }, idx) => (
          <div key={idx} className="news__posts-item">
            <img src={img} alt="Posts Img" />
            <h4>{title}</h4>
            <p>{desc}</p>
            <a href="" className="btn btn-primary">
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Posts;
