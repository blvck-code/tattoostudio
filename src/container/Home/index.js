import React from "react";
import Articles from "../../layouts/Home/Articles/Articles";
import Artists from "../../layouts/Home/Artists/Artists";
import Instagram from "../../layouts/Home/Instagram/Instagram";
import SectionFour from "../../layouts/Home/SectionFour/SectionFour";
import SectionOne from "../../layouts/Home/SectionOne/SectionOne";
import SectionThree from "../../layouts/Home/SectionThree/SectionThree";
import SectionTwo from "../../layouts/Home/SectionTwo/SectionTwo";
import Showcase from "../../layouts/Home/Showcase/Showcase";
import Testimonials from "../../layouts/Home/Testimonials/Testimonials";

function HomeComponent() {
  document.title = "ink Press | Tattoos & Piercings";

  return (
    <>
      <Showcase />
      <SectionOne />
      <SectionTwo />
      <Testimonials />
      <SectionThree />
      <Artists />
      <SectionFour />
      <Articles />
      <Instagram />
    </>
  );
}

export default HomeComponent;
