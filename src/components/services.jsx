import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Services</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <Icon icon={d.icon} width={50} />
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
        <div className="row mt-2">
          <a
            href="mailto:godivasuryaabadi@gmail.com"
            className="btn btn-custom btn-lg page-scroll"
          >
            Explore Our Services
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
