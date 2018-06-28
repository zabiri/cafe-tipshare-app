import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="Footer__logobox"> &nbsp; </div>
      <div className="Footer__flexcontainer">
        <div className="Footer__left Footer__cols">
          <p>
            This web-app was built to assist employees at Cafe Berlin in
            calculating tip-sharing splits. While it was written as a bespoke
            solution for a specific restaurant, it's FOSS and I encourage you to
            fork it on &rarr;&nbsp;
            <a href="https://github.com/zabiri/cafeberlin-tipshare">GitHub</a>.
          </p>
        </div>
        <div className="Footer__right Footer__cols">
          <ul class="Footer__list">
            <li>
              <a href="http://zachbiri.com">
                <i class="fab fa-react" />&nbsp;
                <i class="fab fa-html5" />&nbsp;
                <i class="fab fa-js-square" />&nbsp;
                <i class="fab fa-sass" />
                : Zach Biri
              </a>
            </li>
            <li>
              <a href="mailto:zachbiri@gmail.com">
                <i class="fas fa-envelope" /> : zachbiri@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/zabiri/cafeberlin-tipshare">
                <i class="fab fa-github" /> : zabiri/cafeberlin-tipshare
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/cafeberlincomo/">
                <i class="fab fa-facebook" /> : @cafeberlincomo
              </a>
            </li>
            <li>
              <i class="fas fa-copyright" /> :{" "}
              <a href="http://cafeberlincomo.com">Cafe Berlin 2018</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
