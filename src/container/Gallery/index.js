import React from "react";
import Gallery from "../../layouts/Gallery/Gallery";
import Title from "../../layouts/Gallery/Title/Title";

function GalleryComponent() {
  document.title = "Gallery ~ ink Press | Tattoos & Piercings";

  return (
    <div style={{ marginTop: 100 }}>
      <Title />
      <Gallery />
    </div>
  );
}

export default GalleryComponent;
