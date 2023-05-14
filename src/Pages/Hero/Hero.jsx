import React from "react";
import { Link } from "react-router-dom";
import heroImg from "../../Assets/hero.jpg";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero-section">
        <div className="container">
          <div className="hero">
            <div className="hero__img">
              <img
                src={heroImg}
                alt="jpg"
                width="300"
                height="300"
                className="hero__img-img"
              />
            </div>
            <div className="hero__title">
              <h3 className="hero__its">Hello, It's Me</h3>
              <h2 className="hero__head">Akhadov Jakhongir</h2>
              <h4 className="hero__im">And I'm a Frontend Developer</h4>
              <p className="hero__text">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam
                dignissimos a assumenda dolorem, suscipit modi.
              </p>
              <div className="icons">
                <Link
                  className="telegram mr"
                  to="https://t.me/Akhadov_Jakhongir"
                  target="_blank"
                  title="Telegram"
                >
                  <i className="fa-brands fa-telegram wh"></i>
                </Link>
                <Link
                  className="youtube mr"
                  to="https://www.youtube.com/@Codepenru01"
                  target="_blank"
                  title="Youtube"
                >
                  <i className="fa-brands fa-youtube wh"></i>
                </Link>
                <Link
                  className="facebook mr"
                  to="https://www.facebook.com/profile.php?id=100089537207348"
                  target="_blank"
                  title="Facebook"
                >
                  <i className="fa-brands fa-facebook wh"></i>
                </Link>
                <Link
                  className="instagram mr"
                  to="https://www.instagram.com/akhadov.05/"
                  target="_blank"
                  title="Instagram"
                >
                  <i className="fa-brands fa-square-instagram wh"></i>
                </Link>
                <Link
                  className="linkedin mr"
                  to="https://www.linkedin.com/in/jahongir-ahadov-032447246/"
                  target="_blank"
                  title="Linkedin"
                >
                  <i className="fa-brands fa-linkedin wh"></i>
                </Link>
                <Link
                  className="github"
                  to="https://github.com/codepenru01"
                  target="_blank"
                  title="Github"
                >
                  <i className="fa-brands fa-github wh"></i>
                </Link>
              </div>
              <button className="btn__dow" type="button">
                Dowload CD
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
