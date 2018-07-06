import React from "react";
import "./Slideshow.css";
const Slideshow = () => {
  return (
    <div className="cb-slideshow__container">
      <ul className="cb-slideshow">
        <li className="cb-slideshow__item">
          <span className="cb-slideshow__frame" />
        </li>
        <li className="cb-slideshow__item">
          <span className="cb-slideshow__frame" />
        </li>
        <li className="cb-slideshow__item">
          <span className="cb-slideshow__frame" />
        </li>
        <li className="cb-slideshow__item">
          <span className="cb-slideshow__frame" />
        </li>
        <li className="cb-slideshow__item">
          <span className="cb-slideshow__frame" />
        </li>
      </ul>
    </div>
  );
};

export default Slideshow;
