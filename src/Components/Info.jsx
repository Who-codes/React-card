import React from "react";
import mail from "../images/Mail.png";
import linkdin from "../images/linkedin.png";

export default function Info() {
  return (
    <div className="info">
      <div className="img"></div>
      <div className="info-section">
        <h3 className="name">Laura Smith</h3>
        <h5 className="work">Frontend Developer</h5>
        <p className="website">laurasmith.website</p>
        <div className="buttons">
          <a href="#" className="email">
            <img src={mail} alt="Mail" />
            Email
          </a>
          <a href="#" className="linkdin">
            <img src={linkdin} alt="Linkdin" />
            Linkdin
          </a>
        </div>
      </div>
    </div>
  );
}
