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
          <ul className="Footer__list">
            <li>
              <a href="http://zachbiri.com">
                <i className="fab fa-react" />&nbsp;
                <i className="fab fa-html5" />&nbsp;
                <i className="fab fa-js-square" />&nbsp;
                <i className="fab fa-sass" />
                : Zach Biri
              </a>
            </li>
            <li>
              <a href="mailto:zachbiri@gmail.com">
                <i className="fas fa-envelope" /> : zachbiri@gmail.com
              </a>
            </li>
            <li>
              <a href="https://github.com/zabiri/cafeberlin-tipshare">
                <i className="fab fa-github" /> : zabiri/cafeberlin-tipshare
              </a>
            </li>

            <li>
              <a href="https://www.facebook.com/cafeberlincomo/">
                <i className="fab fa-facebook" /> : @cafeberlincomo
              </a>
            </li>
            <li>
              <i className="fas fa-copyright" /> :{" "}
              <a href="http://cafeberlincomo.com">Cafe Berlin 2018</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
