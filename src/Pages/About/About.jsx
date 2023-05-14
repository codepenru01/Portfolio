import React from "react";
import "./About.css";
import intro from "../../Assets/intro.jpg";

const About = () => {
  return (
    <div>
      <section className="intro-section">
        <div className="container">
          <div className="intro">
            <h2 className="intro__head">About Me</h2>
            <div className="intro__all">
              <div className="intro__title">
                <h2 className="intro__heading">Ahadov Jahongir</h2>
                <h3 className="intro__frond">Frontend Developer</h3>
                <p className="intro__text">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Eligendi suscipit explicabo nostrum sint recusandae beatae
                  corrupti impedit. Temporibus atque fugit eum totam sit in at,
                  deserunt expedita delectus inventore et, explicabo libero
                  doloribus culpa labore. Eligendi cumque saepe unde quidem?
                </p>
                <button className="btn__read" type="button">
                  Read More
                </button>
              </div>
              <div className="intro__img">
                <img
                  className="br"
                  src={intro}
                  alt="jpg"
                  width="300"
                  height="300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
