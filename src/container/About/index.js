import React from "react";
import Title from "../../layouts/About/Title/Title";
import Hero from "../../layouts/About/Hero/Hero";
import SectionOne from "../../layouts/About/SectionOne/SectionOne";
import SectionTwo from "../../layouts/About/SectionTwo/SectionTwo";
import SectionThree from "../../layouts/About/SectionThree/SectionThree";
import Philosophy from "../../layouts/About/Philosophy/Philosophy";
import Stats from "../../layouts/About/Stats/Stats";

function ContactsComponent() {
  document.title = "About us ~ ink Press | Tattoos & Piercings";

  return (
    <div style={{ marginTop: 100 }}>
      <Title />
      <Hero />
      <SectionOne />
      <SectionTwo />
      <Philosophy />
      <Stats />
      <SectionThree />
    </div>
  );
}

export default ContactsComponent;
