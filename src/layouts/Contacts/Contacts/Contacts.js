import React, { useState } from "react";
import "./style.css";

function Contacts() {
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
    <section className="contacts__body">
      <div className="contacts__body-inner grid">
        <div className="contacts__body-info">
          <h1>Contacts</h1>
          <p>
            Phone:
            <strong>
              <a href="tel:+254795772333">254 795 77 2333</a>
            </strong>
          </p>
          <p>
            Fax:
            <strong>
              <a href="tel:+254755152421">254 755 15 2421</a>
            </strong>
          </p>
          <p>
            Email:
            <strong>
              <a href="mailto:brianmauriceoluoch@gmail.com">
                brianmauriceoluoch@gmail.com
              </a>
            </strong>
          </p>
          <br />
          <p>
            Address: <strong>87 Tennese hwy, Washington, DC, USA, 22406</strong>
          </p>
        </div>
        <div className="contacts__body-form">
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

export default Contacts;
