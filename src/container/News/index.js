import React from "react";
import Title from "../../layouts/News/Title/Title";
import Posts from "../../layouts/News/Posts/Posts";

function NewsComponent() {
  document.title = "News & articles ~ ink Press | Tattoos & Piercings";

  return (
    <div style={{ marginTop: 100 }}>
      <Title />
      <Posts />
    </div>
  );
}

export default NewsComponent;
