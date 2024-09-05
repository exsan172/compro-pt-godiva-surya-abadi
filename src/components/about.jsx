import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About PT. Godiva Surya Abadi</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>{props.data ? props.data.paragraph1 : "loading..."}</p>
              <p>{props.data ? props.data.paragraph2 : "loading..."}</p>
              <a
                href="mailto:godivasuryaabadi@gmail.com"
                className="btn btn-custom btn-lg page-scroll"
              >
                Learn More About Us
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
