import React, { useState } from "react";
import { Link } from "react-router-dom";
import img1 from "../assets/home/home/IMG_0144.JPG"
import img2 from "../assets/home/home/IMG_20250905_130603_628.JPG"
import img3 from "../assets/home/home/IMG_2874.JPG"
import img4 from "../assets/home/home/photo_2025-09-05_22-08-09.jpg"
import img5 from "../assets/home/home/photo_2025-09-05_22-08-23.jpg"
import img6 from "../assets/home/home/photo_2025-09-05_22-08-51.jpg"
import img7 from "../assets/home/home/photo_2025-09-05_22-08-58.jpg"
import img8 from "../assets/home/home/photo_2025-09-05_22-09-38.jpg"
import img9 from "../assets/home/home/photo_2025-09-05_22-09-45.jpg"
import img10 from "../assets/home/home/photo_2025-09-05_22-09-52.jpg"
import img11 from "../assets/home/home/photo_2025-09-05_22-09-59.jpg"
import img12 from "../assets/home/home/photo_2025-09-05_22-10-09.jpg"
import img13 from "../assets/home/home/photo_2025-09-05_22-10-17.jpg"
import img14 from "../assets/home/home/photo_2025-09-05_22-10-24.jpg"
import img15 from "../assets/home/home/photo_2025-09-05_22-11-05.jpg"
import img16 from "../assets/home/home/photo_2025-09-05_22-11-14.jpg"
import img17 from "../assets/home/home/photo_2025-09-05_22-11-23.jpg"
import img18 from "../assets/home/home/photo_2025-09-05_22-11-41.jpg"
import img19 from "../assets/home/home/photo_2025-09-05_22-11-54.jpg"
import img20 from "../assets/home/home/photo_2025-09-05_22-12-09.jpg"
import img21 from "../assets/home/home/photo_2025-09-05_22-12-16.jpg"
import img22 from "../assets/home/home/photo_2025-09-05_22-12-31.jpg"
import img23 from "../assets/home/home/IMG_0478.JPG"
import img24 from "../assets/home/home/IMG_5358.JPG"
import img25 from "../assets/home/home/photo_2025-09-05_22-12-49.jpg"
import img26 from "../assets/home/home/photo_2025-09-05_22-13-01.jpg"
import img27 from "../assets/home/home/photo_2025-09-05_22-13-11.jpg"
import img28 from "../assets/home/home/photo_2025-09-05_22-13-28.jpg"
import img29 from "../assets/home/home/photo_2025-09-05_22-13-52.jpg"
import img30 from "../assets/home/home/photo_2025-09-05_22-14-13.jpg"
import img31 from "../assets/home/home/photo_2025-09-05_22-14-28.jpg"
import img32 from "../assets/home/home/IMG_0443.JPG"
import img33 from "../assets/home/home/IMG_8524.JPG"

import "./gallary.css";

export default function Gallery() {
  
  const images = [
    img1, img12,img5,  img13,
    img9,  img20, img3,img32, img15,img16,
    img19, img10, img21, img22,img33,
    img24,  img25, img26, img27,img28,
    img29, img30,img31,img23,
    img17,  img18, img11, img8,img7,
    img6, img4,img14,img2
  ];
   
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6">
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
            data-aos-delay={index * 100}
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
      <Link to={"/photos"}>
        <button className="border border-[rgb(11,59,91)] bg-[rgb(11,59,91)] text-white hover:bg-white hover:text-[rgb(11,59,91)] cursor-pointer text-xl px-4 py-2">View more</button>
      </Link>
      
    </div>
  );
}
