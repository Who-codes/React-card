import React from "react";

import "./style.css";

import Info from "./Components/Info";
import About from "./Components/About";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <div className="container">
      <Info />
      <About />
      <Footer />
    </div>
  );
}
