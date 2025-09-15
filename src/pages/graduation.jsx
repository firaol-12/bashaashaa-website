import React, { useState ,useEffect} from "react";
import AOS from "aos";
import img1 from "../assets/graduation/photo_2025-09-05_01-38-02.jpg"
import img2 from "../assets/graduation/photo_2025-09-05_01-38-10.jpg"
import img3 from "../assets/graduation/photo_2025-09-05_01-38-20.jpg"
import img4 from "../assets/graduation/photo_2025-09-05_01-38-24.jpg"
import img5 from "../assets/graduation/photo_2025-09-05_01-38-32.jpg"
import img6 from "../assets/graduation/photo_2025-09-05_01-38-40.jpg"
import img7 from "../assets/graduation/photo_2025-09-05_01-42-17.jpg"
import img8 from "../assets/graduation/photo_2025-09-05_01-42-22.jpg"
import img9 from "../assets/graduation/photo_2025-09-05_01-42-28.jpg"
import img10 from "../assets/graduation/photo_2025-09-05_01-42-34.jpg"
import img11 from "../assets/graduation/photo_2025-09-05_01-42-37.jpg"
import img12 from "../assets/graduation/photo_2025-09-05_01-42-44.jpg"
import img13 from "../assets/graduation/photo_2025-09-05_01-42-51.jpg"
import img14 from "../assets/graduation/photo_2025-09-05_01-42-56.jpg"
import img15 from "../assets/graduation/photo_2025-09-05_01-43-02.jpg"
import img16 from "../assets/graduation/photo_2025-09-05_01-43-07.jpg"
import img17 from "../assets/graduation/photo_2025-09-05_01-43-22.jpg"
import img18 from "../assets/graduation/photo_2025-09-05_01-43-27.jpg"
import img19 from "../assets/graduation/photo_2025-09-05_01-43-31.jpg"
import img20 from "../assets/graduation/photo_2025-09-05_01-43-37.jpg"
import img21 from "../assets/graduation/photo_2025-09-05_01-43-42.jpg"
import img22 from "../assets/graduation/photo_2025-09-05_01-43-46.jpg"
import img23 from "../assets/graduation/photo_2025-09-05_01-43-50.jpg"
import img24 from "../assets/graduation/photo_2025-09-05_01-43-56.jpg"
import img25 from "../assets/graduation/photo_2025-09-05_01-44-00.jpg"
import img26 from "../assets/graduation/photo_2025-09-05_01-44-08.jpg"
import img27 from "../assets/graduation/photo_2025-09-05_01-44-14.jpg"
import img28 from "../assets/graduation/photo_2025-09-05_01-44-21.jpg"
import img29 from "../assets/graduation/photo_2025-09-05_01-44-28.jpg"
import img30 from "../assets/graduation/photo_2025-09-05_01-44-34.jpg"
import img31 from "../assets/graduation/photo_2025-09-05_01-44-39.jpg"
import img32 from "../assets/graduation/photo_2025-09-05_01-44-46.jpg"
import img33 from "../assets/graduation/photo_2025-09-05_01-44-50.jpg"
import img34 from "../assets/graduation/photo_2025-09-05_01-44-55.jpg"
import img35 from "../assets/graduation/photo_2025-09-05_01-45-01.jpg"
import img36 from "../assets/graduation/photo_2025-09-05_01-45-06.jpg"
import img37 from "../assets/graduation/photo_2025-09-05_01-45-11.jpg"


// import { Eye } from "lucide-react"; // nice icon (needs `lucide-react`)
import "./gallary.css";

export default function Graduation() {
  
  const images = [
    img1, img2, img3, img4, img5, img6,
    img7, img8, img9, img10, img11, img12,
    img13, img14, img15, img16, img17, img18,
    img19, img20, img21, img22, img23, img24,
    img25, img26, img27, img28, img29, img30,
    img31, img32, img33, img35, img34,
    img36, img37
  ];
   useEffect(() => {
      AOS.init({
        duration: 800,
        easing: "ease-in-out",
        once: false, // animate every time element scrolls in view
        mirror: true,
      });
      }, []);
  
  // Track tapped image on mobile
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 py-20">
      <h1 className="text-3xl text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4"
        data-aos="fade-down" 
        data-aos-once="true"
      >
        Gallery
      </h1>
      <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
        <p className="text-lg text-white text-center " data-aos="zoom-in" data-aos-once="true">
          Mark your graduation with portraits that showcase your achievement, joy, and bright future ahead.
        </p>
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 px-15 gap-5 py-8 md:px-10 lg:px-38 ">
        {images.map((src, index) => (
          <div
            key={index}
            data-aos="fade-up"
            className="relative overflow-hidden rounded-xl shadow-lg mb-6 break-inside-avoid group"
            onTouchStart={() => handleTouch(index)}
          >
            {/* Image */}
            <img
              src={src}
              alt={`Gallery ${index + 1}`}
              className={`w-full transform transition-transform duration-500 
                ${activeIndex === index ? "scale-110" : "scale-100"}
                group-hover:scale-110`}
            />

            {/* Dark overlay */}
            <div
              className={`absolute inset-0 bg-black/50 flex items-center justify-center 
                transition-opacity duration-500 
                ${activeIndex === index ? "opacity-100" : "opacity-0"} 
                group-hover:opacity-100`}
            >
              {/* <Eye className="text-white w-10 h-10" /> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
