import React from "react";
import "./Landing.scss";
export default function Landing() {
  return (
    <div id="landing">
      <div className="under">
        <div className="color-overlay" />
        <header>
          <h2 id="logo">
            projekt<span className="twotwo">202</span>
          </h2>
          <nav>
            <ul>
              <li>WHY PROJEKT202?</li>
              <li>PRACTICES</li>
              <li>METHODOLOGY</li>
              <li>PEOPLE</li>
              <li>NEWS & INSIGHTS</li>
              <li>JOIN US</li>
              <li id="contact-us">
                <span id="contact">CONTACT US </span>
              </li>
            </ul>
          </nav>
        </header>
      </div>
      <main>
        <div id="middle">
          <p id="site-desc">
            <strong>experience-driven transformation</strong>
          </p>
        </div>
        <div id="services">
          {" "}
          <p>Strategy |</p> <p>UX Design |</p> <p>Development |</p>{" "}
          <p>Marketing</p>
        </div>
      </main>
    </div>
  );
}
