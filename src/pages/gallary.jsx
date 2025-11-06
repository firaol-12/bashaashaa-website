import React, { useState } from "react";
import { Link } from "react-router-dom";
import { images } from "./images.jsx";

const GallaryImage= images.gallery;

import "./gallary.css";

export default function Gallery() {

   
  const [activeIndex, setActiveIndex] = useState(null);

  const handleTouch = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-6 ">
      <h2 className="text-3xl text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4  2xl:text-5xl"
        data-aos="fade-down" 
        data-aos-once="true"
      >
        Our Work
      </h2>
      <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center my-3 ">
        <p className="text-xl text-white text-center  2xl:text-2xl  2xl:py-5" data-aos="zoom-in" data-aos-once="true">Explore our collection of photographs,
        where passion and expertise come together 
        to tell every story
        </p>
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 px-15 gap-5 py-8 md:px-10 lg:px-38 ">
        {GallaryImage.map((src, index) => (
          <div
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            className="relative overflow-hidden  shadow-lg mb-6 break-inside-avoid group"
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

      <div className="cursor-pointer">
        <Link to={"/photos"} >
        <button className="border border-[rgb(11,59,91)] bg-[rgb(11,59,91)] text-white hover:bg-white hover:text-[rgb(11,59,91)] cursor-pointer text-xl px-4 py-2">View more</button>
      </Link>
      </div>
      
      
    </div>
  );
}
