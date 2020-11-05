import React from "react";
import img1 from "../../../assets/images/home-img04.jpg";
import img2 from "../../../assets/images/home-img05.jpg";
import img3 from "../../../assets/images/home-img06.jpg";
import "./Artists.css";

function Artists() {
  const artists = [
    {
      img: img1,
      name: "Joe Granger",
      desc: `Joe specializes in photo realism tattoos, water
                    color styles tattoos, portraits and has a love for
                    any nature related tattos he can do. He loves
                    full color pieces mostly, but is an expert at Black and Gray! Biography After creating kickass
                    tattoos for many fellows in his hometown,he 
                    followed the advice of his brother.`,
      socials: [
        "fa fa-facebook",
        "fa fa-twitter",
        "fa fa-instagram",
        "fa fa-linkedin",
        "fa fa-pinterest",
      ],
    },
    {
      img: img2,
      name: "Alejandra Idarraga",
      desc: `Joe specializes in photo realism tattoos, water
                    color styles tattoos, portraits and has a love for
                    any nature related tattos he can do. He loves
                    full color pieces mostly, but is an expert at Black and Gray! Biography After creating kickass
                    tattoos for many fellows in his hometown,he 
                    followed the advice of his brother.`,
      socials: [
        "fa fa-facebook",
        "fa fa-twitter",
        "fa fa-instagram",
        "fa fa-linkedin",
        "fa fa-pinterest",
      ],
    },
    {
      img: img3,
      name: "David Whoapez",
      desc: `Joe specializes in photo realism tattoos, water
                    color styles tattoos, portraits and has a love for
                    any nature related tattos he can do. He loves
                    full color pieces mostly, but is an expert at Black and Gray! Biography After creating kickass
                    tattoos for many fellows in his hometown,he 
                    followed the advice of his brother.`,
      socials: [
        "fa fa-facebook",
        "fa fa-twitter",
        "fa fa-instagram",
        "fa fa-linkedin",
        "fa fa-pinterest",
      ],
    },
  ];

  return (
    <section className="artists">
      <div className="artists__wrapper">
        <div className="section__title">
          <h1>our artists</h1>
          <div className="title__underline" />
        </div>
        <div className="artists__group grid3">
          {artists?.map(({ img, name, desc, socials }, idx) => (
            <div className="artist" key={idx}>
              <img src={img} alt={name} />
              <h4>{name}</h4>
              <p>{desc}</p>
              <div className="artist__socials">
                {socials?.map((social, idx) => (
                  <i key={idx} className={social} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Artists;
