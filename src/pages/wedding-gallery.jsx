import React, { useState ,useEffect} from "react";
import AOS from "aos";

import img2 from "../assets/wedding/photo_2025-09-04_23-32-22.jpg"
import img3 from "../assets/wedding/photo_2025-09-04_23-33-27.jpg"
import img4 from "../assets/wedding/photo_2025-09-04_23-33-33.jpg"
import img5 from "../assets/wedding/photo_2025-09-04_23-33-41.jpg"
import img6 from "../assets/wedding/photo_2025-09-04_23-33-46.jpg"
import img7 from "../assets/wedding/photo_2025-09-04_23-33-52.jpg"
import img8 from "../assets/wedding/photo_2025-09-04_23-34-00.jpg"
import img9 from "../assets/wedding/photo_2025-09-04_23-34-04.jpg"
import img1 from "../assets/wedding/photo_2025-09-04_23-34-13.jpg"
import img10 from "../assets/wedding/photo_2025-09-04_23-34-17.jpg"
import img11 from "../assets/wedding/photo_2025-09-04_23-34-30.jpg"
import img12 from "../assets/wedding/photo_2025-09-04_23-34-41.jpg"
import img13 from "../assets/wedding/photo_2025-09-04_23-34-47.jpg"
import img14 from "../assets/wedding/photo_2025-09-04_23-35-51.jpg"
import img15 from "../assets/wedding/photo_2025-09-04_23-35-58.jpg"
import img16 from "../assets/wedding/photo_2025-09-04_23-36-04.jpg"
import img17 from "../assets/wedding/photo_2025-09-04_23-36-12.jpg"
import img18 from "../assets/wedding/photo_2025-09-04_23-36-17.jpg"
import img19 from "../assets/wedding/photo_2025-09-04_23-36-23.jpg"
import img20 from "../assets/wedding/photo_2025-09-04_23-36-28.jpg"
import img21 from "../assets/wedding/photo_2025-09-04_23-36-34.jpg"
import img22 from "../assets/wedding/photo_2025-09-04_23-36-41.jpg"
import img28 from "../assets/wedding/photo_2025-09-04_23-36-46.jpg"
import img23 from "../assets/wedding/photo_2025-09-04_23-36-52.jpg"
import img24 from "../assets/wedding/photo_2025-09-04_23-36-59.jpg"
import img25 from "../assets/wedding/photo_2025-09-04_23-37-05.jpg"
import img26 from "../assets/wedding/photo_2025-09-04_23-37-10.jpg"
import img27 from "../assets/wedding/photo_2025-09-04_23-37-19.jpg"
import img29 from "../assets/wedding/photo_2025-09-04_23-37-24.jpg"
import img30 from "../assets/wedding/photo_2025-09-04_23-37-30.jpg"
import img31 from "../assets/wedding/photo_2025-09-04_23-37-37.jpg"
import img32 from "../assets/wedding/photo_2025-09-04_23-37-44.jpg"
import img33 from "../assets/wedding/photo_2025-09-04_23-37-50.jpg"
import img34 from "../assets/wedding/photo_2025-09-04_23-37-57.jpg"
import img35 from "../assets/wedding/photo_2025-09-04_23-38-02.jpg"
import img36 from "../assets/wedding/photo_2025-09-04_23-38-12.jpg"
import img37 from "../assets/wedding/photo_2025-09-04_23-38-21.jpg"
import img38 from "../assets/wedding/photo_2025-09-04_23-38-26.jpg"
import img39 from "../assets/wedding/photo_2025-09-04_23-38-33.jpg"
import img40 from "../assets/wedding/photo_2025-09-04_23-38-41.jpg"
import img41 from "../assets/wedding/photo_2025-09-04_23-38-47.jpg"
import img42 from "../assets/wedding/photo_2025-09-04_23-38-54.jpg"
import img43 from "../assets/wedding/photo_2025-09-04_23-38-59.jpg"



export default function WeddingImage(){
    useEffect(() => {
        AOS.init({
          duration: 800,
          easing: "ease-in-out",
          once: false, // animate every time element scrolls in view
          mirror: true,
        });
        }, []);
    const images = [
        img1,  img14, img31,img34,
        img26, img27, img29, img5, img6, img11,
        img30,img7,img10,img8, img22, img43,
        img13,img19,img17,img18,
        img32,img35,img36,img37,
        img9,img4,img3, img23,
        img24, img25, img15, img21,img42,
        img20,img12, img3, img16, img2,
        img29, img38,img33,img34,
        img39, img40, img41, img28
      ];
    
      // Track tapped image on mobile
      const [activeIndex, setActiveIndex] = useState(null);
    
      const handleTouch = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
    return(
        <div className="flex flex-col justify-center items-center gap-6  py-20">
      <h1 className="text-3xl text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4 "
        data-aos="fade-down" 
        data-aos-once="true"
      >
        Wedding
      </h1>
      <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
        <p className="text-xl text-white text-center " data-aos="zoom-in" data-aos-once="true">
          Capturing the joy, love, and special moments of your wedding day with style and care.
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
    )
}