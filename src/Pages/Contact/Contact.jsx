import React from "react";
import "./Contact.css"

const Contact = () => {
  return (
    <div>
      <section className="contact-section">
        <div className="container">
          <div className="contact">
            <h2 className="contact__title">
              Contact <span className="contact__color">Me!</span>
            </h2>
            <form className="formclassName">
              <div className="contact__head">
                <label htmlFor="name">
                  <input
                    type="text"
                    placeholder="Full Name"
                    name="name"
                    id="name"
                  />
                </label>
                <label htmlFor="email">
                  <input
                    type="email"
                    placeholder="Email Address"
                    name="email"
                    id="email"
                  />
                </label>
              </div>
              <div className="contact__body">
                <label htmlFor="number">
                  <input
                    type="tel"
                    placeholder="Mobile Nomber"
                    name="number"
                    id="number"
                  />
                </label>
                <label htmlFor="subject">
                  <input
                    type="email"
                    placeholder="Email Subject"
                    name="subject"
                    id="subject"
                  />
                </label>
              </div>
              <textarea
                name="textarea"
                placeholder="Leave a comment"
                id="textarea"
                cols="30"
                rows="10"
              ></textarea>
            </form>
            <div className="btn__box">
              <button className="contact__btn">Send Message</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
