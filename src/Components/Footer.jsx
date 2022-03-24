import React from "react";
import Twitter from "../images/Twitter-Icon.png";
import Instagram from "../images/Instagram-Icon.png";
import Facebook from "../images/Facebook-Icon.png";
import Github from "../images/GitHub-Icon.png";

export default function Footer() {
  return (
    <footer>
      <img src={Twitter} alt="Twitter" className="Twiter" />
      <img src={Facebook} alt="Twitter" className="Facebook" />
      <img src={Instagram} alt="Twitter" className="Instagram" />
      <img src={Github} alt="Twitter" className="Github" />
    </footer>
  );
}
