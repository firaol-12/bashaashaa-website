import React, { useState ,useEffect} from "react";
import AOS from "aos";
import img1 from "../assets/gallery/photo_2025-09-01_00-27-16.jpg"
import img2 from "../assets/gallery/photo_2025-09-01_00-27-53.jpg"
import img3 from "../assets/gallery/photo_2025-09-01_00-28-33.jpg"
import img4 from "../assets/gallery/photo_2025-09-01_00-29-09.jpg"
import img5 from "../assets/gallery/photo_2025-09-01_00-30-22.jpg"
import img6 from "../assets/gallery/photo_2025-09-01_00-30-39.jpg"
import img7 from "../assets/gallery/photo_2025-09-01_00-35-11.jpg"
import img8 from "../assets/gallery/photo_2025-09-01_00-35-20.jpg"
import img9 from "../assets/gallery/photo_2025-09-01_00-36-49.jpg"
import img10 from "../assets/gallery/photo_2025-09-01_00-37-00.jpg"
import img11 from "../assets/gallery/photo_2025-09-01_00-37-13.jpg"
import img12 from "../assets/gallery/photo_2025-09-01_00-37-31.jpg"
import img13 from "../assets/gallery/photo_2025-09-01_00-38-23.jpg"
import img14 from "../assets/gallery/photo_2025-09-01_00-38-51.jpg"
import img15 from "../assets/gallery/photo_2025-09-01_00-39-15.jpg"
import img16 from "../assets/gallery/photo_2025-09-01_00-40-15.jpg"
import img17 from "../assets/gallery/photo_2025-09-01_00-40-46.jpg"
import img18 from "../assets/gallery/photo_2025-09-01_00-41-31.jpg"
import img19 from "../assets/gallery/photo_2025-09-01_00-41-45.jpg"
import img20 from "../assets/gallery/photo_2025-09-01_00-42-20.jpg"
import img21 from "../assets/gallery/photo_2025-09-01_00-42-52.jpg"
import img22 from "../assets/gallery/photo_2025-09-01_00-43-12.jpg"
import img23 from "../assets/gallery/photo_2025-09-01_00-44-10.jpg"
import img24 from "../assets/gallery/photo_2025-09-01_00-51-47.jpg"
import img25 from "../assets/gallery/photo_2025-09-01_00-44-15.jpg"
import img26 from "../assets/gallery/photo_2025-09-01_00-44-29.jpg"
import img27 from "../assets/gallery/photo_2025-09-01_00-45-12.jpg"
import img28 from "../assets/gallery/photo_2025-09-01_00-45-47.jpg"
import img29 from "../assets/gallery/photo_2025-09-01_00-46-30.jpg"
import img30 from "../assets/gallery/photo_2025-09-01_00-46-58.jpg"
import img31 from "../assets/gallery/photo_2025-09-01_00-47-41.jpg"
import img32 from "../assets/gallery/photo_2025-09-01_00-47-50.jpg"
import img33 from "../assets/gallery/photo_2025-09-01_00-47-59.jpg"
import img34 from "../assets/gallery/photo_2025-09-01_00-48-18.jpg"
import img35 from "../assets/gallery/photo_2025-09-01_00-48-35.jpg"
import img36 from "../assets/gallery/photo_2025-09-01_00-49-00.jpg"
import img37 from "../assets/gallery/photo_2025-09-01_00-49-27.jpg"
import img38 from "../assets/gallery/photo_2025-09-01_00-49-49.jpg"
import img39 from "../assets/gallery/photo_2025-09-01_00-50-05.jpg"
import img40 from "../assets/gallery/photo_2025-09-01_00-50-28.jpg"
import img41 from "../assets/gallery/photo_2025-09-01_00-51-02.jpg"
import img42 from "../assets/gallery/photo_2025-09-01_00-51-19.jpg"
import img43 from "../assets/gallery/photo_2025-09-01_00-51-32.jpg"
import img44 from "../assets/gallery/photo_2025-09-01_00-51-47.jpg"
import img45 from "../assets/gallery/photo_2025-09-01_00-52-06.jpg"
import img46 from "../assets/gallery/photo_2025-09-01_00-52-20.jpg"
import img47 from "../assets/gallery/photo_2025-09-01_00-52-33.jpg"
import img48 from "../assets/gallery/photo_2025-09-01_00-52-39.jpg"
import img49 from "../assets/gallery/photo_2025-09-01_00-52-44.jpg"
import img50 from "../assets/gallery/photo_2025-09-01_00-53-28.jpg"
import img51 from "../assets/gallery/photo_2025-09-01_00-53-48.jpg"
// import img16 from "../assets/gallery"
// import img16 from "../assets/gallery"

import { Eye } from "lucide-react"; 
/// nice icon (needs `lucide-react`)
import "./gallary.css";

export default function Gallery() {
  
  const images = [
    img1, img12, img13, 
    img9,img37,img38,img7,  img16, img2,
    img4,img8,img24,img41, img42,
     img35, img36, img3, img14,
    img43,img40,  img11,img6,img46, img47,
    img49,img48,img50, img44, img45, img18,
    img19, img20, img21, img15, img5, 
     img26, img27, img28, img29,
    img30, img31,img32, img33, img34,
    img39,img22, img23,
    img25, img10, img17, 
  ];
  useEffect(() => {
    AOS.refresh(); // refresh animations for new elements
  }, []);
  // Track tapped image on mobile
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 py-20">
      <h1 className="text-3xl text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4 "
        data-aos="fade-down" 
        data-aos-once="true"
      >
        Our Work
      </h1>
      <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
        <p className="text-xl text-white text-center " data-aos="zoom-in" data-aos-once="true">Explore our collection of photographs,
        where passion and expertise come together 
        to tell every story
        </p>
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 px-15 gap-5 py-8 md:px-10 lg:px-38 ">
        {images.map((src, index) => (
          <div
            key={index}
            data-aos="fade-up"
            // data-aos-delay={Math.min(index * 50, 500)}
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
