import React, { useState } from "react";
import "./style.css";

function Book() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = JSON.stringify({ name, phone, email, message });
    console.log(form);

    setName("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="services__book">
      <div className="services__book-inner">
        <div className="services__book-intro">
          <h1>
            Wanna get an <br />
            edgy tattoo or
            <br />
            piercing?
          </h1>
          <p>
            We offer a wide range of tattooing and piercing services, so you can
            easily choose the right one...
          </p>
        </div>
        <div className="services__book-form">
          <div className="book__form">
            <h3>Book a tattoo or a piercing appointment now</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Your Name(required)</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Phone Number(required)</label>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="text"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Email</label>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                />
              </div>
              <div className="form-group">
                <label htmlFor="name">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Book;
