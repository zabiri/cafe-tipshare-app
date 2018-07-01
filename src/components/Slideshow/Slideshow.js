import React from "react";
import "./Slideshow.css";
const Slideshow = () => {
  return (
    <div class="cb-slideshow__container">
      <ul class="cb-slideshow">
        <li class="cb-slideshow__item">
          <span class="cb-slideshow__frame" />
        </li>
        <li class="cb-slideshow__item">
          <span class="cb-slideshow__frame" />
        </li>
        <li class="cb-slideshow__item">
          <span class="cb-slideshow__frame" />
        </li>
        <li class="cb-slideshow__item">
          <span class="cb-slideshow__frame" />
        </li>
        <li class="cb-slideshow__item">
          <span class="cb-slideshow__frame" />
        </li>
      </ul>
    </div>
  );
};

export default Slideshow;
