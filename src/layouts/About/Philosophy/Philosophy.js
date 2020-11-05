import React from "react";
import "./style.css";

function Philosophy() {
  const text = `Founded way back in 1977 by a couple, 
  both of whom were avid tattoos and piercing lovers, the venue rose to fame quickly and now we're the biggest salon in the CK!`;

  return (
    <section className="philosophy">
      <h4>Our philosophy</h4>
      <p>{text}</p>
    </section>
  );
}

export default Philosophy;
