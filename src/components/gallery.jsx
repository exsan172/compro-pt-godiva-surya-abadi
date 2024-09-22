import { Image } from "./image";
import React from "react";

export const Gallery = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Our Projects</h2>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
        <div className="row" style={{ marginTop:20 }}>
          <a
            href="https://drive.google.com/drive/folders/1NQ0x3ERkOxopyrI1FjkcUIe68n7uLnRk?usp=drive_link"
            target="_blank"
            className="btn btn-custom btn-lg page-scroll"
          >
            See More Projects
          </a>{" "}
        </div>
      </div>
    </div>
  );
};
