import React from "react";
import "./Landing.scss";
export default function Landing() {
  return (
    <div id="landing">
      <header>
        <h2 id="logo">Project202</h2>
        <nav>
          <ul>
            <li>WHY PROJEKT202?</li>
            <li>PRACTICES</li>
            <li>METHODOLOGY</li>
            <li>PEOPLE</li>
            <li>NEWS & INSIGHTS</li>
            <li>JOIN US</li>
            <li id="contact-us">CONTACT US</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>experience-driven transformation</h1>
        <div id="services">
          <h3>Strategy | UX Design | Development | Marketing</h3>
        </div>
      </main>
    </div>
  );
}
