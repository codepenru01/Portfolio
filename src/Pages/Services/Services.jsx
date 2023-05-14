import React from "react";
import "./Services.css"

const Services = () => {
  return (
    <div>
      <section className="services-section">
        <div className="container">
          <div className="services">
            <h2 className="services__head">Services</h2>
            <div className="services__all">
              <div className="services__card">
                <i className="fas fa-palette"></i>
                <h3 className="fas__w">Web Design</h3>
                <p className="fas__t">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, in!
                </p>
                <button className="btn__bn" type="button">Programmer</button>
              </div>
              <div className="services__card">
                <i className="fas fa-file-code"></i>
                <h3 className="fas__w">Web Developern</h3>
                <p className="fas__t">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, in!
                </p>
                <button className="btn__bn" type="button">Programmer</button>
              </div>
              <div className="services__card">
                <i className="fas fa-object-group"></i>
                <h3 className="fas__w">Youtuber</h3>
                <p className="fas__t">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusamus, in!
                </p>
                <button className="btn__bn" type="button">Programmer</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
