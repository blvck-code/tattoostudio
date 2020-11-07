import React from "react";
import Book from "../../layouts/Services/Book/Book";
import Hero from "../../layouts/Services/Hero/Hero";
import Category from "../../layouts/Services/Category/Category";
import Title from "../../layouts/Services/Title/Title";

function ServicesComponent() {
  document.title = "Our services ~ ink Press | Tattoos & Piercings";

  return (
    <div style={{ marginTop: 100 }}>
      <Title />
      <Hero />
      <Category />
      <Book />
    </div>
  );
}

export default ServicesComponent;
