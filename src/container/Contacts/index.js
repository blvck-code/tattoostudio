import React from "react";
import Contacts from "../../layouts/Contacts/Contacts/Contacts";
import Title from "../../layouts/Contacts/Title/Title";

function ContactsComponent() {
  document.title = "Contact us ~ ink Press | Tattoos & Piercings";

  return (
    <div style={{ marginTop: 100 }}>
      <Title />
      <Contacts />
    </div>
  );
}

export default ContactsComponent;
