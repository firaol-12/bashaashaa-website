import React from "react";
import Home from "./pages/home";
import Survices from "./pages/survices";
import Gallery from "./pages/gallary";
import About from "./pages/team";
import Contact from "./pages/contact";

export default function Pages() {
  return (
    <div className="">
      <div id="home"><Home /></div>
      <div id="services"><Survices /></div>
      <div id="gallery"><Gallery /></div>
      <div id="team"><About /></div>
      <div id="contact"><Contact /></div>
    </div>
  );
}
