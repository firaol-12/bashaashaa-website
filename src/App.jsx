import React, {useEffect} from "react";
import { Routes, Route } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import ScrollToTop from "./pages/ScrollToTop.jsx";
import Navbar from "./components/navbar";
import Home from "./pages/home";
import Survices from "./pages/survices";
import Gallary from "./pages/gallary";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Pages from "./pages.jsx";
import WeddingImage from "./pages/wedding-gallery"; 
import EventsGallary from "./pages/Eventes-gallery.jsx"
import KidsGallery from "./pages/kids.-gallery.jsx"
import FamilyImage from "./pages/family-gallery.jsx";
import Graduation from "./pages/graduation.jsx"
import Photos from "./pages/gallary-photos.jsx"
import Models from "./pages/model-gallery.jsx"
import Footer from "./components/footer.jsx";
import Birthday from "./pages/birthday.jsx";
import Travel from "./pages/Travel-gallery.jsx";
import Landscape from "./pages/landscape-gallery.jsx";

export default function App(){
   useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,     // animate on first scroll-in only
      mirror: true,  // don't reverse on scroll-up
    });
  }, []);

  return(
    <div className="">
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Pages />} />
        <Route path="/survices" element={<Survices />} />
        <Route path="/gallery" element={<Gallary />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/wedding" element={<WeddingImage />} />
        <Route path="/Graduation" element={<Graduation />} />
        <Route path="/Kids" element={<KidsGallery />} />
        <Route path="/Family" element={<FamilyImage />} />
        <Route path="/Events" element={<EventsGallary />} />
        <Route path="/photos" element={<Photos />} />
        <Route path="/Models" element={<Models />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/travel" element={<Travel />} />
        <Route path="/landscape" element={<Landscape />} />
      </Routes>
      <Footer />
    </div>
  )
};