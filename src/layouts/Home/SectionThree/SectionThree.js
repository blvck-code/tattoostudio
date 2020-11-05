import React from "react";
import "./SectionThree.css";

function SectionThree() {
  const info1 = `This tattoo sizing is used less
   often than its small and big-sized tattoo
    counterparts. Still, it is a perfect service
     for, say, an am or a leg tattoo...
    `;
  const info2 = `So whenever you feel like a 10 by 10 inch tattoos 
design will fit yourself the best, you can easily 
sketch it with our salon's masters or ask them to 
replicate the example that you brought in... All in all,
 even shoulder tattoos can fall under this category.`;

  return (
    <section className="section__three">
      <div className="section__three-inner grid">
        <div className="section__three-left">
          <div className="section__title">
            <h1>Mid-Sized Tattoos</h1>
            <div className="title__underline" />
          </div>
          <p>
            {info1}
            <br />
            <br />
            {info2}
          </p>
          <div className="section__three-numbers grid3">
            <div className="section__three-item">
              <div className="title__underline" />
              <h1>8,600</h1>
              <h4>Tattoos</h4>
            </div>
            <div className="section__three-item">
              <div className="title__underline" />
              <h1>2,010</h1>
              <h4>Reviews</h4>
            </div>
            <div className="section__three-item">
              <div className="title__underline" />
              <h1>1,018</h1>
              <h4>Happy Clients</h4>
            </div>
          </div>
        </div>
        <div className="section__three-right"></div>
      </div>
    </section>
  );
}

export default SectionThree;
