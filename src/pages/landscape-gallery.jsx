import React, { useState ,useEffect} from "react";
import { images } from "./images.jsx";

const LandscapeImage= images.landscape;
import AOS from "aos";

export default function Landscape(){
    useEffect(() => {
      AOS.init({
      duration: 800,
      easing: "ease-in-out",
      once: false,
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
            <h2 className="text-3xl text-[rgb(11,59,91)] text-center h1 border-3 border-[rgb(11,59,91)] px-4  2xl:text-5xl"
              data-aos="fade-down" 
              data-aos-once="true"
            >
              Landscape
            </h2>
            <div className="px-6 md:px-20 lg:px-100 flex justify-center items-center">
              <p className="text-xl text-white text-center 2xl:text-2xl  2xl:py-5" data-aos="zoom-in" data-aos-once="true">
                    Showcasing the beauty of nature through stunning landscape photography.
              </p>
            </div>
      
            {/* Masonry Layout */}
            <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 px-15 gap-5 py-8 md:px-10 lg:px-38 ">
              {LandscapeImage.map((src, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  className="relative overflow-hidden shadow-lg mb-6 break-inside-avoid group"
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
      