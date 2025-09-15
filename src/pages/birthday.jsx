import React, { useState ,useEffect} from "react";
import AOS from "aos";

import img1 from "../assets/birthday/_V8A4281.jpg"
import img2 from "../assets/birthday/_V8A4304.jpg"
import img3 from "../assets/birthday/_V8A4407.jpg"
import img4 from "../assets/birthday/_V8A4415.jpg"
import img5 from "../assets/birthday/photo_2025-09-04_23-06-10.jpg"
import img6 from "../assets/birthday/photo_2025-09-04_23-06-28.jpg"
import img7 from "../assets/birthday/photo_2025-09-04_23-06-38.jpg"
import img8 from "../assets/birthday/photo_2025-09-04_23-06-44.jpg"
import img9 from "../assets/birthday/photo_2025-09-04_23-06-51.jpg"
import img10 from "../assets/birthday/photo_2025-09-04_23-06-57.jpg"
import img11 from "../assets/birthday/photo_2025-09-04_23-07-03.jpg"

export default function Birthday(){
    useEffect(() => {
      AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false, // animate every time element scrolls in view
      mirror: true,
    });
    }, []);
    const images = [
        img1, img3,img10,img8,
        img9, img3, img6,img4,
        img7, img5, img2,img11
      ];
    
      // Track tapped image on mobile
        const [activeIndex, setActiveIndex] = useState(null);
      
        const handleTouch = (index) => {
          setActiveIndex(activeIndex === index ? null : index);
        };
      
        return (
          <div className="flex flex-col justify-center items-center gap-6 py-20">
            <h1 className="text-3xl  text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4 "
              data-aos="fade-down" 
              data-aos-once="true"
            >
              Gallery
            </h1>
            <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
              <p className="text-xl text-white text-center " data-aos="zoom-in" data-aos-once="true">
                  Turning birthday celebrations into unforgettable memories.
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
      